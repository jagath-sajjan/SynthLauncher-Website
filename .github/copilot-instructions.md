# Copilot Instructions for SynthLauncher-Website

## Project Overview
- This is a Next.js 14+ app using the `/app` directory structure, TypeScript, Tailwind CSS, and pnpm for package management.
- UI components are modularized under `components/` and `components/ui/`, following a reusable, atomic design pattern.
- Global styles are in `app/globals.css` and `styles/globals.css`.
- Utility functions live in `lib/` (e.g., `lib/utils.ts` for class merging).
- App routes are colocated in `app/` (e.g., `app/waitlist/page.tsx`).

## Key Patterns & Conventions
- Use the `cn` utility from `lib/utils.ts` for merging Tailwind and conditional classes.
- All UI primitives (Button, Card, etc.) are in `components/ui/` and should be composed for new features.
- Prefer functional React components and hooks (see `hooks/`).
- Use TypeScript types throughout; avoid `any`.
- Use `pnpm` for all dependency management and scripts.

## Developer Workflows
- **Install dependencies:** `pnpm install`
- **Run dev server:** `pnpm dev`
- **Build for production:** `pnpm build`
- **Start production server:** `pnpm start`
- **Format code:** `pnpm format` (if script exists)
- **Lint:** `pnpm lint` (if script exists)

## Integration & Data Flow
- No backend API in this repo; all data is handled client-side or via external APIs (see `lib/notion.ts`).
- For Notion integration, see `lib/notion.ts` for API usage patterns.
- Images and static assets are in `public/`.

## Project-Specific Notes
- Tailwind config is in `tailwind.config.ts`.
- Use `clsx` and `tailwind-merge` for className logic (see `lib/utils.ts`).
- All new UI should be accessible and responsive by default.
- Avoid direct DOM manipulation; use React patterns.

## Example: Adding a New Page
1. Create a folder in `app/` (e.g., `app/newpage/`).
2. Add a `page.tsx` file with a functional component.
3. Import and compose UI from `components/ui/`.

---

For questions about patterns, see existing files in `components/ui/` and `app/` for examples.
