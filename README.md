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

Use "npm run test" to run both the Jest javascript tests and the robot framework for end-to-end testing.

# How to run Robot Testing Framework seperately for debugging purposes

1. Create and activate a python virtual environment:

```bash
# Create a virtual environment
python -m venv venv

# Activate on Windows
venv\Scripts\activate

# Activate on macOS/Linux
source venv/bin/activate
```

2. Make sure the terminal is in the python venv (normally close and re-open terminal in VS code) and install Robot Framework and required dependencies:

```bash
pip install -r requirements.txt
```

3. Initialize Browser library:

```bash
rfbrowser init
```

4. Run single Robot Framework tests:

```bash
robot tests/robot/home_page.robot
```

5. Run all Robot Framework tests:

```bash
robot tests/robot
```

6. View the results in the project folder root directory. Open log.html with browser to view screenshots of failed tests:
   output.xml
   log.html
   report.html

# Usage

Licensed under the GNU Affero General Public License v3.0
