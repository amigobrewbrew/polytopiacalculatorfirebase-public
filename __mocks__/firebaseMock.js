// Use ESM syntax
const app = {};
const analytics = { logEvent: jest.fn() };
const db = {};
const auth = { signInAnonymously: jest.fn() };
const logEvent = jest.fn();
const analyticsLogEvent = jest.fn();

export { app, analytics, db, auth, logEvent, analyticsLogEvent };
export default {
    app,
    analytics,
    db,
    auth,
    logEvent,
    analyticsLogEvent,
};
