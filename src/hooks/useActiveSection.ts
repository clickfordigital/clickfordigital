import { useState, useEffect, useRef } from "react";

export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>("");
  const sectionIdsRef = useRef(sectionIds);

  useEffect(() => {
    sectionIdsRef.current = sectionIds;
  }, [sectionIds]);

  useEffect(() => {
    const handleScroll = () => {
      const ids = sectionIdsRef.current;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // If we are at the bottom of the page, activate the last section (usually Contact)
      if (scrollPosition + windowHeight >= documentHeight - 50) {
        if (ids.length > 0) {
          setActiveSection(ids[ids.length - 1]);
        }
        return;
      }

      let currentActive = ids[0] || "";

      // We look for the section whose top is less than or equal to an offset threshold (e.g. 150px) 
      // and whose bottom is greater than or equal to that same threshold.
      const threshold = 150;
      for (const id of ids) {
        const el = document.querySelector(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= threshold && rect.bottom >= threshold) {
            currentActive = id;
            break;
          }
        }
      }

      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once at start to capture initial active element
    handleScroll();
    
    // Also adjust on resize
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return activeSection;
}
