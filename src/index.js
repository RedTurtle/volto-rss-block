import rssSVG from '@plone/volto/icons/rss.svg';
import RssView from './Block/View';
import RssEdit from './Block/Edit';
import DefaultRSSTemplate from './Templates/DefaultRssTemplate';
import ImageRssTemplate from './Templates/ImageRssTemplate';

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
    default: { label: 'Default', template: DefaultRSSTemplate },
    with_image: { label: 'Template with image', template: ImageRssTemplate },
  },
};
