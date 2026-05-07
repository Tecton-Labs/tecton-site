# Project Brief

## Project

- Name: Tecton Labs Website
- Bucket: Personal AI
- Client / Org: Tecton Labs, owned agency brand
- Owner: Mat Paul
- Status: Existing static site; project framework setup in progress

## Goal

Build and maintain the public TectonLabs website at `tectonlabs.ca`, positioning Tecton Labs as an AI strategy, implementation, and integration partner.

## Users / Audience

- Business owners and operators evaluating practical AI implementation support.
- Enterprise and team leads looking for workflow automation, internal AI tooling, and implementation guidance.
- Prospective Tecton Labs clients arriving through direct referral, search, LinkedIn, or shared links.

## Scope

- Public marketing homepage at `/`.
- Contact/consultation intake flow currently handled by a static-friendly email service.
- Published legacy CDL prep landing/support/privacy/terms pages under `/cdl-prep/`.
- Lightweight repo documentation so future Codex sessions can understand the site and continue work safely.

## Stack

- Static HTML.
- Inline CSS and JavaScript.
- GitHub Pages deployment with `CNAME` set to `tectonlabs.ca`.
- Current contact form delivery through `formsubmit.co` to `tectonlabs.ca@gmail.com`.
- Future optional Node/Vercel-style contact handler in `api/contact.js` using Resend.

## Key Links

- GitHub: `https://github.com/Tecton-Labs/tecton-site`
- Notion card: `https://www.notion.so/35907c06f86e81e4a0dff1cb75acf73e`
- 1Password vault: `Personal - Tecton Labs Website` (confirm/create if this project needs stored secrets)
- Live URL: `https://tectonlabs.ca/`
- Local path: `/Users/matpaul/tecton-site`

## Decisions

- Keep the site static unless a backend requirement becomes concrete.
- Do not commit real contact-provider secrets. Use `.env.example` for variable names only.
- Treat repo docs and GitHub as the implementation source of truth.
- Keep `/cdl-prep/` in the repo as a published legacy copy so existing public links stay active, but maintain the standalone source in `/Users/matpaul/cdl-prep`.
- Do not let CDL Prep drive the AI agency website roadmap.
- Use one project-specific 1Password vault and one scoped service account for project automation.

## Non-Goals

- Full CMS migration.
- Framework migration before the static version has clear limits.
- Storing implementation tasks or secrets in Notion.
- Running `api/contact.js` on GitHub Pages; it is a future backend option only.
- Continuing CDL Prep as the main Tecton Labs brand direction.

## Open Questions

- Should contact form delivery stay on `formsubmit.co`, or move to first-party Resend delivery?
- Is the 1Password vault `Personal - Tecton Labs Website` already created?
- Should the Notion Project Dashboard card be expanded after the repo cleanup is committed?
- Should the two local commits ahead of `origin/main` be pushed even though they net to no content diff?
