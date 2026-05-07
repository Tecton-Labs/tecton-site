# TectonLabs Website Overview

This repo currently contains two public-facing website areas:

- `/` -> the original site homepage at [index.html](/Users/matpaul/tecton-site/index.html)
- `/cdl-prep/` -> published legacy CDL Prep pages kept for existing links

## How The Site Is Built

The site is static HTML with inline CSS and inline JavaScript.

- There is no frontend framework or build step.
- Layout, styling, animations, smooth scrolling, section highlighting, and form validation live directly inside `index.html`.

## Deployment Shape

The domain in [CNAME](/Users/matpaul/tecton-site/CNAME) points at `tectonlabs.ca`.

Current assumption from DNS:

- `tectonlabs.ca` resolves to GitHub Pages IPs.
- That means pushing this repo to the branch GitHub Pages serves should publish:
  - `https://tectonlabs.ca/`
  - `https://tectonlabs.ca/cdl-prep/`

Cloudflare may still sit in front of the domain for DNS, SSL, caching, or rules.

## Asset Storage

Shared root assets live in [assets](/Users/matpaul/tecton-site/assets):

- `logo-mark.png` -> logo mark used in the root site
- `hero-tecton-reference@2x.png` -> sharpened hero asset used in the current design

Other static files:

- [favicon.png](/Users/matpaul/tecton-site/favicon.png) -> root favicon

Legacy CDL Prep source now lives outside this repo at `/Users/matpaul/cdl-prep`. The `cdl-prep/` folder in this repo is the published copy required to keep existing URLs active.

## Contact Form

The consultation form is currently wired to submit through `formsubmit.co` to `tectonlabs.ca@gmail.com`.

This is the current production-friendly path for a static GitHub Pages deploy because it does not require a running backend.

Fields sent on submit:

- `name`
- `email`
- `company`
- `message`
- `submittedAt`
- `pageUrl`

Current behavior:

- The frontend still handles validation, loading state, and success/error messaging locally.
- The email is delivered to Gmail until a domain-based mailbox is ready.

Future backend option:

- [api/contact.js](/Users/matpaul/tecton-site/api/contact.js)

That handler is kept in the repo as a future option for moving back to a first-party backend with Resend or another mail provider, but GitHub Pages does not run it by itself.

## Editing Guidance

If you want to update the Tecton agency site, the main files to touch are:

- [index.html](/Users/matpaul/tecton-site/index.html)
- [assets](/Users/matpaul/tecton-site/assets)

If you need to update legacy CDL Prep pages, update `/Users/matpaul/cdl-prep` first, then copy the published files back to [cdl-prep](/Users/matpaul/tecton-site/cdl-prep) before deploying.

## Legacy Cleanup

Removed stale tracked files during cleanup:

- `/v2/` duplicate review candidate
- `logo.png` old full logo asset
- `assets/hero-tecton-reference.png` lower-res hero reference
