import Link from 'next/link';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const sidebarLinks = [
    { href: '/docs', label: 'Introduction' },
    { href: '/docs/getting-started', label: 'Getting Started' },
    { href: '/docs/online-deployment', label: 'Online Deployment' },
    { href: '/docs/offline-deployment', label: 'Offline Air-gapped' },
  ];

  return (
    <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-12">
      <aside className="w-full md:w-64 flex-shrink-0 border-r border-border md:min-h-[calc(100vh-200px)]">
        <nav className="sticky top-24 flex flex-col gap-2">
          <h4 className="font-semibold text-sm uppercase text-muted-foreground mb-4">Documentation</h4>
          {sidebarLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground hover:text-brand-500 hover:bg-muted/50 px-3 py-2 rounded-lg transition-colors text-sm font-medium"
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
