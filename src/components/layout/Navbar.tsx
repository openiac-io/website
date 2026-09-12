'use client';
import { Terminal } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-brand-500 p-1.5 rounded-md">
              <Terminal className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-foreground">OpenIaC</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</Link>
          
          <Link href="/docs" className="text-muted-foreground hover:text-foreground transition-colors">Documentation</Link>
        </nav>
        <div className="flex items-center gap-4">
          
        </div>
      </div>
    </header>
  );
}