import rssSVG from '@plone/volto/icons/rss.svg';
import View from './Block/View.jsx';
import Edit from './Block/Edit.jsx';
import DefaultRSSTemplate from './Templates/DefaultRssTemplate.jsx';

export const rssBlock = {
  id: 'rssBlock',
  title: 'Rss',
  icon: rssSVG,
  group: 'common',
  view: View,
  edit: Edit,
  restricted: false,
  mostUsed: true,
  security: {
    addPermission: [],
    view: [],
  },
  templates: {
    default: { label: 'Default template', template: DefaultRSSTemplate },
  },
};
