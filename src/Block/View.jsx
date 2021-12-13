import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import RssBody from '@italia/addons/volto-rss-block/Block/RssBody';

const View = ({ data, properties, block, path }) => {
  return (
    <div className={cx('block rssBlock', data.template)}>
      <RssBody data={data} properties={properties} block={block} path={path} />
    </div>
  );
};

View.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  properties: PropTypes.objectOf(PropTypes.any).isRequired,
  block: PropTypes.string,
  path: PropTypes.string,
};

export default View;
