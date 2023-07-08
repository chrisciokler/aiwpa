const siteUrl = 'https://www.aiwebpageanalyzer.com/';

module.exports = {
  siteUrl,
  priority: '1.0',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', disallow: '/secret' },
      { userAgent: '*', allow: '/' }
    ]
  },
  exclude: ['/secret', '/server-sitemap.xml']
};
