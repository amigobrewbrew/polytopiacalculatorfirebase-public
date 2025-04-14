const envConfig = {
    firebase: {
        apiKey:
            import.meta.env.VITE_FIREBASE_API_KEY || "your_firebase_api_key",
        authDomain:
            import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ||
            "your_project_id.firebaseapp.com",
        projectId:
            import.meta.env.VITE_FIREBASE_PROJECT_ID || "your_project_id",
        storageBucket:
            import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ||
            "your_project_id.appspot.com",
        messagingSenderId:
            import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID ||
            "your_messaging_sender_id",
        appId: import.meta.env.VITE_FIREBASE_APP_ID || "your_app_id",
        measurementId:
            import.meta.env.VITE_FIREBASE_MEASUREMENT_ID ||
            "your_measurement_id",
    },
    siteVerification:
        import.meta.env.VITE_GOOGLE_SITE_VERIFICATION ||
        "your_google_site_verification",
    email: import.meta.env.VITE_EMAIL || "your_email@example.com",
    adsenseClient:
        import.meta.env.VITE_ADSENSE_CLIENT ||
        "https://pagead2.googlesyndication.com/",
};

export default envConfig;
