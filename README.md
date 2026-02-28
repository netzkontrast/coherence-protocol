# 🧠 Coherence Protocol

> AI-driven narrative coherence system with Next.js web console - Server-Driven UI for novel writing assistance

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)](https://www.typescriptlang.org/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black)](https://vercel.com)

## 🎯 Overview

The **Coherence Protocol** is a groundbreaking AI-powered system for maintaining narrative coherence in complex fiction writing. It combines:

- **🎨 Server-Driven UI (SDUI)** - Agent-to-User Interface (A2UI) powered by Vercel AI SDK
- **📖 Narrative Ontology** - Structured world-building with Story.ncp.json
- **🧠 TSDP Integration** - Theory of Structural Dissociation of Personality for character depth
- **✍️ Pen-Stroke Aesthetic** - Hand-drawn, rough paper visual design language

## 🌟 Key Features

### Agent-to-User Interface (A2UI)
The system uses a novel paradigm where an AI agent emits declarative JSON specifications that are rendered as native React components, providing:
- Dynamic component generation via React Server Components (RSC)
- Type-safe tool calling with JSON Schema validation
- Streaming UI updates with Vercel AI SDK
- No arbitrary HTML/script execution (security-first design)

### Five Core Tools
1. **renderCoreWorld** - Visualize the narrative world state
2. **displayEntityProfile** - Character and entity deep-dives
3. **triggerFissureAlert** - Detect narrative inconsistencies
4. **renderDialogueSurface** - Interactive dialogue composition
5. **invokeMoonshineLink** - Special narrative connections

### Visual Design Language
- **Rough Paper Texture** - SVG noise filter for authentic feel
- **Pen-Stroke Borders** - Hand-drawn aesthetic with variable line weight
- **Color Semantics** - Five yellow typologies representing psychological states
- **Silhouette System** - Abstract character representations

## 🏗️ Architecture

```
coherence-protocol/
├── packages/
│   └── frontend/           # Next.js App Router application
│       ├── app/            # App Router pages and API routes
│       ├── components/     # React components
│       │   └── a2ui/       # A2UI tool components
│       ├── lib/            # Utilities and schemas
│       └── .claude/        # Claude Code skill
└── Story.ncp.json          # Narrative ontology
```

### Tech Stack
- **Framework:** Next.js 15 (App Router) + TypeScript
- **UI:** shadcn/ui + Tailwind CSS
- **AI:** Vercel AI SDK + Anthropic Claude
- **Deployment:** Vercel (Edge Functions, Fluid Compute)
- **Testing:** Vitest + Playwright

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/netzkontrast/coherence-protocol.git
cd coherence-protocol

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local
# Add your ANTHROPIC_API_KEY

# Run development server
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the app.

## 📦 Installation

### Prerequisites
- Node.js 20+
- pnpm (recommended) or npm

### Full Setup
```bash
# Install dependencies
pnpm install

# Initialize shadcn/ui (if needed)
pnpm dlx shadcn@latest init

# Run database migrations (if applicable)
pnpm db:migrate

# Run tests
pnpm test

# Build for production
pnpm build
```

## 🎨 Design System

The Coherence Protocol uses a unique **ballpoint pen aesthetic** with:

### Color Palette
- **Trauma Yellow** (`hsl(48, 100%, 50%)`) - Core narrative tension
- **Hope Yellow** (`hsl(52, 95%, 65%)`) - Optimistic moments
- **Signal Yellow** (`hsl(45, 100%, 45%)`) - Warnings and alerts
- **Nostalgia Yellow** (`hsl(40, 85%, 55%)`) - Reflective states
- **Insight Yellow** (`hsl(55, 90%, 70%)`) - Revelations
- **Crystal Sky** (`hsl(200, 80%, 75%)`) - Clarity
- **Alex Rust** (`hsl(20, 60%, 40%)`) - Grounded reality
- **Steel Blue** (`hsl(210, 40%, 45%)`) - Structure
- **Shadow Fire** (`hsl(0, 75%, 35%)`) - Conflict
- **Soot Black** (`hsl(0, 0%, 15%)`) - Depth

### Typography
- Hand-drawn borders with SVG paths
- Variable line weight based on narrative tension
- Heavy whitespace ("Mut zur Lücke" - courage to leave gaps)

## 🧩 Project Structure

### Phase 1: Foundation ✅
- [x] Repository initialization
- [x] Next.js setup with App Router
- [x] Design system implementation

### Phase 2: A2UI Architecture 🚧
- [ ] API contract definition
- [ ] Server-side tool functions
- [ ] React Server Components

### Phase 3: Narrative Data Layer 📅
- [ ] Story.ncp.json ontology
- [ ] Ontology validation

### Phase 4: AI Integration 📅
- [ ] Vercel AI SDK setup
- [ ] Novel Writing Assistant agent

### Phase 5: Claude Code Skill 📅
- [ ] Skill directory structure
- [ ] Validation scripts

### Phase 6: Deployment 📅
- [ ] Vercel configuration
- [ ] CI/CD pipeline

### Phase 7: Testing & Docs 📅
- [ ] Comprehensive test suite
- [ ] Accessibility testing
- [ ] Documentation

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for details.

### Development Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📖 Documentation

- [Architecture Guide](./docs/ARCHITECTURE.md)
- [API Reference](./docs/API.md)
- [Design Guidelines](./packages/frontend/.claude/skills/coherence-console-architect/styles-guideline.md)
- [Coherence Protocol Theory](./docs/COHERENCE.md)

## 🧪 Testing

```bash
# Run unit tests
pnpm test

# Run E2E tests
pnpm test:e2e

# Run accessibility tests
pnpm test:a11y

# Run all tests with coverage
pnpm test:coverage
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Powered by [Vercel AI SDK](https://sdk.vercel.ai/)
- AI by [Anthropic Claude](https://www.anthropic.com/)

## 📬 Contact

- **GitHub:** [@netzkontrast](https://github.com/netzkontrast)
- **Project Issues:** [GitHub Issues](https://github.com/netzkontrast/coherence-protocol/issues)

---

**Built with 🧠 and ✍️ for narrative coherence**