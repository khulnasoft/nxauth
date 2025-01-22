/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:
    process.env.VERCEL_ENV === "preview"
      ? process.env.VERCEL_URL
      : "https://nxauth.khulnasoft.com",
  generateIndexSitemap: false,
  generateRobotsTxt: true,
}
