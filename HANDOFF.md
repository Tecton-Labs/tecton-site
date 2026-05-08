# Handoff

## Current State

This is the static website repo for Tecton Labs.

- Branch: `main`
- Remote: `https://github.com/Tecton-Labs/tecton-site.git`
- Root homepage: `index.html`
- Current local state: clean and synced with `origin/main` before this handoff update
- Deployment assumption: GitHub Pages / `CNAME` for `tectonlabs.ca`

Public entry points:

- `/` -> current homepage in `index.html`
- `/cdl-prep/` -> published legacy CDL Test Prep static pages

The root website is static HTML with inline CSS and JavaScript. There is no package manager, framework, or build step in the current repo.

## What Changed Last

The rejected local V2 prototype was removed and the repo was reset back to the clean static baseline. It was never pushed and never affected the live site.

Important correction:

- Do **not** replace or overwrite `index.html` while designing V2.
- The current root page stays intact until Mat explicitly approves a replacement.
- Build the next V2 as a separate comparison surface.

## Next Action

Mat is going to continue the V2 design inside the Codex application because it can preview the design while editing.

For the next agent:

1. Inspect `index.html`, `assets/`, `README.md`, `PROJECT_BRIEF.md`, and `docs/website-architecture.md`.
2. Keep `/` unchanged.
3. Put new V2 work somewhere separate, preferably:
   - `v2/index.html` for a static comparison page, or
   - a separate branch / preview deployment if the new code uses a framework.
4. Match the actual Tecton logo colors and current brand assets before exploring new visual systems.
5. Use the code Mat provides as the starting point.
6. Do not deploy or push a root replacement until Mat approves the V2 direction.

## Design Notes From Latest Feedback

- The previous V2 attempt was not acceptable.
- It did not feel sharp, clean, premium, or high-end enough.
- It did not match the Tecton logo color system closely enough.
- Start fresh rather than iterating the discarded prototype.
- Treat the new version as a comparison page, not a production replacement.

## Open TODOs

- Build a new V2 comparison page from Mat's provided code.
- Keep current `index.html` live and untouched while comparing.
- Preserve `/cdl-prep/` legacy URLs.
- Once a V2 direction is approved, decide whether to:
  - replace root static HTML,
  - migrate to a framework,
  - or deploy a separate preview to Vercel first.
- Confirm whether the project-specific 1Password vault `Personal - Tecton Labs Website` exists.
- Create scoped 1Password service account `tecton-site-agent` after CLI authorization flow is stable.

## Verification

Current repo has no automated build or test command.

Static verification options:

- Open `index.html` in a browser for root homepage review.
- Serve locally with a simple static server if route-relative behavior needs checking.
- Test `https://tectonlabs.ca/` and `https://tectonlabs.ca/cdl-prep/` after pushing to the GitHub Pages branch.

## Important Context

- `CNAME` contains `tectonlabs.ca`.
- `docs/website-architecture.md` documents the current static architecture and asset layout.
- `docs/secrets-and-access.md` documents the intended project-specific 1Password vault and service account pattern.
- Tecton Labs is Mat's owned AI agency brand, not a client project. Treat this as a Personal AI / owned-agency project unless the project taxonomy is expanded later.
- `/Users/matpaul/cdl-prep` is the standalone source copy for legacy CDL Prep content.
- `tecton-site/cdl-prep/` remains the published GitHub Pages copy so `https://tectonlabs.ca/cdl-prep/` keeps working.
- CDL Prep is legacy content from an earlier mobile app direction. Ignore it for the AI agency website roadmap unless explicitly in scope.
- The contact form in `index.html` currently posts to `https://formsubmit.co/ajax/tectonlabs.ca@gmail.com`.
- `api/contact.js` is not used by GitHub Pages. It is preserved as a future backend option for a platform that can run serverless functions.
- Avoid committing secrets, `.env`, generated output, or OS/editor files.

## Files / Areas To Inspect First

- `README.md`
- `PROJECT_BRIEF.md`
- `docs/website-architecture.md`
- `docs/secrets-and-access.md`
- `index.html`
- `assets/`
- `api/contact.js`
- `cdl-prep/index.html` only if the legacy CDL Prep pages are explicitly in scope
