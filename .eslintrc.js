module.exports = {
  parserOptions: {
    project: "./tsconfig.json"
  },
  extends: ["@sondr3/typescript", "@sondr3/react", "@sondr3/react/typescript"],
  rules: {
    "@typescript-eslint/no-magic-numbers": "off"
  }
};
