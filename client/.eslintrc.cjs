module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "airbnb",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],

    // disallow deletion of variables
    "no-delete-var": "error",

    // disallow labels that share a name with a variable
    // https://eslint.org/docs/rules/no-label-var
    "no-label-var": "error",

    // disallow declaration of variables already declared in the outer scope
    "no-shadow": "error",

    // disallow shadowing of names such as arguments
    "no-shadow-restricted-names": "error",

    // disallow use of undeclared variables unless mentioned in a /*global */ block
    "no-undef": "error",

    // disallow use of undefined when initializing variables
    "no-undef-init": "error",
    // disallow declaration of variables that are not used in the code
    "no-unused-vars": [
      "error",
      { vars: "all", args: "after-used", ignoreRestSiblings: true },
    ],
    // disallow use of variables before they are defined
    "no-use-before-define": [
      "error",
      { functions: true, classes: true, variables: true },
    ],
    "no-console": ["error", { allow: ["warn", "error"] }],

    // import disabled
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-duplicates": "off",

    // prettier disabled
    "prettier/prettier": "off",

    // React disabled
    "react/forbid-prop-types": "off",
    "react/function-component-definition": "off",
    "react/jsx-fragments": "off",
    "react/jsx-no-useless-fragment": "off",
    "react/jsx-filename-extension": "off",
    "react/require-default-props": "off",

    camelcase: "off",
    // disallow use of undefined variable
    // https://eslint.org/docs/rules/no-undefined
    // TODO: enable?
    "no-undefined": "off",

    // enforce or disallow variable initializations at definition
    "init-declarations": "off",

    // disallow the catch clause parameter name being the same as a variable in the outer scope
    "no-catch-shadow": "off",
  },
};
