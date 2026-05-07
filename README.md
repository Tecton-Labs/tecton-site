# Tecton Labs Website

Public static website for Tecton Labs.

## Entry Points

- `/` -> current root homepage in `index.html`
- `/cdl-prep/` -> published legacy CDL Test Prep static landing/legal/support pages

## Current Architecture

This repo is static HTML with inline CSS and JavaScript. There is no framework, package manager, or build step right now.

Architecture notes:

- `docs/website-architecture.md`
- `docs/secrets-and-access.md`
- `PROJECT_BRIEF.md`
- `HANDOFF.md`
- `AGENTS.md`

## Deployment

`CNAME` points GitHub Pages at:

```txt
tectonlabs.ca
```

Pushing to the GitHub Pages branch should publish:

- `https://tectonlabs.ca/`
- `https://tectonlabs.ca/cdl-prep/`

## Contact Form

The public consultation form currently submits through `formsubmit.co` to `tectonlabs.ca@gmail.com`.

`api/contact.js` is kept as a future first-party backend option using Resend, but GitHub Pages will not run it directly.

## Secrets

Do not commit real secrets. If first-party contact delivery is enabled later, store values in 1Password and mirror variable names only in `.env.example`.

Project vault standard:

- Vault: `Personal - Tecton Labs Website`
- Service account: `tecton-site-agent`
- Token storage item: `tecton-site-agent-token`

## Legacy CDL Prep

The CDL Prep mobile app pages are legacy content. The standalone source copy now lives at:

```txt
/Users/matpaul/cdl-prep
```

The `cdl-prep/` folder in this repo remains as the published GitHub Pages copy so existing links keep working.
