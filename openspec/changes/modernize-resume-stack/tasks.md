## 1. Environment and Tooling

- [x] 1.1 Update `package.json` to target Next.js 16, React 19, Mantine 9, and compatible TypeScript/ESLint/Prettier versions.
- [x] 1.2 Remove `@auth0/nextjs-auth0`, `react-hot-toast`, `superjson`, `next-superjson-plugin`, `babel-plugin-superjson-next`, and unused `@emotion/*` packages.
- [x] 1.3 Install updated dependencies and resolve peer dependency warnings.
- [x] 1.4 Delete the untracked `yarn.lock` and regenerate `bun.lockb`.
- [x] 1.5 Update `next.config.js`: remove `swcMinify` and the `next-superjson-plugin` experimental plugin.
- [x] 1.6 Update `tsconfig.json` for TypeScript 6 (`target: es2022`, `moduleResolution: bundler`).
- [x] 1.7 Run `tsc --noEmit` and `next build` to establish a baseline of errors after the upgrade.

## 2. Remove Orphaned Auth and Admin Code

- [x] 2.1 Delete `components/UserContext/UserContext.ts`.
- [x] 2.2 Delete `components/UserContext/UserProvider.tsx` and the `components/UserContext/` directory.
- [x] 2.3 Delete `components/WithAdminAuthRequired/withAdminAuthRequired.tsx`.
- [x] 2.4 Delete `centreware/authentication.ts` and the `centreware/` directory.
- [x] 2.5 Delete `pages/api/auth/[auth0].ts` and the `pages/api/` directory.
- [x] 2.6 Remove `Auth0UserProvider`, `UserProvider`, and `Toaster` from `pages/_app.tsx`.
- [x] 2.7 Remove `components/TopBar/TopBar.tsx` and `components/TopBar/TopBar.styles.ts` since user-based navigation is gone.

## 3. Migrate Styling from Mantine v6 to v9

- [x] 3.1 Convert `styles/theme.ts` to a Mantine v9 compatible theme object.
- [x] 3.2 Replace `createStyles` usage in `components/Header/Header.styles.ts` with `components/Header/Header.module.css`.
- [x] 3.3 Replace `createStyles` usage in `components/Resume/Resume.styles.ts` with `components/Resume/Resume.module.css`.
- [x] 3.4 Replace `createStyles` usage in `components/Text/text.styles.ts` with `components/Text/Text.module.css`.
- [x] 3.5 Replace `createStyles` usage in `styles/index.styles.tsx` with `styles/index.module.css`.
- [x] 3.6 Update all Mantine component imports and props that changed between v6 and v9 (e.g., `Button` `leftIcon` → `leftSection`, `Group` `position` → `justify`, remove `compact`).
- [x] 3.7 Remove `@emotion/styled` usage in `components/Resume/Paper.tsx` and replace it with a CSS module class.
- [x] 3.8 Update `pages/_document.tsx` to remove the `@mantine/next` dependency.
- [x] 3.9 Fix invalid HTML nesting in `components/Text/H1.tsx` (`<p>` cannot contain `<h1>`).

## 4. Add Local Resume Fallback and Environment Validation

- [x] 4.1 Create `data/resume.yml` containing a representative resume that matches the `Resume` type.
- [x] 4.2 Create `lib/env.ts` that validates `AWS_REGION`, `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_BUCKET`, and `CONFIG_KEY`, failing fast in production.
- [x] 4.3 Update `pages/index.tsx` `getStaticProps` to use the env validation helper and read `CONFIG_KEY`.
- [x] 4.4 Implement S3-first, local-fallback logic in `getStaticProps`: try S3 when credentials are present; otherwise read `data/resume.yml` in development.
- [x] 4.5 Ensure production builds fail with a clear error when required S3 env vars are missing.
- [x] 4.6 Update `.env.local` to use `CONFIG_KEY` instead of `CONFGI_KEY` and remove stale `DATABASE_URL`.

## 5. Verify and Polish

- [x] 5.1 Run `bun dev` and confirm the resume page renders without S3 credentials.
- [ ] 5.2 Visually compare the upgraded site against the previous version for regressions.
- [x] 5.3 Run `next build` successfully with S3 credentials configured.
- [x] 5.4 Run `tsc --noEmit` with zero errors.
- [x] 5.5 Test the `/linktree` page renders correctly.
- [ ] 5.6 Review the final diff for accidental leftover files or secrets.

## 6. Documentation and Wrap-up

- [ ] 6.1 Update `README.md` with correct setup instructions and environment variable names.
- [ ] 6.2 Add `data/resume.yml` usage notes to the README.
- [ ] 6.3 Run `openspec validate --change modernize-resume-stack` and address any issues.
- [ ] 6.4 Commit the change artifacts and implementation work in logical commits.
