import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import RssBody from './RssBody';

const View = ({ data, properties, id, path }) => {
  return (
    <div className={cx('block rssBlock', data.template ?? 'default')}>
      <RssBody data={data} properties={properties} block={id} pathname={path} />
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
