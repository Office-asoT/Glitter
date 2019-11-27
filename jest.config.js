module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',

  moduleNameMapper: {
    "vue-material-design-icons\/.+\\.vue$": "<rootDir>/tests/__mocks__/IconMock.js",
    "\\.(css|less)$": "<rootDir>/tests/__mocks__/styleMock.js",
  }
}
