# Secrets And Access

## Standard Practice

Each serious project gets its own 1Password vault and a project-scoped service account.

For this project:

- Vault: `Personal - Tecton Labs Website`
- Service account: `tecton-site-agent`
- Token storage item: `tecton-site-agent-token`

## Why

- Secrets stay out of Git, Notion, and chat.
- Automation can read only the project vault instead of broad personal or client access.
- Codex/project tooling can use a scoped token without requiring fingerprint approval for every secret read.
- If a token is exposed or no longer needed, it can be revoked without rotating unrelated project credentials.

## Service Account Scope

The service account should be limited to this vault.

Recommended initial permissions:

- `read_items`
- `write_items` only if Codex needs to create or update project secrets

Do not grant access to personal/private vaults or unrelated client vaults.

## Setup Commands

Run these only after the 1Password CLI is signed into the correct account.

```bash
op vault create "Personal - Tecton Labs Website" --description "Secrets and automation access for the Tecton Labs website project" --icon globe
```

Create the project-scoped service account:

```bash
op service-account create tecton-site-agent --vault "Personal - Tecton Labs Website":read_items,write_items --raw
```

1Password only prints the service account token once. Store it immediately in the project vault as `tecton-site-agent-token`.

Suggested item fields:

```txt
title: tecton-site-agent-token
credential: <token printed once by op>
notes: Project-scoped service account token for /Users/matpaul/tecton-site
```

## Local Use

Prefer loading the token through the local environment or Codex MCP env file, not committing it.

Example local shell shape:

```bash
export OP_SERVICE_ACCOUNT_TOKEN="op://Personal - Tecton Labs Website/tecton-site-agent-token/credential"
```

If a tool needs a literal token value, resolve it at runtime through 1Password rather than storing it in repo files.

## Current Status

Blocked until the 1Password CLI authorizes against the correct desktop/account session.

Observed accounts:

- `my.1password.com` / `matpaul03@gmail.com`
- `mandalachain.1password.com` / `mat@mandalachain.io`

This project should use `my.1password.com` unless Tecton Labs receives its own 1Password account later.
