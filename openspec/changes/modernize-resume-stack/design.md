## Context

The project is a Next.js 14 resume site using the `pages/` router, Mantine v6, and Emotion for styling. Resume data is fetched from AWS S3 at build time via `getStaticProps`. The codebase also contains leftover Auth0/admin code from earlier feature branches that no longer has matching API routes in `main`.

Current pain points:
- Mantine v6 is outdated and uses `createStyles`, which is removed in v7.
- Emotion adds runtime cost and complexity for a mostly static site.
- Auth0/admin components reference non-existent API routes.
- S3 dependency blocks local development when credentials or the remote object are unavailable.
- The `.env.local` file contains a typo (`CONFGI_KEY`) and real cloud credentials.

## Goals / Non-Goals

**Goals:**
- Upgrade to a modern, supported stack (Next.js 16, React 19, Mantine 9).
- Remove dead auth/admin code and dependencies.
- Make local development possible without AWS credentials.
- Fail fast with clear errors when required env vars are missing in production builds.
- Keep visual parity with the current resume site.

**Non-Goals:**
- Adding new features (e.g., a new admin UI or CMS).
- Migrating from `pages/` to `app/` router.
- Redesigning the UI/UX beyond style-system updates.
- Hosting or CI/CD changes.

## Decisions

### 1. Keep the `pages/` router for this change
Moving to the `app/` router is a larger migration and is out of scope. Next.js 16 still supports `pages/` well, and this keeps the change focused.

### 2. Use Mantine v9 with CSS modules
Mantine v9 drops `createStyles` in favor of CSS modules. We will co-locate `.module.css` files next to components or use Mantine's built-in style props. This removes the Emotion runtime dependency.

### 3. Remove Auth0 and admin code completely
The admin-management feature lives in remote branches and is not active in `main`. The `UserContext`, `UserProvider`, `WithAdminAuthRequired`, and `centreware/authentication.ts` files, plus `@auth0/nextjs-auth0`, will be removed. The `TopBar` will be simplified or removed.

### 4. Local fallback for resume data
A `data/resume.yml` file will be committed as the local fallback. `getStaticProps` will attempt S3 first; if `AWS_ACCESS_KEY_ID` is missing or the S3 call fails, it will fall back to the local file. In production (defined by `NODE_ENV=production`), missing S3 credentials will fail the build.

### 5. Environment validation with a small helper
Instead of scattered `as string` casts, a `lib/env.ts` helper will assert required variables at import time. This keeps the error message clear and centralized.

### 6. Keep `bun.lockb` as the canonical lockfile
`yarn.lock` is untracked and stale. We will delete it and regenerate `bun.lockb` after dependency updates.

## Risks / Trade-offs

- **[Risk] Mantine v9 visual regressions** → Mitigation: compare every component visually after migration; use a side-by-side local build.
- **[Risk] Next.js 16 breaking changes around dynamic APIs** → Mitigation: we do not use `cookies()`, `headers()`, or dynamic route params in `pages/`, so impact is minimal.
- **[Risk] S3 fallback masks production misconfiguration** → Mitigation: fail the build in production when S3 env vars are missing; fallback only in development.
- **[Risk] TypeScript/eslint incompatibilities after upgrades** → Mitigation: update related devDependencies together and run `tsc --noEmit` + `next lint` after each major bump.

## Migration Plan

1. Pin target versions in `package.json` (Next.js 16, React 19, Mantine 9, latest TypeScript/ESLint/Prettier).
2. Install dependencies and resolve peer conflicts.
3. Remove Auth0/admin code and update `_app.tsx`.
4. Rewrite Mantine styles from `createStyles` to CSS modules.
5. Add local resume fallback and env validation.
6. Run build, lint, and TypeScript checks.
7. Delete `yarn.lock` and regenerate `bun.lockb`.

## Open Questions

- ~~Should we keep `next-superjson-plugin`?~~ Removed during implementation; plain YAML/JSON data does not need it.
- Should we replace `date-fns` with native `Intl.DateTimeFormat` to reduce dependencies? Optional cleanup after core upgrade.
