# Handoff

## Current State

This is an existing static website repo for Tecton Labs.

- Branch: `main`
- Remote: `https://github.com/Tecton-Labs/tecton-site.git`
- Local branch state at setup time: ahead of `origin/main` by 2 commits
- Net file diff against `origin/main`: none from those two commits
- Untracked local file at setup time: `.DS_Store`

Public entry points:

- `/` -> current homepage in `index.html`
- `/cdl-prep/` -> published legacy CDL Test Prep static pages

The root website is static HTML with inline CSS and JavaScript. There is no package manager, framework, or build step in the current repo.

## What Changed Last

Project framework files were added so future sessions can enter the repo cold and understand the ownership, deployment shape, current state, and next actions.

Added:

- `PROJECT_BRIEF.md`
- `HANDOFF.md`
- `AGENTS.md`
- `.env.example`
- `.gitignore`
- `docs/secrets-and-access.md`

Updated:

- `README.md`

## Next Action

Decide the immediate site-building direction:

- continue iterating on the current static root,
- replace it with a cleaner new implementation,
- or clean up and deploy the current static structure first.

After that decision, inspect the target page visually on desktop and mobile before editing.

## Blockers

- Confirm whether `Personal - Tecton Labs Website` exists in 1Password or should be created.
- Create project-scoped 1Password service account `tecton-site-agent` after CLI authorization works.
- Confirm the intended production contact form path: static `formsubmit.co` or first-party Resend handler.
- Confirm whether the local ahead-by-2 Git history should be pushed or reconciled.

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
- Notion Project Dashboard card: `https://www.notion.so/35907c06f86e81e4a0dff1cb75acf73e`
- `/Users/matpaul/cdl-prep` is now the standalone source copy for legacy CDL Prep content.
- `tecton-site/cdl-prep/` remains the published GitHub Pages copy so `https://tectonlabs.ca/cdl-prep/` keeps working.
- CDL Prep is legacy content from an earlier mobile app direction. Ignore it for the AI agency website roadmap unless explicitly in scope.
- The contact form in `index.html` currently posts to `https://formsubmit.co/ajax/tectonlabs.ca@gmail.com`.
- `api/contact.js` is not used by GitHub Pages. It is preserved as a future backend option for a platform that can run serverless functions.
- Removed stale tracked assets: old full `logo.png`, lower-res `assets/hero-tecton-reference.png`, and duplicate `/v2/` review candidate.
- Avoid committing secrets, `.env`, generated output, or OS/editor files.

## Files / Areas To Inspect First

- `README.md`
- `PROJECT_BRIEF.md`
- `docs/website-architecture.md`
- `docs/secrets-and-access.md`
- `index.html`
- `api/contact.js`
- `cdl-prep/index.html` only if the legacy CDL Prep pages are explicitly in scope
