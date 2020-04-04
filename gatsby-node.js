const { languages, defaultLanguage } = require('./src/utils/languages');

// FIXME: Move language iteration into a gatsby plugin.
exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  deletePage(page);

  return new Promise(resolve => {
    Object.keys(languages).forEach(lang => {
      const languagePrefix = lang === defaultLanguage ? '' : `${lang}/`;

      return createPage({
        ...page,
        path: `/${languagePrefix}${page.path.substring(1)}`,
        context: {
          language: lang,
          layout: page.path.match(/auth/) ? 'auth' : 'anonymous',
        },
      });
    });
    resolve();
  });
};
