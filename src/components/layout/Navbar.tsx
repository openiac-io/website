'use client';

import { Terminal, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="bg-gradient-to-br from-brand-500 to-indigo-600 p-1.5 rounded-lg shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform">
              <Terminal className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-foreground">OpenIaC</span>
          </Link>
          <span className="hidden sm:inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-xs font-mono text-muted-foreground border border-border">
            v2.0
          </span>
        </div>

        {/* Center Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/#platforms" className="text-muted-foreground hover:text-foreground transition-colors">
            Platforms
          </Link>
          <Link href="/#architecture" className="text-muted-foreground hover:text-foreground transition-colors">
            Architecture
          </Link>
          <Link href="/#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Why OpenIaC
          </Link>
          <Link href="/docs" className="text-muted-foreground hover:text-foreground transition-colors">
            Documentation
          </Link>
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/openiac-io/openiac"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-lg border border-border bg-muted/40 px-3.5 py-2 text-xs font-medium text-foreground hover:bg-muted transition-colors"
          >
            GitHub
            <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
          </a>
          <Link
            href="/docs/getting-started"
            className="inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-brand-500 transition-colors"
          >
            Quick Start
          </Link>
        </div>
      </div>
    </header>
  );
}