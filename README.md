# AI Creative Studio

> **Autonomous Design System, Art Direction, 3D/Motion Choreography, and Creative Frontend Engineering for AI Coding Agents.**

[![Version](https://img.shields.io/badge/version-3.0.0-emerald.svg)](./manifest.json)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![Compatible](https://img.shields.io/badge/Agents-Antigravity%20%7C%20Claude%20%7C%20Cursor%20%7C%20Codex-purple.svg)](#installation)

**AI Creative Studio** is a multi-disciplinary agentic skill library and design intelligence framework. It transitions AI coding assistants from generic UI code generators into an elite studio team: **Creative Director, Brand Strategist, Interaction Designer, 3D/WebGL Technologist, Motion Choreographer, and Frontend Architect**.

---

## 🌟 The Studio Manifesto

1. **Product Truth First**: Design must originate from what the product actually does, who it serves, and its genuine mechanics. Never invent fake metrics, synthetic testimonials, or exaggerated claims.
2. **Story Before UI**: Reject the generic AI slop pattern (`Navbar → Hero → 3 Feature Cards → Testimonial → Pricing → Footer`). Select an intentional narrative arc suited to the domain.
3. **Earned Complexity**: Never load Three.js, WebGL, shaders, or heavy physics merely because they are available. The simplest technology that achieves maximum communicative impact is the correct choice.
4. **Anti-AI-Slop Invariant**: Reject generic purple gradients on white backgrounds, ubiquitous floating glassmorphism blobs, predictable layouts, and clichéd SaaS aesthetics.

---

## 🏛️ System Architecture

The studio is organized into 13 modular capability domains containing 180+ specialized design guides, templates, and execution prompts:

```
ai-creative-studio/
├── 00-core/               # Product analysis, creative direction, anti-slop, complexity engine
├── 01-art-direction/      # Visual concept, typography pairings, color systems, composition
├── 02-storytelling/       # Cinematic pacing, first-viewport dynamics, narrative arcs, scenes
├── 03-layout/             # Asymmetric layouts, editorial structures, responsive composition
├── 04-motion/             # GSAP choreography, ScrollTrigger, micro-interactions, physics
├── 05-visualization/      # Network graphs, data lineage, Sankey, system maps, canvas rendering
├── 06-3d/                 # Three.js, WebGL, shaders, lighting, camera choreography, performance
├── 07-interaction/        # Reactive interfaces, sticky scenes, interactive product sandboxes
├── 08-assets/             # Photography direction, mockups, vector art, audio, shaders, video
├── 09-experience-modes/   # 11 distinct product experience archetypes
├── 10-frontend/           # Production React 19 / Next.js 15, component architecture, a11y
├── 11-technology/         # Deep engineering guides (Canvas 2D, WebGL pipeline, Web Audio)
├── 12-quality/            # Design QA, performance budgets, accessibility auditing, visual QA
├── prompts/               # Specialized execution prompts (master, product types, experiences)
├── references/            # Industry design principles, typography guides, and references
├── templates/             # Blueprints, scene plans, asset manifests, and memory schemas
├── design-intelligence/   # Persistent design memory (rationale, tradeoffs, evolution)
├── capability-registry.yaml # Dynamic capability routing matrix
├── MASTER-PROMPT.md       # Master orchestrator prompt
├── AGENT-CONTRACT.md      # Binding behavioral agent contract
└── SKILL.md               # Universal Agent Skill definition (Antigravity & Agent standard)
```

---

## 🎭 Experience Modes

Instead of applying a single style, the studio dynamically routes to 11 tailored experience modes:

| Mode | Visual & Interactive Character | Best Suited For |
| :--- | :--- | :--- |
| **Minimal** | Pure typographic hierarchy, razor-sharp contrast, generous whitespace. | Developer tools, utilities, text-first apps |
| **Cinematic** | Wide aspect ratios, dramatic lighting, filmic pacing, video/camera transitions. | Story-driven products, gaming, entertainment |
| **Immersive** | Spatial depth, interactive 3D models, WebGL materials, reactive physics. | Hardware, spatial computing, architecture |
| **Technical** | System topologies, interactive flow diagrams, state machines, telemetry. | Cloud infrastructure, devops, security |
| **Scientific** | Coordinate systems, molecular/spatial models, empirical data density. | Biotech, genomics, physics, research tools |
| **Industrial** | High-contrast instrumentation, schematic cues, tactile mechanics. | Manufacturing, energy grids, supply chain |
| **Data-Driven** | Dynamic charts, Sankey diagrams, lineage trees, live data meshes. | FinTech, analytics, intelligence platforms |
| **Editorial** | Serif/sans tension, asymmetrical columns, magazine-grade layout. | Publishing, essays, premium content |
| **Product Demo** | Interactive simulator sandboxes, live test scenarios, interactive UI. | SaaS tools, workflow platforms |
| **Luxury** | Restraint, opulent negative space, subtle gold/noir tones, micro-haptics. | High-end consumer, private wealth, luxury goods |
| **Experimental** | Non-standard navigation, artistic shaders, generative typography. | Creative agencies, audio/visual art |

---

## ⚡ Dynamic Capability Routing

Before writing code, agents consult [`capability-registry.yaml`](./capability-registry.yaml) to load only the minimum required skills for the selected experience mode, keeping context tokens focused and fast.

```yaml
# capability-registry.yaml snippet
routing:
  technical:
    - 09-experience-modes/technical.md
    - 05-visualization/system-visualization.md
    - 05-visualization/network-visualization.md
    - 07-interaction/interactive-diagrams.md
  cinematic:
    - 09-experience-modes/cinematic.md
    - 02-storytelling/cinematic-storytelling.md
    - 04-motion/cinematic-motion.md
```

---

## 💾 Persistent Design Intelligence

The studio maintains persistent design memory in `design-intelligence/` so that future agents and human developers understand why decisions were made:
- `design-rationale.md`: The architectural and visual reasoning behind choices.
- `rejected-alternatives.md`: Why alternate directions were dismissed.
- `tradeoffs.md`: Deliberate engineering and aesthetic compromises.
- `design-evolution.md`: Change log across iterative design cycles.
- `design-constraints.md`: Invariants that future agents must not break.

---

## 🚀 Installation & Usage

### 1. Global Installation in Google Antigravity (Recommended)

To make AI Creative Studio available across **all projects** on your machine:

```bash
# Link or copy into Antigravity global skills directory
mkdir -p ~/.gemini/antigravity/skills
ln -s ~/ai-creative-studio ~/.gemini/antigravity/skills/ai-creative-studio
```

Antigravity will now automatically discover `ai-creative-studio` in every conversation and workspace.

### 2. Workspace Installation

To attach the studio directly to an individual project:

```bash
mkdir -p .agents/skills
git clone https://github.com/rakibkhanofficial/ai-creative-studio.git .agents/skills/ai-creative-studio
```

### 3. Usage with Cursor / Claude Code / Windsurf / Codex

You can prompt any AI coding agent with:
> "Act as the AI Creative Studio. Read `~/.gemini/antigravity/skills/ai-creative-studio/SKILL.md` (or repo `https://github.com/rakibkhanofficial/ai-creative-studio`), select the appropriate experience mode, produce a `CREATIVE-BLUEPRINT.md`, and design the application."

---

## 📄 License

MIT License. Designed and maintained by **[Rakib Khan](https://github.com/rakibkhanofficial)**.

