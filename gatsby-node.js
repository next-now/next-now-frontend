const { languages, defaultLanguage } = require('./src/utils/languages');

// FIXME: Move language iteration into a gatsby plugin.
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  deletePage(page);

  return new Promise(resolve => {
    Object.keys(languages).forEach(lang => {
      const languagePrefix = lang === defaultLanguage ? '' : `${lang}/`;

      // Rewriting the `match` property has to be done for each page that contains
      // client-side routing.
      // Possible alternatives:
      //    - https://www.gatsbyjs.org/packages/gatsby-plugin-create-client-paths/
      //    - use NGINX config to always serve up base page
      if (page.path.match(/^\/wallet/)) {
        // page.matchPath is a special key that's used for matching pages
        // with corresponding routes only on the client.
        page.matchPath = `/${languagePrefix}wallet/*`;
      }

      return createPage({
        ...page,
        path: `/${languagePrefix}${page.path.substring(1)}`,
        context: {
          language: lang,
          languagePrefix,
        },
      });
    });
    resolve();
  });
};
