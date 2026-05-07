# Agent Instructions

## Source Of Truth

- GitHub/repo docs are the source of truth for implementation state, tasks, blockers, and handoffs.
- 1Password is the source of truth for secrets and access.
- Notion Project Dashboard is for portfolio/business metadata only.

## Required Reading

Before making code or content changes, read:

1. `PROJECT_BRIEF.md`
2. `HANDOFF.md`
3. `docs/website-architecture.md`
4. `docs/secrets-and-access.md` when touching secrets, env vars, auth, deployment, or automation access
5. The specific HTML/CSS/JS file you intend to edit

## Secrets

Never commit or print real secrets. Use `.env.example` for variable names and shapes only.

Expected secret/reference home:

- 1Password vault: `Personal - Tecton Labs Website` (confirm/create if needed)
- Project-scoped service account: `tecton-site-agent` (create after CLI authorization works)

## Workflow

1. Inspect the repo before assuming stack or conventions.
2. Keep changes scoped to the user's request.
3. Preserve the current static deployment shape unless the user explicitly asks for a framework migration.
4. Update `HANDOFF.md` after meaningful implementation work.
5. Create/update GitHub issues for execution tasks when useful and GitHub access is confirmed.

## Project Notes

- This repo is currently a static website, not a Next.js or package-managed app.
- There is no build step in the current repo.
- `index.html` is the root homepage.
- `cdl-prep/` contains the published copy of separate legacy static app-marketing/legal/support pages.
- `/Users/matpaul/cdl-prep` is the standalone source copy for the legacy CDL Prep pages.
- `cdl-prep/` is legacy mobile app content and is out of scope for the AI agency website unless the user explicitly brings it back into scope.
- `api/contact.js` is a future serverless contact-handler option and does not run on GitHub Pages.
- The domain is configured through `CNAME` as `tectonlabs.ca`.
- The existing remote is `https://github.com/Tecton-Labs/tecton-site.git`.
- Tecton Labs is Mat's owned AI agency brand, not a client project. Treat project setup as Personal AI / owned-agency work.
