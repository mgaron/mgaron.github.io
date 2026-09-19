# Mike Garon’s personal site

A mobile-first application directory built with Vue 3, TypeScript, Vite, and Tailwind CSS, matching the stack in `../game-mortal`.

## Development

```sh
npm ci
npm run dev
```

The root is the new directory. `/mortal/`, `/fall25/`, and `/discus/` serve the existing static applications. Cards use one column on mobile, two from 768px, and three from 1100px. Each page load shuffles the cards; the sort selector also supports newest, oldest, and title.

## Catalog and previews

`npm run dev` and `npm run build` discover top-level application folders containing `index.html`, extract their HTML titles, and generate `src/catalog.json`. Add another built application folder to include it automatically.

The existing applications do not embed build metadata. The displayed build hash and date therefore identify the latest **publish commit affecting that application’s folder**, using its Git commit timestamp (displayed in UTC). They are not invented source hashes or compilation timestamps. Uncommitted applications show “unpublished.” A full Git history is required for accurate metadata; the Pages workflow fetches it.

With the development server running and Google Chrome installed, capture actual rendered application pages:

```sh
npm run screenshots
```

Alternatively use `PREVIEW_BASE_URL=https://mgaron.github.io npm run screenshots`. The script loads each application at a 1200 × 900 viewport, waits for its scene to render, and saves its screenshot to `public/previews/`. Commit updated previews whenever a microapplication changes. `CHROME_CHANNEL` can override the Playwright browser channel.

## Build and deploy

```sh
npm test
npm run build
npm run preview
```

The build writes the directory and all microapplication files into `dist/`, preserving their absolute paths. Source application folders are never emptied by the build.

The included GitHub Pages workflow builds and deploys on pushes to `main`. In repository Settings → Pages, select **GitHub Actions** as the build source. Existing microapplication publishing scripts can keep copying their builds into their respective folders and committing them; each push then rebuilds the catalog and the complete Pages artifact.


The default branch is `main`. The `github-pages` environment permits deployments from `main` only. Microapplication publishers should clone the remote default branch and push its current branch (as the Mortal publisher does), or explicitly target `main`.

To update an existing checkout that still uses the former branch name:

```sh
git fetch origin
git branch -m master main
git branch --set-upstream-to=origin/main main
git remote set-head origin -a
```

Update any separate Fall25 or Discus publishing checkout or automation that explicitly targets the former branch before publishing again.
