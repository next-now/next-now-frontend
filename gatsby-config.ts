/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

import { config as dotenvConfig } from 'dotenv';

dotenvConfig({ path: `.env` });

// Read in additional environment variables based on the `CURRENT_APP_ENV`
// environment variable.
dotenvConfig({
  path: `.environments/${process.env.CURRENT_APP_ENV || 'local'}.env`,
});

// TODO: Adjust this depending on the hosting setup and project repository name.
export const pathPrefix = '/next-now-frontend';

export const siteMetadata = {
  title: 'Next Now: Life-long solidarity',
  titleTemplate: '%s - Next Now',
  description: 'A blockchain-based solidarity reward solution.',
  url: 'http://localhost',
  // TODO: Adjust the static site navigation or remove it entirely.
  navigation: [
    { path: '/', label: 'Home', requireLogin: false },
    { path: '/wallet', label: 'Wallet', requireLogin: true },
    { path: '/createInitiative/', label: 'Create', requireLogin: true },
    { path: '/voteInitiative/', label: 'Vote', requireLogin: true },
    { path: '/dashboard', label: 'Dashboard', requireLogin: false },
  ],
};

export const plugins = [
  'gatsby-plugin-typescript',
  'gatsby-plugin-layout',
  'gatsby-plugin-postcss',
  'gatsby-plugin-react-helmet',
  {
    resolve: 'gatsby-source-rest-api',
    options: {
      endpoints: [
        'https://jsonplaceholder.typicode.com/posts',
        'https://jsonplaceholder.typicode.com/users',
      ],
    },
  },
];
