## 1. Environment and Tooling

- [ ] 1.1 Update `package.json` to target Next.js 15, React 19, Mantine 7, and compatible TypeScript/ESLint/Prettier versions.
- [ ] 1.2 Remove `@auth0/nextjs-auth0`, `react-hot-toast`, and unused `@emotion/*` packages after confirming components no longer need them.
- [ ] 1.3 Install updated dependencies and resolve peer dependency warnings.
- [ ] 1.4 Delete the untracked `yarn.lock` and regenerate `bun.lockb`.
- [ ] 1.5 Update `next.config.js` if any experimental flags are no longer needed or have changed in Next.js 15.
- [ ] 1.6 Run `tsc --noEmit` and `next lint` to establish a baseline of errors after the upgrade.

## 2. Remove Orphaned Auth and Admin Code

- [ ] 2.1 Delete `components/UserContext/UserContext.ts`.
- [ ] 2.2 Delete `components/UserContext/UserProvider.tsx` and the `components/UserContext/` directory.
- [ ] 2.3 Delete `components/WithAdminAuthRequired/withAdminAuthRequired.tsx`.
- [ ] 2.4 Delete `centreware/authentication.ts` and the `centreware/` directory.
- [ ] 2.5 Remove `Auth0UserProvider`, `UserProvider`, and `Toaster` from `pages/_app.tsx`.
- [ ] 2.6 Simplify or remove `components/TopBar/TopBar.tsx` now that user-based navigation is gone.

## 3. Migrate Styling from Mantine v6 to v7

- [ ] 3.1 Convert `styles/theme.ts` to a Mantine v7 compatible theme object.
- [ ] 3.2 Replace `createStyles` usage in `components/Header/Header.styles.ts` with a CSS module.
- [ ] 3.3 Replace `createStyles` usage in `components/Resume/Resume.styles.ts` with a CSS module.
- [ ] 3.4 Replace `createStyles` usage in `components/Text/text.styles.ts` with a CSS module or inline style props.
- [ ] 3.5 Replace `createStyles` usage in `components/TopBar/TopBar.styles.ts` with a CSS module.
- [ ] 3.6 Update all Mantine component imports and props that changed between v6 and v7 (e.g., `Button` `leftIcon`, `Chip` props, `Modal` props, `Paper` props).
- [ ] 3.7 Remove `@emotion/styled` usage in `components/Resume/Paper.tsx` and replace it with a CSS module or Mantine style props.
- [ ] 3.8 Update `pages/_document.tsx` if Mantine v7 requires a different document setup.

## 4. Add Local Resume Fallback and Environment Validation

- [ ] 4.1 Create `data/resume.yml` containing a representative resume that matches the `Resume` type.
- [ ] 4.2 Create `lib/env.ts` that validates `AWS_REGION`, `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_BUCKET`, and `CONFIG_KEY`, failing fast in production.
- [ ] 4.3 Update `pages/index.tsx` `getStaticProps` to read `process.env.CONFIG_KEY` and use the env validation helper.
- [ ] 4.4 Implement S3-first, local-fallback logic in `getStaticProps`: try S3 when credentials are present; otherwise read `data/resume.yml` in development.
- [ ] 4.5 Ensure production builds fail with a clear error when required S3 env vars are missing.
- [ ] 4.6 Update `.env.local` to use `CONFIG_KEY` instead of `CONFGI_KEY`.

## 5. Verify and Polish

- [ ] 5.1 Run `bun dev` and confirm the resume page renders without S3 credentials.
- [ ] 5.2 Visually compare the upgraded site against the previous version for regressions.
- [ ] 5.3 Run `next build` successfully with S3 credentials configured.
- [ ] 5.4 Run `next lint` and `tsc --noEmit` with zero errors.
- [ ] 5.5 Test the `/linktree` page renders correctly.
- [ ] 5.6 Review the final diff for accidental leftover files or secrets.

## 6. Documentation and Wrap-up

- [ ] 6.1 Update `README.md` with correct setup instructions and environment variable names.
- [ ] 6.2 Add `data/resume.yml` usage notes to the README.
- [ ] 6.3 Run `openspec validate --change modernize-resume-stack` and address any issues.
- [ ] 6.4 Commit the change artifacts and implementation work in logical commits.
