// @ts-check

/**
 * @type {import('typedoc').TypeDocOptions & import('typedoc-plugin-markdown').MarkdownTheme}
 */
module.exports = {
  entryPoints: ["src/index.ts"],
  entryPointStrategy: "expand",
  tsconfig: "./tsconfig.json",
  entryModule: "@nxauth/firebase-adapter",
  entryFileName: "../firebase-adapter.mdx",
  includeVersion: true,
  readme: 'none',
}
