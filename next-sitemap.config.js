const config = {
  siteUrl: "https://itechclub.vercel.app",
  generateRobotsTxt: true, // auto-generate robots.txt
  sitemapSize: 7000,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/admin/*"], // optional: exclude pages

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: ["https://itechclub.vercel.app/sitemap.xml"],
  },
};

export default config;
