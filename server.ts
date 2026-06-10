import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI, Type } from "@google/genai";
import { createServer as createViteServer } from "vite";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = 3000;

// Temporary in-memory storage for leads (to show Mohan's live leads dashboard)
interface Lead {
  id: string;
  name: string;
  email: string;
  website?: string;
  message: string;
  date: string;
  service?: string;
  status: 'new' | 'contacted' | 'archived';
}

const leads: Lead[] = [
  {
    id: "lead-1",
    name: "Sarah Chen",
    email: "sarah@lumina-designs.com",
    website: "https://lumina-designs.com",
    message: "We need an on-page and technical audit for our eCommerce brand. We are seeing a steady drop in organic checkouts over the past month.",
    date: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    service: "SEO Audit + Technical SEO",
    status: "new"
  },
  {
    id: "lead-2",
    name: "Marcus Aurelius",
    email: "marcus@rome-builders.org",
    website: "https://rome-builders.org",
    message: "Looking for expert content strategy to rank for local keywords. Our business specializes in custom architecture in Rome, NY.",
    date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    service: "Content Strategy & Local SEO",
    status: "contacted"
  }
];

// 1. API: Get Leads (Mohan can access a live "leads panel" using a secret toggle or custom state to show actual conversion works!)
app.get("/api/leads", (req, res) => {
  res.json({ success: true, leads });
});

// 2. API: Submit Contact (Contact Lead Form)
app.post("/api/contact", (req, res) => {
  const { name, email, website, message, service } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "Please fill in all required fields." });
  }

  const newLead: Lead = {
    id: `lead-${Date.now()}`,
    name,
    email,
    website: website || "",
    message,
    date: new Date().toISOString(),
    service: service || "General Consultation",
    status: "new"
  };

  leads.unshift(newLead);
  res.json({ success: true, message: "Thank you! Your SEO consultation request has been received. Mohan will reach out to you within 24 hours.", lead: newLead });
});

// 3. API: Generate AI SEO Audit (Powered by Gemini)
app.post("/api/seo-audit", async (req, res) => {
  const { url, keywords, industry } = req.body;

  if (!url) {
    return res.status(400).json({ success: false, error: "Website URL is required." });
  }

  console.log(`Received SEO audit request for: ${url} (Keywords: ${keywords || "None"})`);

  // Try initializing Google Gen AI
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
    console.log("Using Mock generator (No active Gemini API Key).");
    return res.json({ success: true, isMock: true, data: generateMockAudit(url, keywords || "SEO", industry || "General Business") });
  }

  try {
    const ai = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });

    const targetKeywords = keywords ? `"${keywords}"` : "organic terms related to this sector";
    const sector = industry ? `within the "${industry}" vertical` : "its niche";

    const prompt = `You are Mohan, the lead SEO strategist and founder of ClickForDigital. 
    Analyze the website: "${url}" planning an SEO strategy targeting key phrases: ${targetKeywords} ${sector}.
    Generate a high-value, realistic, incredibly professional SEO audit.
    Provide realistic recommendations, issues, and content plans based on direct expert SEO knowledge.
    
    Make sure to output the response strictly matching the schema definitions. Do not include markdown wraps around the JSON itself.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
      config: {
        systemInstruction: "You are Mohan, a highly experienced SEO expert. You output detailed, high-converting, analytical website reviews in structured JSON metrics format.",
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            score: { type: Type.INTEGER, description: "Overall SEO health score out of 100" },
            summary: { type: Type.STRING, description: "Detailed summary overview of Mohan's high-level findings" },
            criticalIssues: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "3-4 top critical organic traffic bottlenecks found"
            },
            onPageChecklist: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  check: { type: Type.STRING, description: "E.g., Meta Title & Description, H1/H2 Heading Hierarchy, Image Alt Text, Internal Linking" },
                  status: { type: Type.STRING, description: "Must be 'passed', 'warning', or 'failed'" },
                  recommendation: { type: Type.STRING, description: "Specific advice to optimize" }
                },
                required: ["check", "status", "recommendation"]
              }
            },
            technicalChecklist: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  check: { type: Type.STRING, description: "E.g., Core Web Vitals, Mobile Responsiveness, XML Sitemap, SSL Security, Robots.txt Setup" },
                  status: { type: Type.STRING, description: "Must be 'passed', 'warning', or 'failed'" },
                  recommendation: { type: Type.STRING, description: "Technical optimization directive" }
                },
                required: ["check", "status", "recommendation"]
              }
            },
            contentSuggestions: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "3 unique high-intent article concepts or blog topics targeting keywords"
            },
            trafficForecast: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  month: { type: Type.STRING },
                  potentialTraffic: { type: Type.INTEGER }
                },
                required: ["month", "potentialTraffic"]
              },
              description: "A 6-month rising traffic projection if Mohan's SEO blueprint is implemented"
            }
          },
          required: ["score", "summary", "criticalIssues", "onPageChecklist", "technicalChecklist", "contentSuggestions", "trafficForecast"]
        }
      }
    });

    const resultText = response.text || "{}";
    const auditData = JSON.parse(resultText.trim());

    res.json({ success: true, isMock: false, data: { url, ...auditData } });
  } catch (error: any) {
    console.error("Gemini SEO Audit generation failed:", error);
    // Fallback to high-quality mock so the user experience is flawless
    res.json({
      success: true,
      isMock: true,
      errorOccurred: true,
      data: generateMockAudit(url, keywords || "SEO", industry || "General Business")
    });
  }
});

// Helper: SEO Audit intelligent Mock generator
function generateMockAudit(url: string, keywords: string, industry: string) {
  // Derive details depending on URL length or characters to make it customized
  const cleanUrl = url.replace(/^(https?:\/\/)?(www\.)?/, "");
  const hash = cleanUrl.length + (keywords.length * 2);
  const score = Math.floor(62 + (hash % 18)); // Realistic score between 62 and 80

  const onPageChecks = [
    {
      check: "Meta tags & Descriptions",
      status: score > 72 ? "warning" : "failed",
      recommendation: `Optimize current Title & Meta fields for "${cleanUrl}". Inject high-intent primary keyword "${keywords}" into the first 60 characters to lift organic Click-Through-Rate by up to 22%.`
    },
    {
      check: "Heading tags (H1-H4 hierarchy)",
      status: "warning",
      recommendation: "Ensure only one H1 tag exists, and structure your sub-topics sequentially (H2 for main subheadings, H3 for secondary). Current setup shows missing or poorly focused sub-headings."
    },
    {
      check: "Image ALT Optimization",
      status: score > 75 ? "passed" : "warning",
      recommendation: "Several key images lack alternative descriptive parameters. Append alt attributes summarizing content with variations of local terms relevant to the target industry."
    },
    {
      check: "Internal Linking Network",
      status: "failed",
      recommendation: "Increase links from deep high-authority pages to your primary transactional service hubs to pass authority (PageRank) and assist Google crawlers in discovery."
    }
  ];

  const technicalChecks = [
    {
      check: "Core Web Vitals & Loading Speed",
      status: "warning",
      recommendation: "Cumulative Layout Shift (CLS) and Largest Contentful Paint (LCP) can be optimized by loading large hero assets using lazy attributes and serving webp graphics."
    },
    {
      check: "SSL Security & HTTPS Certificate",
      status: "passed",
      recommendation: "The website uses active HTTPS standards. Ensure all references to non-secure scripts or resources (HTTP calls) are eliminated to maintain 100% security."
    },
    {
      check: "XML Sitemap & Robots.txt",
      status: hash % 2 === 0 ? "passed" : "warning",
      recommendation: "Ensure your XML sitemap listing is regularly re-submitted to Google Search Console to guarantee fast, continuous updates when new articles or services are uploaded."
    }
  ];

  const contentSuggestions = [
    `The Ultimate Guide to ${keywords || "SEO Solutions"} in ${industry || "the Modern Market"}`,
    `5 Costly SEO Blunders ${industry || "Industry leaders"} routinely make (and how to avoid them)`,
    `How we increased local lead conversions for a ${industry || "similar website"} by 140% using specialized long-tail terms`
  ];

  const currentTraffic = Math.floor(350 + (hash * 12));
  const trafficForecast = Array.from({ length: 6 }).map((_, index) => {
    const factor = Math.pow(1.22, index + 1);
    return {
      month: `Month ${index + 1}`,
      potentialTraffic: Math.floor(currentTraffic * factor)
    };
  });

  return {
    url,
    score,
    summary: `Based on Mohan's analysis, "${cleanUrl}" has established fundamental structural authority but ranks poorly for target competitive keywords like "${keywords}". By addressing major on-page keyword gaps and modernizing Core Web Vitals, organic client acquisition can safely surge.`,
    criticalIssues: [
      `Critical keyword exclusion for "${keywords}" inside key meta headers, limiting immediate ranking capability.`,
      "Suboptimal Core Web Vitals resulting in high latency, which risks Google ranking downgrades.",
      "Thin content depth compared to immediate high-ranking direct competitors in this niche."
    ],
    onPageChecklist: onPageChecks,
    technicalChecklist: technicalChecks,
    contentSuggestions,
    trafficForecast
  };
}

// 4. Vite and static asset serving
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
}

startServer();
