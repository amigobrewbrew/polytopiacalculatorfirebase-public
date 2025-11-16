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

Use "npm run test" to run both the Jest typescript tests and the Robot Framework end-to-end tests. Make sure you did "npm run start" before running the robot tests.

# How to run Robot Framework tests locally (optional)

You dont need to follow these steps. You can ignore them but then you wont be able to run 'npm run test' locally. 'npm run test' will be ran however when submitting a pull request on github.

1. Create and activate a python virtual environment:

```bash
# Create a virtual environment
python3 -m venv venv

# Activate on Windows
venv\Scripts\activate

# Activate on macOS/Linux
source venv/bin/activate
```

2. Make sure the terminal is in the python virtual environment (venv) - sometimes you need to close and re-open terminal in VS code; Also you may need to ignore the prompt to configure the robot framework environment displayed by the command pallette - and install Robot Framework and required dependencies with pip:

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
