'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Server,
  Lock,
  Layers,
  ArrowRight,
  Terminal,
  Cloud,
  Cpu,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  Box,
} from 'lucide-react';

const ON_PREM_PLATFORMS = [
  {
    name: 'Standard Kubernetes',
    code: 'k8s',
    command: 'make k8s',
    stack: 'Kubeadm · Containerd · Calico',
    desc: 'CNCF-compliant upstream HA Kubernetes cluster with automated containerd SystemdCgroup tuning and CNI.',
    badge: 'Air-gapped Ready',
  },
  {
    name: 'Lightweight Kubernetes',
    code: 'k3s',
    command: 'make k3s',
    stack: 'SUSE Rancher K3s',
    desc: 'Single-binary Kubernetes optimized for edge computing, retail branches, and rapid local testbeds.',
    badge: 'Air-gapped Ready',
  },
  {
    name: 'OpenShift / OKD',
    code: 'openshift',
    command: 'make openshift',
    stack: 'OKD (Default) · Red Hat OCP',
    desc: 'Unified enterprise PaaS supporting both free open-source OKD and commercial Red Hat OCP with built-in HAProxy.',
    badge: 'Air-gapped Ready',
  },
  {
    name: 'Cloud-Native VM Virtualization',
    code: 'kubevirt',
    command: 'make kubevirt',
    stack: 'KubeVirt · CDI · virtctl',
    desc: 'Modern replacement for legacy oVirt/RHV. Run and live-migrate KVM virtual machines directly on Kubernetes.',
    badge: 'Auto-Emulation',
  },
  {
    name: 'OpenStack Private Cloud',
    code: 'openstack',
    command: 'make openstack',
    stack: 'Kolla-Ansible · Containerized',
    desc: 'Production-grade multi-node IaaS private cloud with automated Cinder LVM storage and Neutron networking.',
    badge: 'Air-gapped Ready',
  },
];

const PUBLIC_CLOUD_PLATFORMS = [
  {
    name: 'Amazon Web Services',
    code: 'aws',
    command: 'make aws-apply',
    stack: 'Amazon EKS · Multi-AZ VPC · IAM',
    desc: 'Production-ready AWS EKS blueprint provisioning a dedicated Multi-AZ VPC, IAM roles, and managed node groups.',
  },
  {
    name: 'Google Cloud Platform',
    code: 'gcp',
    command: 'make gcp-apply',
    stack: 'Google GKE · Dedicated VPC',
    desc: 'Modular Terraform blueprint for regional Google Kubernetes Engine clusters with custom subnetworks and node pools.',
  },
  {
    name: 'Microsoft Azure',
    code: 'azure',
    command: 'make azure-apply',
    stack: 'Azure AKS · VNet · Managed Identity',
    desc: 'Enterprise Azure Kubernetes Service architecture with isolated VNet subnets and SystemAssigned identity.',
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-28 md:pt-28 md:pb-36">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-900/25 via-background to-background z-0" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-brand-300 mb-8">
              <span className="flex h-2 w-2 rounded-full bg-brand-400 mr-2.5 animate-pulse"></span>
              Zero-Knowledge UX · On-Premise Air-Gapped &amp; Public Cloud
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
              One Command. Any Platform.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-indigo-400 to-cyan-400">
                Cloud to Air-Gapped.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              The open-source platform engineering framework for provisioning{' '}
              <span className="text-foreground font-medium">Kubernetes, OpenShift, KubeVirt, OpenStack</span> on
              RHEL/Rocky Linux and <span className="text-foreground font-medium">EKS, GKE, AKS</span> with Terraform.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <a
                href="https://github.com/openiac-io/openiac"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto rounded-full bg-brand-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand-600/25 hover:bg-brand-500 transition-all flex items-center justify-center gap-2.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
                Star on GitHub
              </a>
              <Link
                href="/docs/getting-started"
                className="w-full sm:w-auto rounded-full border border-border bg-muted/30 backdrop-blur-sm px-8 py-4 text-base font-medium text-foreground hover:bg-muted transition-colors flex items-center justify-center gap-2"
              >
                Explore Documentation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Interactive-Style Terminal Preview */}
            <div className="max-w-3xl mx-auto text-left rounded-2xl border border-border/80 bg-[#0b0f19] shadow-2xl shadow-brand-950/50 overflow-hidden">
              <div className="flex items-center justify-between px-4 py-3 border-b border-border/60 bg-muted/40">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <span className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs font-mono text-muted-foreground">openiac — bash</span>
                <span className="text-xs font-mono text-brand-400">Zero-Config CLI</span>
              </div>
              <div className="p-6 font-mono text-xs sm:text-sm space-y-3 leading-relaxed">
                <div className="text-muted-foreground"># 1. Deploy On-Premise Container &amp; Virtualization Platforms (Ansible)</div>
                <div>
                  <span className="text-brand-400">$</span> <span className="text-foreground">make k8s</span>{' '}
                  <span className="text-muted-foreground/70"># Upstream Kubeadm + Containerd + Calico</span>
                </div>
                <div>
                  <span className="text-brand-400">$</span> <span className="text-foreground">make openshift</span>{' '}
                  <span className="text-muted-foreground/70"># OKD / Red Hat OpenShift + Built-in HAProxy</span>
                </div>
                <div>
                  <span className="text-brand-400">$</span> <span className="text-foreground">make kubevirt</span>{' '}
                  <span className="text-muted-foreground/70"># Cloud-Native KVM Virtualization on K8s</span>
                </div>
                <div>
                  <span className="text-brand-400">$</span> <span className="text-foreground">make openstack</span>{' '}
                  <span className="text-muted-foreground/70"># OpenStack Private Cloud (Kolla-Ansible)</span>
                </div>
                <div className="pt-2 text-muted-foreground"># 2. Provision Public Cloud Production Clusters (Terraform)</div>
                <div>
                  <span className="text-brand-400">$</span> <span className="text-foreground">make aws-apply</span>{' '}
                  <span className="text-muted-foreground/70"># Multi-AZ VPC + Amazon EKS (or gcp-apply / azure-apply)</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Supported Tier-1 Platforms Section */}
      <section id="platforms" className="py-24 bg-muted/20 border-y border-border/60">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-xs font-mono uppercase tracking-wider text-brand-400 font-semibold">
              Curated Tier-1 Lineup
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
              Pure Platform Engineering. Zero Bloat.
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Instead of a cluttered collection of random scripts, OpenIaC focuses exclusively on the industry-standard
              container, virtualization, and cloud platforms that power modern enterprises.
            </p>
          </div>

          {/* On-Premise Platforms */}
          <div className="mb-14">
            <div className="flex items-center gap-2.5 mb-6">
              <Server className="h-5 w-5 text-brand-400" />
              <h3 className="text-xl font-bold">On-Premise &amp; Air-Gapped Platforms (Ansible Engine)</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ON_PREM_PLATFORMS.map((item) => (
                <div
                  key={item.code}
                  className="bg-background border border-border rounded-2xl p-6 hover:border-brand-500/60 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-brand-500/10 text-brand-300 border border-brand-500/20">
                        {item.command}
                      </span>
                      <span className="text-[11px] font-medium text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                        {item.badge}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold mb-1">{item.name}</h4>
                    <p className="text-xs font-mono text-muted-foreground mb-3">{item.stack}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Public Cloud Platforms */}
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <Cloud className="h-5 w-5 text-indigo-400" />
              <h3 className="text-xl font-bold">Public Cloud Production Blueprints (Terraform Engine)</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {PUBLIC_CLOUD_PLATFORMS.map((item) => (
                <div
                  key={item.code}
                  className="bg-background border border-border rounded-2xl p-6 hover:border-indigo-500/60 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                        {item.command}
                      </span>
                      <span className="text-[11px] font-medium text-indigo-300 bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-500/20">
                        Terraform HCL
                      </span>
                    </div>
                    <h4 className="text-lg font-bold mb-1">{item.name}</h4>
                    <p className="text-xs font-mono text-muted-foreground mb-3">{item.stack}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Architecture & Workflow Section */}
      <section id="architecture" className="py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-xs font-mono uppercase tracking-wider text-brand-400 font-semibold">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">
              Designed for Zero-Knowledge UX
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Even if you have never configured kernel modules, HAProxy load balancers, or LVM storage groups before,
              OpenIaC handles the entire lifecycle automatically behind the scenes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Sensible Defaults Out-of-the-Box',
                desc: 'No need to edit dozens of YAML or HCL files. Every role and Terraform module ships with verified production defaults.',
              },
              {
                step: '02',
                title: 'Built-in Invisible Helpers',
                desc: 'HAProxy load balancers, Cinder LVM volume groups, Neutron dummy interfaces, and KubeVirt emulation fallbacks are embedded automatically.',
              },
              {
                step: '03',
                title: 'One-Command Execution',
                desc: 'Run a single make target (e.g., make k8s or make aws-apply). Kubeconfigs and credentials are automatically configured for immediate use.',
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative rounded-2xl border border-border bg-muted/15 p-8"
              >
                <div className="text-3xl font-mono font-extrabold text-brand-500/40 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why OpenIaC Features Section */}
      <section id="features" className="py-24 bg-muted/20 border-t border-border/60">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Enterprise Engineering Standards</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Built on strict architectural guardrails for reliability across air-gapped data centers and public clouds.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Lock className="h-6 w-6 text-brand-400" />,
                title: '100% Air-Gapped Ready',
                desc: 'Modular packager scripts (make pack-<platform>) bundle all required RPMs, Python wheels, Galaxy collections, and container images into a single portable tarball.',
              },
              {
                icon: <ShieldCheck className="h-6 w-6 text-brand-400" />,
                title: 'RHEL / Rocky Linux Standardized',
                desc: 'Engineered specifically for Enterprise Linux (RHEL / Rocky Linux) with dynamic version-open compatibility and zero external Ansible collection dependencies.',
              },
              {
                icon: <Layers className="h-6 w-6 text-brand-400" />,
                title: 'Vagrant Multi-Node Testbeds',
                desc: 'Validate every on-premise platform locally on VirtualBox using pre-configured multi-node Vagrantfiles before deploying to production hardware.',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-background border border-border rounded-2xl p-8 hover:border-brand-500/50 transition-colors"
              >
                <div className="bg-brand-500/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
