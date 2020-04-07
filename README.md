# Volto RSS Block

RSS block for [Volto](https://github.com/plone/volto).

To be used with mrs-developer, see [Volto docs](https://docs.voltocms.com/customizing/add-ons/) for further usage informations.

This block needs a specific service to be installed on your Plone backend.
See [redturtle.rssservice](https://github.com/RedTurtle/redturtle.rssservice).

## Install mrs-developer and configure your Volto project

In your Volto project:

```bash
yarn add mrs-developer RedTurtle/volto-rss-block
```

and in `package.json`:

```json
  "scripts": {
    "develop:npx": "npx -p mrs-developer missdev --config=jsconfig.json --output=addons",
    "develop": "missdev --config=jsconfig.json --output=addons",
    "preinstall": "if [ -f $(pwd)/node_modules/.bin/missdev ]; then yarn develop; else yarn develop:npx; fi",
    "postinstall": "rm -rf ./node_modules/volto-* && yarn omelette",
    ...
  }
```

Create a `mrs.developer.json` file:

```json
{
  "volto-rss-block": {
    "url": "git@github.com:RedTurtle/volto-rss-block.git"
  }
}
```

In `jsconfig.json`:

```json
{
  "compilerOptions": {
    "paths": {
      "volto-rss-block": ["addons/volto-rss-block"]
    },
    "baseUrl": "src"
  }
}
```

Fix tests, in `package.json`:

```json
"jest": {
    ...
    "moduleNameMapper": {
      "@plone/volto/(.*)$": "<rootDir>/node_modules/@plone/volto/src/$1",
      "@package/(.*)$": "<rootDir>/src/$1",
      "volto-rss-block/(.*)$": "<rootDir>/src/addons/volto-rss-block/src/$1",
      "~/(.*)$": "<rootDir>/src/$1"
    },
    "testMatch": [
      "**/__tests__/**/*.[jt]s?(x)",
      "**/?(*.)+(spec|test).[jt]s?(x)",
      "!**/src/addons/volto/**/*"
    ],
    ...
```

Edit `.eslintrc`:

```json
{
  "extends": "./node_modules/@plone/volto/.eslintrc",
  "settings": {
    "import/resolver": {
      "alias": {
        "map": [
          ["@plone/volto", "@plone/volto/src"],
          ["@package", "./src"],
          ["volto-rss-block", "./src/addons/volto-rss-block/src"]
        ],
        "extensions": [".js", ".jsx", ".json"]
      },
      "babel-plugin-root-import": {
        "rootPathSuffix": "src"
      }
    }
  }
}
```

Add `src/addons` in `.gitignore`:

```
# .gitignore
src/addons
```

Then, run `mrs-developer` and install dependencies:

```bash
yarn develop
yarn
```

## Usage

You can import the rss block in your volto theme in this way:

```javascript
// src/config.js

import { rssBlock } from 'volto-rss-block';

export const blocks = {
  ...defaultBlocks,
  blocksConfig: { ...defaultBlocks.blocksConfig, rssBlock },
};
```

You can also add custom templates like this:

```javascript
// src/config.js

import { rssBlock as customRssBlock } from 'volto-rss-block';

const rssBlock = {
  ...customRssBlock,
  templates: {
    ...customRssBlock.templates,
    card_without_image: {
      label: 'Card template with images',
      template: CardWithImageRssTemplate,
    },
    card_with_image: {
      label: 'Card template without images',
      template: CardWithoutImageRssTemplate,
    },
  },
};
```
