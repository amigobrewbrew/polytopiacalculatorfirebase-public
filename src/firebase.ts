// Toggle this for local development
export const isLocal = false;

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

let app:any  = null;
let analytics:any = null;

if (!isLocal) {

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
    logEvent: (analytics:any, event:any) => {
      console.log("local analytics logEvent: ", event);
    },
  };
}

export { analytics };
export default app;
