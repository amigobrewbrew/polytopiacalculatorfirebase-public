// Use environment variable for local development mode
export const isLocal =
    import.meta.env.VITE_IS_LOCAL === undefined
        ? true
        : import.meta.env.VITE_IS_LOCAL === "true";
console.log("isLocal value from environment: ", isLocal);

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
