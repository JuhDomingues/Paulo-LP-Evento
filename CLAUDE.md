# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React landing page for "Posicionamento de Autoridade" (Authority Positioning) event built with modern web technologies. It's a marketing/sales funnel page.

## Tech Stack & Architecture

- **Framework**: Vite + React 18 + TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui (Radix UI primitives)
- **State Management**: React Query (@tanstack/react-query)
- **Routing**: React Router DOM
- **Build Tool**: Vite with SWC

## Common Commands

```bash
# Development
npm run dev          # Start development server (localhost:8080)
npm i               # Install dependencies

# Build & Deploy
npm run build       # Production build
npm run build:dev   # Development build
npm run preview     # Preview production build

# Code Quality
npm run lint        # Run ESLint
```

## Project Structure

- **`src/pages/`**: Main page components (Index.tsx, NotFound.tsx)
- **`src/components/`**: Landing page sections (HeroSection, ProblemSection, etc.)
- **`src/components/ui/`**: shadcn/ui components (reusable UI primitives)
- **`src/lib/utils.ts`**: Utility functions (includes cn() for class merging)
- **`src/hooks/`**: Custom React hooks
- **`src/assets/`**: Images and static assets

## Key Architecture Patterns

### Landing Page Structure
The main page (`src/pages/Index.tsx`) is composed of sequential sections that form a marketing funnel:
1. HeroSection - Main headline and value proposition
2. ProblemSection - Problem identification
3. AspirationSection - Desired outcomes
4. QuestionSection - Engagement questions
5. LearningSection - What users will learn
6. BenefitsSection - Key benefits
7. TargetSection - Target audience
8. PricingSection - Pricing information
9. GuaranteeSection - Guarantees/testimonials
10. MentorSection - About the mentor

### Component Patterns
- All section components are exported as named exports
- Use TypeScript with JSX (`.tsx` files)
- Import paths use `@/` alias for src directory
- UI components from shadcn/ui are imported from `@/components/ui/`

### Styling System
- Dark theme by default (background: `240 10% 3.9%`)
- Custom gradient definitions in `src/index.css`
- Design tokens: `--gradient-primary`, `--gradient-secondary`, `--gradient-cta`
- Special colors: `--accent-neon` (lime), `--accent-cyan` (blue)
- Custom shadows: `--shadow-glow`, `--shadow-neon`

### Path Aliases (tsconfig.json)
```json
{
  "@/*": ["./src/*"]
}
```

## Important Files

- **`components.json`**: shadcn/ui configuration
- **`vite.config.ts`**: Vite config with path aliases
- **`src/index.css`**: Global styles and design system tokens
- **`tailwind.config.ts`**: Extended Tailwind configuration with custom colors

## Development Notes

- Uses React Query for state management
- All UI components follow shadcn/ui patterns
- TypeScript is configured with relaxed settings (noImplicitAny: false)
- Custom design system with neon/glow effects for modern aesthetic