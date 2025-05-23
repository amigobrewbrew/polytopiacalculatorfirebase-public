import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    // Load env file based on `mode`
    const env = loadEnv(mode, process.cwd(), '');
    
    // Log environment loading for debugging
    console.log(`Loading environment variables for mode: ${mode}`);
    
    // Check if .env file exists and log its presence
    const envPath = path.resolve(process.cwd(), '.env');
    if (fs.existsSync(envPath)) {
        console.log('.env file found and will be loaded');
    } else {
        console.warn('.env file not found! Create one with your Firebase configuration.');
    }

    return {
        plugins: [react()],
        root: ".", // Changed from './src' to project root
        publicDir: "public",
        build: {
            outDir: "dist",
            sourcemap: true,
        },
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "./src"),
            },
        },
        server: {
            port: 3000,
        },
        // Makes Vite correctly load environment variables
        define: {
            // Make all environment variables available by default
            'process.env': env,
            // Ensure import.meta.env has all values
            'import.meta.env.VITE_FIREBASE_API_KEY': JSON.stringify(env.VITE_FIREBASE_API_KEY),
            'import.meta.env.VITE_FIREBASE_AUTH_DOMAIN': JSON.stringify(env.VITE_FIREBASE_AUTH_DOMAIN),
            'import.meta.env.VITE_FIREBASE_PROJECT_ID': JSON.stringify(env.VITE_FIREBASE_PROJECT_ID),
            'import.meta.env.VITE_FIREBASE_STORAGE_BUCKET': JSON.stringify(env.VITE_FIREBASE_STORAGE_BUCKET),
            'import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(env.VITE_FIREBASE_MESSAGING_SENDER_ID),
            'import.meta.env.VITE_FIREBASE_APP_ID': JSON.stringify(env.VITE_FIREBASE_APP_ID),
            'import.meta.env.VITE_FIREBASE_MEASUREMENT_ID': JSON.stringify(env.VITE_FIREBASE_MEASUREMENT_ID),
            'import.meta.env.VITE_IS_LOCAL': JSON.stringify(env.VITE_IS_LOCAL),
        }
    };
});
