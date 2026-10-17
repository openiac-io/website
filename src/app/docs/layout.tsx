import Link from 'next/link';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sidebarLinks = [
    { href: '/docs', label: 'Introduction' },
    { href: '/docs/getting-started', label: 'Getting Started (Vagrant)' },
    { href: '/docs/online-deployment', label: 'On-Premise Deployment' },
    { href: '/docs/offline-deployment', label: 'Offline Air-Gapped' },
    { href: '/docs/public-cloud', label: 'Public Cloud (Terraform)' },
  ];

  return (
    <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-12">
      <aside className="w-full md:w-64 flex-shrink-0 md:border-r border-border/60 md:pr-6 md:min-h-[calc(100vh-200px)]">
        <nav className="sticky top-24 flex flex-col gap-1.5">
          <h4 className="font-mono font-semibold text-xs uppercase tracking-wider text-brand-400 px-3 mb-3">
            Documentation
          </h4>
          {sidebarLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground hover:bg-muted/50 px-3 py-2 rounded-lg transition-colors text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="flex-1 min-w-0">
        <article className="prose prose-invert max-w-4xl prose-brand">
          {children}
        </article>
      </main>
    </div>
  );
}
