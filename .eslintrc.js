module.exports = {
  env: {
    browser: true,
    es6: true,
    node: 1,
    rules: {
      quotes: [2, "single", { avoidEscape: true }],
    },
  },
  extends: "airbnb-base",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "linebreak-style": 0,
  },
};
