import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import importHelpers from "eslint-plugin-import-helpers";
import prettier from "eslint-plugin-prettier";
import reactHooks from "eslint-plugin-react-hooks";
import tailwindcss from "eslint-plugin-tailwindcss";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

const config = [
  {
    ignores: [
      "dist/*",
      ".next/*",
      "**/.cache",
      "**/public",
      "**/node_modules",
      "**/*.esm.js",
      "__registry__",
      "scripts/build-registry.mts",
    ],
  },
  ...fixupConfigRules(
    compat.extends(
      "eslint:recommended",
      "plugin:react/recommended",
      "plugin:react-hooks/recommended",
      "next/core-web-vitals",
      "next/typescript",
      "plugin:tailwindcss/recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:prettier/recommended",
      "prettier",
    ),
  ),
  {
    plugins: {
      "import-helpers": importHelpers,
      "@typescript-eslint": fixupPluginRules(typescriptEslint),
      tailwindcss: fixupPluginRules(tailwindcss),
      "react-hooks": fixupPluginRules(reactHooks),
      prettier: fixupPluginRules(prettier),
    },

    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2020,
      sourceType: "module",
    },

    settings: {
      tailwindcss: {
        callees: ["classnames", "clsx", "cn", "twMerge", "ctl", "cva", "tv"],
        config: "tailwind.config.ts",
      },

      next: {
        rootDir: ["./"],
      },
    },

    rules: {
      "import-helpers/order-imports": [
        "warn",
        {
          newlinesBetween: "always",

          groups: [
            ["/^react/", "/^@react/"],
            ["/^next/", "/^@next/"],
            ["type", "/^@/types/"],
            ["module"],
            ["/^@/config/", "/^@/lib/", "/^@/hooks/", "/^@/server/"],
            "/^@/components/layout/",
            "/^@/components/provider/",
            ["/^@/components/ui/", "/^@/components/"],
            ["parent", "sibling", "index"],
            ["/styles/", "/^@/styles/"],
          ],

          alphabetize: {
            order: "asc",
            ignoreCase: true,
          },
        },
      ],

      "@next/next/no-html-link-for-pages": "off",
      "react/jsx-key": "off",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "tailwindcss/no-custom-classname": "off",

      "tailwindcss/classnames-order": [
        "error",
        {
          callees: ["classnames", "clsx", "cn", "twMerge", "ctl", "cva", "tv"],
          config: "tailwind.config.ts",
          removeDuplicates: true,
        },
      ],

      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
        },
      ],
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"],

    languageOptions: {
      parser: tsParser,
    },
  },
];

export default config;
