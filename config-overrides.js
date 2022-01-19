const path = require('path');
const { override } = require('customize-cra');
const SentryWebpackPlugin = require("@sentry/webpack-plugin");

const addSentryPlugin = config => {
  if (process.env.NODE_ENV === 'production') {

    config.plugins.push(new SentryWebpackPlugin({
      authToken: process.env.REACT_APP_SENTRY_AUTH_TOKEN,
      org: process.env.REACT_APP_SENTRY_ORG,
      project: process.env.REACT_APP_SENTRY_PROJECT,
      release: process.env.REACT_APP_ENV,
      cleanArtifacts: true,
      include: path.resolve(__dirname, 'build'),
    }));
  }

  return config;
}

module.exports = override(addSentryPlugin);