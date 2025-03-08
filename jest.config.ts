export default {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.tsx?$": [
            "ts-jest",
            {
                tsconfig: "tsconfig.jest.json",
                useESM: true,
            },
        ],
    },
    extensionsToTreatAsEsm: [".ts", ".tsx"],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/__mocks__/fileMock.js",
        "^src/firebase$": "<rootDir>/__mocks__/firebaseMock.js",
        "^src/firebase.ts$": "<rootDir>/__mocks__/firebaseMock.js",
        "^(\\.{1,2}/.*)\\.js$": "$1",
    },
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
