# Volto RSS Block

## Installation

```bash
yarn add volto-rss-block
```

This block needs a specific service to be installed on your Plone backend.
See [redturtle.rssservice](https://github.com/RedTurtle/redturtle.rssservice).

## How to use it

You can import the rss block in your volto theme in this way:

```javascript
import { rssBlock } from 'volto-rss-block';
```

Then add it in customBlock variable

```javascript
const customBlocks = {
  ...otherRegisteredBlocks
  rssBlock,
};
```

finally export it in blocks variable:

```javascript
export const blocks = {
  ...defaultBlocks,
  blocksConfig: { ...defaultBlocks.blocksConfig, ...customBlocks },
  groupBlocksOrder: defaultBlocks.groupBlocksOrder.concat(customBlocksOrder),
};
```

You can also add custom templates like this:

```javascript
import { rssBlock as customRssBlock } from 'volto-rss-block';

const rssBlock = {
  ...customRssBlock,
  templates: {
    ...customRssBlock.templates,
    card_without_image: {
      label: 'Card template with image ',
      template: CardWithImageRssTemplate,
    },
    card_with_image: {
      label: 'Card template without image',
      template: CardWithoutImageRssTemplate,
    },
  },
};
```
