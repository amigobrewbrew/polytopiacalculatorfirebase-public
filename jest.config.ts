export default {
    testEnvironment: "jsdom",
    setupFilesAfterEnv: [
        "<rootDir>/jest.setup.ts",
        "@testing-library/jest-dom",
    ],
    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy",
        "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/__mocks__/fileMock.js",
    },
    testMatch: [
        "**/__tests__/**/*.[jt]s?(x)",
        "**/?(*.)+(spec|test).[jt]s?(x)",
    ],
    testPathIgnorePatterns: ["/node_modules/", "/tests/e2e/"],
    transform: {
        "^.+\\.(ts|tsx|js|jsx)$": "babel-jest",
    },
};
