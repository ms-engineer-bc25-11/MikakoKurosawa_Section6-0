import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs}"],
    // plugins: { js },
    // extends: ["js/recommended"],
    extends: [js.configs.recommended],
    languageOptions: { 
      globals: {
        ...globals.browser,
        ...globals.node,
       },
     },
    rules: {
      "no-alert": "error",
      "id-length": ["error", { max: 12 }],
    },
  },
]);
