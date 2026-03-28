# Polytopia Damage Calculator

My first project doing Typescript and React.

Use "npm install", "npm run build" & "npm run start" before deploying react app to azure/firebase/hosting

If you would just like to run the app locally without deploying, you can set `isLocal = true` in `src/firebase.js`.

# Setup

For firebase hosting, configure your project API keys for src/firebase.js in the .env file or disable firebase as described above. envConfig.ts is used to load local/cloud environmental variables.

More details to get started are here: https://firebase.google.com/docs/web/setup and here: https://reactjs.org/docs/create-a-new-react-app.html.

# Guides

React: https://www.youtube.com/watch?v=Ke90Tje7VS0

Firebase: https://www.youtube.com/watch?v=PKwu15ldZ7k

# Tests

Use "npm run test" to run both the Jest typescript tests and the Playwright end-to-end tests.

# How to run E2E tests locally

1. Install Playwright browsers (first time only):

```bash
npx playwright install --with-deps chromium
```

2. Build the app:

```bash
npm run build
```

3. Run the E2E tests:

```bash
npm run test:e2e
```

Playwright will automatically start the preview server. To run a specific test file:

```bash
npx playwright test tests/e2e/home-page.spec.ts
```

4. To view the test report after running:

```bash
npx playwright show-report
```

# Usage

Licensed under the GNU Affero General Public License v3.0
