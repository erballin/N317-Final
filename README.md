# Code Documentation Bot

AI-enhanced documentation generator that turns pasted source code into clean, structured Markdown using Gemini. Built with Next.js to showcase routing, state management, reusable components, and error handling.

## Team
Apollo B. | Onesti B. | Haven H. | Pierce I.

## Live Demo
https://n317-final.vercel.app/

## Key Features
- Home, Generate, and About pages with clear navigation and CTA.
- Generate page: language select + code textarea, validation, loading state, POST to `/api/chat`.
- Output page: renders returned Markdown (ReactMarkdown + GFM), shows input summary, copy/download actions, loading skeletons, and “no data” fallback.
- Error handling: global error boundary, 404 page, client-side validation for empty input, API guard for missing code.
- State: code + language + AI response persisted via `localStorage` between generate/output routes.

## Design Choices
- Next.js App Router with client components where interactivity is required.
- Tailwind for consistent styling and responsive layout.
- Local storage for lightweight cross-page state (no backend DB needed for demo).
- `react-markdown` + `remark-gfm` for safe Markdown rendering with tables/lists.
- Graceful failure: explicit error cards, loading skeletons, and a global error boundary with retry links.

## Tech Stack / Dependencies
- Framework: Next.js 16, React 19.
- Styling: Tailwind CSS.
- AI: `@ai-sdk/google` with Gemini 2.5 Flash via `GOOGLE_GENERATIVE_AI_API_KEY`.
- Markdown: `react-markdown`, `remark-gfm`.

## Run Locally
1) Install deps: `npm install`
2) Create `.env.local` in the project root:
   ```
   GOOGLE_GENERATIVE_AI_API_KEY=your_key_here
   ```
3) Start dev server: `npm run dev`
4) Visit `http://localhost:3000`

## Usage
- Go to `/generate`, pick a language, paste code, click “Generate Docs”.
- You’ll be routed to `/output` where the Markdown renders; use copy/download buttons as needed.
- “Start Over” returns to `/generate`; 404 and error pages are implemented for bad routes/unexpected errors.

## Responsibilities
- Onesti — Frontend UI/UX (layout, styling, reusable components)
- Apollo — Routing & state management (page flow, data persistence)
- Pierce — AI processing & documentation (API call to Gemini, markdown formatting)
- Haven — Component architecture & error handling (error/loading/404, fallbacks)

## Notes for Vercel
- Add `GOOGLE_GENERATIVE_AI_API_KEY` in Vercel project settings → Environment Variables.
- Framework preset: Next.js; build command `next build` (default), output `.next`.
- Keep `.env.local` out of git; Vercel env supplies the key at runtime.

## Additional Considerations
- Test error toggle in `app/output/page.js` (`forceError`) can be set to `true` locally to view the error boundary; keep it `false` in production.
- Manual test flow: run through generate → output with sample code, verify copy/download, and check 404/error pages. 
