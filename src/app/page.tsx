'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Server, Lock, Package, ArrowRight, Check } from 'lucide-react';


export default function Home() {





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
              Open Source Enterprise IaC Framework
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight">
              Air-gapped Infrastructure,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-indigo-400">
                Without the Headache.
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              From baremetal to on-premise and air-gapped environments. OpenIaC is the most stable and modular Infrastructure as Code solution for complex environments.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://github.com/openiac-io/openiac" 
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto rounded-full bg-brand-600 px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-brand-500 hover:shadow-brand-500/25 transition-all flex items-center justify-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg> Star on GitHub
              </a>
              <a 
                href="/docs" 
                className="w-full sm:w-auto rounded-full border border-border bg-background/50 backdrop-blur-sm px-8 py-4 text-base font-medium text-foreground hover:bg-muted transition-colors flex items-center justify-center gap-2"
              >
                Read Documentation <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Optimized for Air-gapped Environments</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Develop online, and deploy seamlessly to offline environments.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <Server className="h-6 w-6 text-brand-400" />,
                title: "KVM & Baremetal Test Environments",
                desc: "Perfectly simulate and verify your infrastructure locally using Vagrant and baremetal before actual hardware deployment."
              },
              {
                icon: <Lock className="h-6 w-6 text-brand-400" />,
                title: "100% Air-gapped Ready",
                desc: "Safely import all dependencies as offline packages using our Packager scripts."
              },
              {
                icon: <Package className="h-6 w-6 text-brand-400" />,
                title: "Modular Add-ons",
                desc: "Deploy only the components you need with our flexible Helm-based architecture."
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

      
    </>
  );
}
