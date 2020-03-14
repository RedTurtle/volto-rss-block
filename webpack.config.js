const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    filename: 'volto-rss-block.js',
    path: path.resolve(__dirname, 'build'),
    library: 'rssBlock',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  externals: {
    '@plone/volto': '@plone/volto',
    'prop-types': 'prop-types',
    'react-intl': 'react-intl',
    'react-select': 'react-select',
    'semantic-ui-react': 'semantic-ui-react',
    classnames: 'classnames',
    react: 'react',
  },
};
