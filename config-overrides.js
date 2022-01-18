const { override } = require('customize-cra');
const SentryWebpackPlugin = require("@sentry/webpack-plugin");

const addSentryPlugin = config => {
  config.plugins.push(new SentryWebpackPlugin({
    authToken: process.env.REACT_APP_SENTRY_AUTH_TOKEN,
    org: process.env.REACT_APP_SENTRY_ORG,
    project: process.env.REACT_APP_SENTRY_PROJECT,
    release: process.env.REACT_APP_ENV
  }));

  return config;
}

module.exports = override(addSentryPlugin);