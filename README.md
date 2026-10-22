# OpenIaC — Official Website & Documentation Portal

[![OpenIaC Website CI](https://github.com/openiac-io/website/actions/workflows/ci.yml/badge.svg)](https://github.com/openiac-io/website/actions/workflows/ci.yml)

This repository hosts the official landing page and MDX developer documentation portal for **[OpenIaC](https://github.com/openiac-io/openiac)** — the Enterprise Hybrid Cloud & Container Platform Provisioning Framework.

---

## 🎯 Overview

OpenIaC provides a unified, **Zero-Knowledge UX** experience for provisioning production-grade container, virtualization, and private/public cloud platforms with a single command (`make <platform>`). This documentation portal covers **Online Deployment**, **Layer-3 Composable Add-ons & Day-2 Lifecycle**, and **Air-Gapped (Offline)** workflows across all supported Tier-1 platforms:

- **On-Premise & Private Cloud (Ansible Engine)**:
  - **Standard Kubernetes (`k8s`)**: Upstream `kubeadm` + `containerd` + `Calico` CNI
  - **Lightweight Kubernetes (`k3s`)**: SUSE Rancher K3s single-binary cluster
  - **OpenShift / OKD (`openshift`)**: Unified OKD & Red Hat OCP via the **OpenShift 4.12+ Agent-based Installer** (`nmstate` & built-in VIPs)
  - **Cloud-Native Virtualization (`kubevirt`)**: Turnkey or Add-on KVM virtualization on `k8s`, `k3s`, or `openshift` (`KubeVirt` + `CDI` + `virtctl`) with full Day-2 lifecycle (`present` / `absent` / upgrade)
  - **OpenStack Private Cloud (`openstack`)**: Containerized private cloud IaaS via `Kolla-Ansible`
- **Public Cloud Blueprints (Terraform Engine)**:
  - **Amazon Web Services (`aws`)**: Multi-AZ VPC + IAM + Amazon EKS
  - **Google Cloud Platform (`gcp`)**: Dedicated VPC/Subnet + Regional Google GKE
  - **Microsoft Azure (`azure`)**: VNet/Subnet + Azure AKS with SystemAssigned Managed Identity

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router) + React 19 + TypeScript
- **Documentation Engine**: `@next/mdx` + `@tailwindcss/typography`
- **Styling & UI**: Tailwind CSS v4 (Dark Mode Native) + `lucide-react` + `framer-motion`
- **CI / Quality Gate**: GitHub Actions (`.github/workflows/ci.yml`) automated production build & TypeScript/MDX verification

---

## 📂 Repository Structure

```text
website/
├── .github/workflows/ci.yml # Automated CI build & TypeScript/MDX verification
├── src/
│   ├── app/
│   │   ├── page.tsx         # Main landing page (Hero, Tier-1 Matrix, Architecture)
│   │   └── docs/            # Developer Documentation Portal (MDX)
│   │       ├── page.mdx                        # Introduction & 3-Layer Stack Overview
│   │       ├── getting-started/page.mdx        # Local Vagrant Multi-Node Testbeds
│   │       ├── online-deployment/page.mdx      # On-Premise One-Command Deployment
│   │       ├── addons-and-lifecycle/page.mdx   # Layer-3 Add-ons & Day-2 Lifecycle Guide
│   │       ├── offline-deployment/page.mdx     # Air-Gapped Artifact Packaging & Install
│   │       └── public-cloud/page.mdx           # AWS EKS, GCP GKE, Azure AKS (Terraform)
│   └── components/layout/   # Global Navbar & Footer components
└── package.json             # Project dependencies and build scripts
```

---

## 🚀 Local Development & Verification

```bash
# 1. Install dependencies
npm install

# 2. Start local development server (http://localhost:3000)
npm run dev

# 3. Run production build & TypeScript/MDX verification
npm run build
```

---

## 📄 License

Distributed under the **Apache-2.0 License**. See the core **[openiac-io/openiac](https://github.com/openiac-io/openiac)** repository for framework source code and provisioning playbooks.
