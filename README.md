# Polytopia Damage Calculator

My first project doing Typescript and React.

Get started:

```bash
npm install
```

To build and deploy:

```bash
npm run build
npm run start
```

# Setup

Firebase is disabled by default for local development. To enable it, copy `.env.example` to `.env` and fill in your Firebase configuration.

# Tests

Run both the Jest typescript tests and the Playwright end-to-end tests:

```bash
npm run test
```

# E2E Tests

Install Playwright browsers (first time only):

```bash
npx playwright install --with-deps chromium
```

Run only the E2E tests:

```bash
npm run test:e2e
```

# Usage

Licensed under the GNU Affero General Public License v3.0
