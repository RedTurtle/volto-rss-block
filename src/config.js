import { blocks as defaultBlocks } from '@plone/volto/config';

import rssSVG from '@plone/volto/icons/rss.svg';
import RssView from 'volto-rss-block/Block/RSS/View';
import RssEdit from 'volto-rss-block/components/DesignTheme/Block/RSS/Edit';
import DefaultRSSTemplate from 'volto-rss-block/Templates/DefaultRssTemplate';
import ImageRssTemplate from 'volto-rss-block/Templates/ImageRssTemplate';

const customBlocks = {
  rssBlock: {
    id: 'RssBlock',
    title: 'Rss',
    icon: rssSVG,
    group: 'common',
    view: RssView,
    edit: RssEdit,
    restricted: false,
    mostUsed: true,
    security: {
      addPermission: [],
      view: [],
    },
    templates: {
      default: { label: 'Default', template: DefaultRSSTemplate },
      with_image: { label: 'Template with image', template: ImageRssTemplate },
    },
  },
};

export const blocks = {
  ...defaultBlocks,
  blocksConfig: { ...defaultBlocks.blocksConfig, ...customBlocks },
};
