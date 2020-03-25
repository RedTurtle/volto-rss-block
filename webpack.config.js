const path = require('path');

module.exports = {
  devtool: 'source-map',
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'volto-rss-block.js',
    path: path.resolve(__dirname, 'build'),
    library: 'rssBlock',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: { node: 'current' } }],
              '@babel/preset-react',
            ],
          },
        },
      },
    ],
  },
  externals: {
    '@plone/volto': '@plone/volto',
    '@plone/volto/components': '@plone/volto/components',
    '@plone/volto/config': '@plone/volto/config',
    '@plone/volto/helpers': '@plone/volto/helpers',
    '@plone/volto/icons/rss.svg': '@plone/volto/icons/rss.svg',
    '@plone/volto/icons/ahead.svg': '@plone/volto/icons/ahead.svg',
    '@plone/volto/icons/check.svg': '@plone/volto/icons/check.svg',
    '@plone/volto/icons/down-key.svg': '@plone/volto/icons/down-key.svg',
    '@plone/volto/icons/up-key.svg': '@plone/volto/icons/up-key.svg',
    'prop-types': 'prop-types',
    'react-intl': 'react-intl',
    'react-select': 'react-select',
    'semantic-ui-react': 'semantic-ui-react',
    classnames: 'classnames',
    moment: 'moment',
    react: 'react',
    '@package/config': '@package/config',
  },
};
