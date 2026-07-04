## Why

The resume site is running on Next.js 14 with legacy patterns (pages router, Mantine v6, Emotion-based styling) and carries orphaned Auth0/admin code from an earlier admin-management branch. It also requires a live AWS S3 fetch at build time, which makes local development fragile. Modernizing the stack reduces maintenance burden, improves performance, and makes the project easier to run and extend.

## What Changes

- **BREAKING**: Upgrade Next.js from 14 to 16 and React from 18 to 19.
- **BREAKING**: Upgrade Mantine from v6 to v9 and adopt its CSS-modules-based styling model.
- **BREAKING**: Remove orphaned Auth0/admin code: `UserContext`, `UserProvider`, `WithAdminAuthRequired`, `centreware/authentication.ts`, Auth0 dependencies, and related API route references.
- Fix the `CONFGI_KEY` → `CONFIG_KEY` typo in `.env.local` and validate required environment variables at build time.
- Add a local fallback resume data source so the site builds and runs without AWS S3 credentials.
- Replace `@emotion/styled` and `createStyles` usage with CSS modules or Mantine v9 styles.
- Update TypeScript, ESLint, and Prettier configurations for the new dependency versions.
- Refresh lockfile (`bun.lockb`) and remove the untracked `yarn.lock`.

## Capabilities

### New Capabilities

- `local-resume-data`: Support running the site locally with a committed YAML resume file as a fallback when S3 is unavailable.
- `env-validation`: Validate required environment variables at build/startup time and fail fast with a clear error when any are missing.

### Modified Capabilities

<!-- No existing OpenSpec specs are being modified at the requirement level. -->

## Impact

- All pages in `pages/`, components in `components/`, and styles in `styles/`.
- `package.json`, `next.config.js`, `tsconfig.json`, and lockfiles.
- `.env.local` and environment variable naming.
- Build pipeline and local development workflow.
