<p align="center">
  <img alt="Author" src="./public/images/author_.jpg" width="60" />
</p>
<h1 align="center">
  Oliver White Resume
</h1>

A personal resume and link-tree site built with **Next.js**, **React**, **TypeScript**, and **Mantine**.

## Tech Stack

- [Next.js 16](https://nextjs.org/) (Pages Router)
- [React 19](https://react.dev/)
- [Mantine 9](https://mantine.dev/) (UI components + CSS modules)
- [Bun](https://bun.sh/) (package manager)

## Prerequisites

- [Bun](https://bun.sh/) installed
- AWS S3 credentials for production data (optional for local development)

## Setup

1. **Clone the repository**

   ```shell
   git clone https://github.com/oliverwhite19/resume-next.git
   cd resume-next
   ```

2. **Install dependencies**

   ```shell
   bun install
   ```

3. **Add environment variables**

   Create a `.env.local` file in the project root:

   ```shell
   touch .env.local
   ```

   Add the following variables:

   ```shell
   AWS_ACCESS_KEY_ID=your_access_key
   AWS_SECRET_ACCESS_KEY=your_secret_key
   AWS_BUCKET=your_bucket_name
   AWS_REGION=your_bucket_region
   CONFIG_KEY=config.yml
   ```

   For local development, S3 credentials are optional. The site will fall back to `data/resume.yml` if S3 is not configured.

## Development

Start the development server:

```shell
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the resume.

The `/linktree` page is available at [http://localhost:3000/linktree](http://localhost:3000/linktree).

## Building for Production

```shell
bun run build
```

A production build requires valid S3 credentials in `.env.local` (or in the hosting platform's environment variables). The build will fail fast with a clear error if any required S3 variable is missing.

## Resume Data

Resume content is loaded from a YAML file in one of two ways:

- **Production:** Fetched from the configured S3 bucket (`AWS_BUCKET`) using `CONFIG_KEY` (e.g., `config.yml`).
- **Local development:** Falls back to `data/resume.yml` when S3 credentials are not provided.

The YAML structure must match the `Resume` type defined in `types/index.d.ts`.

## Scripts

| Command          | Description               |
| ---------------- | ------------------------- |
| `bun dev`        | Start development server  |
| `bun run build`  | Build for production      |
| `bun run start`  | Start production server   |
| `bun run lint`   | Run ESLint                |
| `bun run pretty` | Format code with Prettier |

## Deployment

This project is configured for deployment on [Vercel](https://vercel.com/). Ensure the following environment variables are set in your Vercel project:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_BUCKET`
- `AWS_REGION`
- `CONFIG_KEY`

Pushing to `main` will trigger a production deployment as the project is connected to Vercel.
