# Polytopia Damage Calculator

My first project doing Typescript and React.

Use "npm install", "npm run build" & "npm run start" before deploying react app to azure/firebase/hosting

# Setup

For firebase hosting, configure your project API keys in `src/envConfig.ts` via the `.env` file. By default, firebase is disabled for local development (controlled by the `VITE_IS_LOCAL` env variable).

More details to get started are here: https://firebase.google.com/docs/web/setup and here: https://reactjs.org/docs/create-a-new-react-app.html.

# Guides

React: https://www.youtube.com/watch?v=Ke90Tje7VS0

Firebase: https://www.youtube.com/watch?v=PKwu15ldZ7k

# Tests

Use "npm run test" to run both the Jest typescript tests and the Playwright end-to-end tests.

# E2E Tests

Install Playwright browsers (first time only):

```bash
npx playwright install --with-deps chromium
```

# Usage

Licensed under the GNU Affero General Public License v3.0
