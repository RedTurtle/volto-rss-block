import rssSVG from '@plone/volto/icons/rss.svg';
import RssView from './Block/View';
import RssEdit from './Block/Edit';
import DefaultRSSTemplate from './Templates/DefaultRssTemplate';

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
}
