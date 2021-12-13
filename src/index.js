import rssSVG from '@plone/volto/icons/rss.svg';
import RssView from '@italia/addons/volto-rss-block/Block/View';
import RssEdit from '@italia/addons/volto-rss-block/Block/Edit';
import DefaultRSSTemplate from '@italia/addons/volto-rss-block/Templates/DefaultRssTemplate';

export const rssBlock = {
  id: 'rssBlock',
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
    default: { label: 'Default template', template: DefaultRSSTemplate },
  },
  sidebarTab: 1,
};

export default (config) => {
  config.blocks.blocksConfig = {
    ...config.blocks.blocksConfig,
    rssBlock,
  };

  return config;
};
