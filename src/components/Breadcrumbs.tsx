import React from "react";
import { ChevronRight, Home } from "lucide-react";
import { Link } from "./Router";

interface BreadcrumbsProps {
  currentPage: string;
}

export default function Breadcrumbs({ currentPage }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8 select-none">
      <ol className="flex items-center space-x-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
        <li>
          <Link
            to="/"
            className="flex items-center gap-1 hover:text-[#0ea5e9] dark:hover:text-[#0ea5e9] transition-colors duration-200"
          >
            <Home className="w-3.5 h-3.5" />
            Home
          </Link>
        </li>
        <li>
          <ChevronRight className="w-3 h-3 text-zinc-300 dark:text-zinc-700 shrink-0" />
        </li>
        <li className="text-zinc-800 dark:text-zinc-200 font-semibold truncate uppercase tracking-wider" aria-current="page">
          {currentPage}
        </li>
      </ol>
    </nav>
  );
}
