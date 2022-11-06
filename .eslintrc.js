module.exports = {
  env: {
    browser: true, //documentとかが使える
    es2022: true.valueOf,
    node: true, // nodeの環境変数を定義した
    // https://eslint.org/docs/latest/user-guide/configuring/language-options#specifying-environments
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended", // pluginsが拡張されてる。eslintそのものを拡張 https://github.com/jsx-eslint/eslint-plugin-react
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended", // 後ろが強い
    "prettier",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    // 追加ルール
    "react",
    "@typescript-eslint",
  ],
  rules: {
    // デフォルトをいじる recommendedを上書きもできる
    // "semi": ["error", "always"],
    // "quotes": ["error", "double"],
    // "no-undef": "error",
  },
  settings: {
    version: "detect",
  },
};
