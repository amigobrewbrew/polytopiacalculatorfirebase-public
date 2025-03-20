export default {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    setupFilesAfterEnv: [
        "<rootDir>/jest.setup.ts",
        "@testing-library/jest-dom",
    ],
    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    },
    testMatch: [
        "**/__tests__/**/*.[jt]s?(x)",
        "**/?(*.)+(spec|test).[jt]s?(x)",
    ],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
    },
};
