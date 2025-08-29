# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` (uses Turbopack for faster builds)
- **Build**: `npm run build` 
- **Production server**: `npm start`
- **Lint**: `npm run lint`

## Architecture Overview

This is a Next.js 15 landing page application for "Paulo André Collet - Implementação na prática" using the App Router architecture.

### Key Technologies
- **Next.js 15** with App Router
- **React 19** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Swiper** for carousels
- **Multiple Google Fonts**: DM Sans, Manrope, Poppins, Sora

### Application Structure

**Single Page Landing Page**: The entire application is rendered on the main page (`src/app/page.tsx`) with all sections as components:

1. Header
2. MainSection (hero with YouTube video)
3. CaroseulCards 
4. SectionCheck
5. SectionTwelve
6. BonusCourse
7. ProblemNumbers
8. Videos
9. SellingInfo (target section for scroll navigation)
10. ImageCarousel
11. Guarantee
12. Questions
13. Footer

**Component Organization**: All components are in `src/app/components/` and follow a consistent pattern of being self-contained functional components.

**Font System**: Four Google Fonts are configured in `layout.tsx` with CSS variables for consistent usage across components.

**Analytics Integration**: The page includes Facebook Pixel, UTMify, and Microsoft Clarity tracking scripts loaded via Next.js Script component.

**Styling Patterns**: 
- Responsive design with mobile-first approach using Tailwind breakpoints
- Consistent color scheme with green accent (#8EF27E) and dark backgrounds
- Extensive use of absolute positioning for background elements
- Component-specific styling without external CSS files

**Navigation**: Uses smooth scrolling to the #selling-info section via JavaScript `scrollIntoView()`.

**Assets**: Images are stored in `src/images/` and imported directly into components using Next.js Image component.