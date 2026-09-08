import Link from 'next/link';
import { Terminal } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12 mt-auto">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <Terminal className="h-5 w-5 text-brand-500" />
          <span className="font-semibold text-lg text-foreground">OpenIaC</span>
        </div>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <Link href="/docs" className="hover:text-foreground transition-colors">Documentation</Link>
          <a href="https://github.com/openiac-io/openiac" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors flex items-center gap-1">
            GitHub
          </a>
        </div>
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} OpenIaC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}