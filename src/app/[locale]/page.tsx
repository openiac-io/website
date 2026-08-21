'use client';

import { useState } from 'react';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { Server, Lock, Package, ArrowRight, Check } from 'lucide-react';
import WaitlistModal from '@/components/WaitlistModal';
import { useTranslations } from 'next-intl';

export default function Home() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('');
  const tHero = useTranslations('Hero');
  const tFeatures = useTranslations('Features');
  const tPricing = useTranslations('Pricing');

  const openWaitlist = (plan: string) => {
    setSelectedPlan(plan);
    setIsWaitlistOpen(true);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-900/20 via-background to-background z-0" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-sm font-medium text-brand-400 mb-8">
              <span className="flex h-2 w-2 rounded-full bg-brand-500 mr-2 animate-pulse"></span>
              {tHero('badge')}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
              {tHero('titleLine1')}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-indigo-400">
                {tHero('titleLine2')}
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              {tHero('description')}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={() => openWaitlist(tPricing('enterprise.name'))}
                className="w-full sm:w-auto rounded-full bg-brand-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-brand-500 hover:shadow-brand-500/25 transition-all flex items-center justify-center gap-2"
              >
                {tHero('joinWaitlist')} <ArrowRight className="h-5 w-5" />
              </button>
              <a 
                href="https://github.com/openiac-io" 
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto rounded-full border border-border bg-background/50 backdrop-blur-sm px-8 py-4 text-base font-medium text-foreground hover:bg-muted transition-colors flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg> {tHero('github')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{tFeatures('title')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {tFeatures('description')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <Server className="h-6 w-6 text-brand-400" />,
                title: tFeatures('item1.title'),
                desc: tFeatures('item1.desc')
              },
              {
                icon: <Lock className="h-6 w-6 text-brand-400" />,
                title: tFeatures('item2.title'),
                desc: tFeatures('item2.desc')
              },
              {
                icon: <Package className="h-6 w-6 text-brand-400" />,
                title: tFeatures('item3.title'),
                desc: tFeatures('item3.desc')
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-background border border-border rounded-2xl p-8 hover:border-brand-500/50 transition-colors group"
              >
                <div className="bg-brand-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing/Products Section */}
      <section id="pricing" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{tPricing('title')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {tPricing('description')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-center">
            {/* Community */}
            <div className="bg-background border border-border rounded-3xl p-8 shadow-sm h-full flex flex-col">
              <h3 className="text-xl font-semibold mb-2">{tPricing('community.name')}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">{tPricing('community.price')}</span>
              </div>
              <p className="text-muted-foreground mb-8 min-h-[48px]">
                {tPricing('community.desc')}
              </p>
              <a 
                href="https://github.com/openiac-io/openiac"
                target="_blank"
                rel="noreferrer"
                className="w-full block text-center rounded-xl border border-border bg-muted/50 py-3 font-medium hover:bg-muted transition-colors mb-8 mt-auto"
              >
                {tPricing('community.button')}
              </a>
              <ul className="space-y-4">
                {tPricing.raw('community.features').map((f: string, i: number) => (
                  <li key={i} className="flex items-center text-sm text-muted-foreground">
                    <Check className="h-5 w-5 text-brand-500 mr-3 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* Enterprise Subscription */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-muted border-2 border-brand-500 rounded-3xl p-8 shadow-2xl shadow-brand-500/10 relative h-full flex flex-col"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                {tPricing('enterprise.badge')}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{tPricing('enterprise.name')}</h3>
              <div className="mb-6 flex items-baseline">
                <span className="text-4xl font-bold text-foreground">{tPricing('enterprise.price')}</span>
              </div>
              <p className="text-muted-foreground mb-8 min-h-[48px]">
                {tPricing('enterprise.desc')}
              </p>
              <button 
                onClick={() => openWaitlist(tPricing('enterprise.name'))}
                className="w-full block text-center rounded-xl bg-brand-600 py-3 font-medium text-white hover:bg-brand-500 transition-colors mb-8 mt-auto"
              >
                {tPricing('enterprise.button')}
              </button>
              <ul className="space-y-4">
                {tPricing.raw('enterprise.features').map((f: string, i: number) => (
                  <li key={i} className="flex items-center text-sm text-foreground">
                    <Check className="h-5 w-5 text-brand-500 mr-3 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <WaitlistModal 
        isOpen={isWaitlistOpen} 
        onClose={() => setIsWaitlistOpen(false)} 
        planName={selectedPlan}
      />
    </>
  );
}
