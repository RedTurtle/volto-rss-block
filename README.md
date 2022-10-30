# Volto RSS Block

RSS block for [Volto](https://github.com/plone/volto).

From version 2.1.0 you can aggregate more than one RSS feed.

To be used with mrs-developer, see [Volto docs](https://docs.voltocms.com/customizing/add-ons/) for further usage informations.

This block needs a specific service to be installed on your Plone backend.
See [redturtle.rssservice](https://github.com/RedTurtle/redturtle.rssservice).

## Usage

> If you're using Volto < 12, then use v1.2.0.
>
> If you're using Volto < 16, then use v2.3.2.

> If you're usign volto-rss-block > 2.0.0., the use redturtle.rssservice >= 0.1.1

Load this addon (see <https://docs.voltocms.com/addons/#configuring-a-volto-project-to-use-an-addon>).

You can add custom templates like this:

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
