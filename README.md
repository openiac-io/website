# OpenIaC Official Website & Documentation Portal

This repository contains the official landing page and MDX documentation portal for **[OpenIaC](https://github.com/openiac-io/openiac)** — the Enterprise Hybrid Cloud & Container Platform Framework.

## Tech Stack

- **Framework**: Next.js (App Router) + TypeScript
- **Documentation**: `@next/mdx` + Tailwind Typography
- **Styling**: Tailwind CSS v4 (Dark Mode Native)
- **Icons & Motion**: Lucide React + Framer Motion

## Local Development

```bash
# Install dependencies
npm install

# Start development server at http://localhost:3000
npm run dev

# Build for production verification
npm run build
```

## Documentation Structure

- `/docs`: Architecture overview and Tier-1 platform matrix
- `/docs/getting-started`: Local multi-node Vagrant testbed guide
- `/docs/online-deployment`: One-command on-premise deployment (`k8s`, `k3s`, `openshift`, `kubevirt`, `openstack`)
- `/docs/offline-deployment`: Air-gapped packager and offline deployment workflow
- `/docs/public-cloud`: Terraform blueprints for AWS (EKS), GCP (GKE), and Azure (AKS)
