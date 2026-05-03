# TectonLabs Website Overview

This repo currently contains two public-facing website entry points:

- `/` -> the original site homepage at [index.html](/Users/matpaul/tecton-site/index.html)
- `/v2/` -> the newer one-page AI agency site at [v2/index.html](/Users/matpaul/tecton-site/v2/index.html)

## How The Site Is Built

The site is static HTML with inline CSS and inline JavaScript.

- There is no frontend framework or build step.
- Layout, styling, animations, smooth scrolling, section highlighting, and form validation all live directly inside each `index.html`.
- The `v2` page is intentionally self-contained so GitHub Pages can serve it from a subdirectory without needing bundling or route rewrites.

## Deployment Shape

The domain in [CNAME](/Users/matpaul/tecton-site/CNAME) points at `tectonlabs.ca`.

Current assumption from DNS:

- `tectonlabs.ca` resolves to GitHub Pages IPs.
- That means pushing this repo to the branch GitHub Pages serves should publish:
  - `https://tectonlabs.ca/`
  - `https://tectonlabs.ca/v2/`

Cloudflare may still sit in front of the domain for DNS, SSL, caching, or rules, but `/v2/` itself does not require a separate DNS record.

## Asset Storage

Shared root assets live in [assets](/Users/matpaul/tecton-site/assets):

- `logo-mark.png` -> logo mark used in the root site
- `hero-tecton-reference.png` -> original hero reference crop
- `hero-tecton-reference@2x.png` -> sharpened hero asset used in the current design

The `/v2/` site keeps its own deploy-local copies in [v2/assets](/Users/matpaul/tecton-site/v2/assets):

- `logo-mark.png`
- `hero-tecton-reference@2x.png`

This duplication is deliberate. It keeps `/v2/` portable and avoids broken relative paths when served from a GitHub Pages subfolder.

Other static files:

- [favicon.png](/Users/matpaul/tecton-site/favicon.png) -> root favicon
- [v2/favicon.png](/Users/matpaul/tecton-site/v2/favicon.png) -> copied for subdirectory-safe serving
- [logo.png](/Users/matpaul/tecton-site/logo.png) -> older full logo asset, not used by the new v2 hero page

## Contact Form

The consultation form on both versions is currently wired to submit through `formsubmit.co` to `tectonlabs.ca@gmail.com`.

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

If you want to update the v2 site, the main files to touch are:

- [v2/index.html](/Users/matpaul/tecton-site/v2/index.html)
- [v2/assets](/Users/matpaul/tecton-site/v2/assets)

If the root site should also be updated to match, mirror those changes in:

- [index.html](/Users/matpaul/tecton-site/index.html)
- [assets](/Users/matpaul/tecton-site/assets)

## Why `/v2/` Exists Separately

The `v2` folder is a reviewable release candidate.

That lets you:

- keep the current homepage live
- review the new version at `/v2/`
- promote it later by copying the approved version back to the root if desired
