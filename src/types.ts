export interface CaseStudy {
  id: string;
  websiteName: string;
  industry: string;
  duration: string;
  challenges: string[];
  strategy: string[];
  results: {
    trafficIncrease: string;
    keywordRankings: string;
    conversionGrowth: string;
    beforeTrafficCount: number;
    afterTrafficCount: number;
    beforeKeywordsCount: number;
    afterKeywordsCount: number;
  };
  growthData: { month: string; traffic: number; keywords: number }[];
}

export interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  featuredImage: string;
  category: string;
  date: string;
  readTime: string;
  content?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  review: string;
  rating: number;
  avatar: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface AuditRequest {
  url: string;
  keywords: string;
  industry: string;
}

export interface AuditResult {
  url: string;
  score: number;
  summary: string;
  criticalIssues: string[];
  onPageChecklist: { check: string; status: 'passed' | 'warning' | 'failed'; recommendation: string }[];
  technicalChecklist: { check: string; status: 'passed' | 'warning' | 'failed'; recommendation: string }[];
  contentSuggestions: string[];
  trafficForecast: { month: string; potentialTraffic: number }[];
}
