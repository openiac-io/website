import Link from 'next/link';
import { Terminal } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background py-12 mt-auto">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="flex items-center gap-2">
            <Terminal className="h-5 w-5 text-brand-500" />
            <span className="font-semibold text-lg text-foreground">OpenIaC</span>
          </div>
          <span className="hidden sm:inline text-muted-foreground/40">|</span>
          <span className="text-xs text-muted-foreground">
            Enterprise Hybrid Cloud &amp; Container Platform Framework
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <Link href="/#platforms" className="hover:text-foreground transition-colors">
            Platforms
          </Link>
          <Link href="/docs" className="hover:text-foreground transition-colors">
            Documentation
          </Link>
          <Link href="/docs/public-cloud" className="hover:text-foreground transition-colors">
            Terraform Cloud
          </Link>
          <a
            href="https://github.com/openiac-io/openiac"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors"
          >
            GitHub
          </a>
        </div>

        <div className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} OpenIaC Open Source Project. Apache-2.0 License.
        </div>
      </div>
    </footer>
  );
}