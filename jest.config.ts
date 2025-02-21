module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest"
  },
  moduleFileExtensions: ["js", "ts", "tsx", "json"]

};