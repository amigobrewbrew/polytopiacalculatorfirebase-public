// Toggle this for local development
export const isLocal = false;

let app = null;
let analytics = null;

if (!isLocal) {
  // Import the functions you need from the SDKs you need
  const { initializeApp } = require("firebase/app");
  const { getAnalytics } = require("firebase/analytics");

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  };

  // Initialize Firebase only in non-local mode
  app = initializeApp(firebaseConfig);
  analytics = getAnalytics(app);
} else {
  // Use dummy analytics in local mode
  analytics = {
    logEvent: (analytics, event) => {
      console.log("local analytics logEvent: ", event);
    },
  };
}

export { analytics };
export default app;
