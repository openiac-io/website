'use client';

import { Terminal, Globe } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link, usePathname, useRouter } from '@/i18n/routing';
import { useParams } from 'next/navigation';

export default function Navbar() {
  const t = useTranslations('Navbar');
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const locale = params.locale as string;

  const toggleLocale = () => {
    const nextLocale = locale === 'ko' ? 'en' : 'ko';
    router.replace(pathname, { locale: nextLocale });
  };

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
          <Link href="/#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Features
          </Link>
          <Link href="/#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </Link>
          <Link href="/docs" className="text-muted-foreground hover:text-foreground transition-colors">
            {t('docs')}
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleLocale}
            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1 rounded-md hover:bg-muted/50"
            title="Toggle Language"
          >
            <Globe className="h-4 w-4" />
            <span>{locale === 'ko' ? 'ENG' : 'KOR'}</span>
          </button>
          <Link 
            href="/#pricing" 
            className="text-sm font-medium bg-foreground text-background hover:bg-foreground/90 px-4 py-2 rounded-full transition-colors"
          >
            {t('getStarted')}
          </Link>
        </div>
      </div>
    </header>
  );
}
