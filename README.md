
## How to use it

You can import the rss block in your volto theme in this way:


    import { rssBlock as customRssBlock } from 'volto-rss-block';


Then add it in customBlock variable


    const customBlocks = {
     ...otherRegisteredBlocks
     rssBlock,
    };

finally export it in blocks variable:


    export const blocks = {
      ...defaultBlocks,
      blocksConfig: { ...defaultBlocks.blocksConfig, ...customBlocks },
      groupBlocksOrder: defaultBlocks.groupBlocksOrder.concat(customBlocksOrder),
    };

You can also add custom templates like this:


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
      }
    }




