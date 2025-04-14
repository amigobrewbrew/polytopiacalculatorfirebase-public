// Toggle this for local development
export const isLocal = false;
console.log(
    "isLocal needs to be - true - for local development. Current value: ",
    isLocal
);

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import envConfig from "./envConfig";

let app: any = null;
let analytics: any = null;

if (!isLocal) {
    // Your web app's Firebase configuration
    const firebaseConfig = envConfig.firebase;

    // Initialize Firebase only in non-local mode
    app = initializeApp(firebaseConfig);
    analytics = getAnalytics(app);
} else {
    // Use dummy analytics in local mode
    analytics = {
        logEvent: (analytics: any, event: any) => {
            console.log("local analytics logEvent: ", event);
        },
    };
}

export { analytics };
export default app;
