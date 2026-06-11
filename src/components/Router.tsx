import React, { createContext, useContext, useState, useEffect } from "react";

interface RouterContextType {
  path: string;
  navigate: (to: string) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export function RouterProvider({ children }: { children: React.ReactNode }) {
  const [path, setPath] = useState(() => {
    if (typeof window !== "undefined") {
      let currentPath = window.location.pathname;
      if (currentPath !== "/" && currentPath.endsWith("/")) {
        currentPath = currentPath.slice(0, -1);
      }
      return currentPath;
    }
    return "/";
  });

  const navigate = (to: string) => {
    let target = to;
    if (target !== "/" && target.endsWith("/")) {
      target = target.slice(0, -1);
    }
    window.history.pushState(null, "", target);
    setPath(target);
    // instant scroll to top on routing changes
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  useEffect(() => {
    const handlePopState = () => {
      let currentPath = window.location.pathname;
      if (currentPath !== "/" && currentPath.endsWith("/")) {
        currentPath = currentPath.slice(0, -1);
      }
      setPath(currentPath);
      window.scrollTo({ top: 0, behavior: "instant" });
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error("useRouter must be used within a RouterProvider");
  }
  return context;
}

interface LinkProps extends React.ComponentPropsWithoutRef<"a"> {
  to: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function Link({ to, children, className, id, onClick, ...props }: LinkProps) {
  const { navigate } = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Let browser open new tabs with original link targets if ctrl/meta/clicks are held, preserving accessible operations
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      return;
    }
    e.preventDefault();
    if (onClick) onClick(e);
    navigate(to);
  };

  return (
    <a href={to} id={id} className={className} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
