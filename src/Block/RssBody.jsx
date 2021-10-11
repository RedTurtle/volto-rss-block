import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';
import config from '@plone/volto/registry';
import { getRSSFromBlock } from 'volto-rss-block';

const RssBody = ({ block, data, isEditMode }) => {
  const dispatch = useDispatch();
  const feedItems = useSelector((state) => state.rssFromBlock.data);
  const loading = useSelector((state) => state.rssFromBlock.loading);
  const loaded = useSelector((state) => state.rssFromBlock.loaded);

  useEffect(() => {
    if (!loading && (isEditMode || (!isEditMode && !loaded))) {
      if (data.feeds?.filter((f) => f.url?.length > 0)?.length > 0) {
        dispatch(getRSSFromBlock(data, block));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.feeds]);

  const templateConfig = config.blocks.blocksConfig.rssBlock.templates;

  let templateName =
    data.template && !!templateConfig[data.template]
      ? data.template
      : 'default';

  const Template = templateConfig[templateName].template;
  const SkeletonTemplate = templateConfig[templateName].skeleton;

  const showSkeleton = SkeletonTemplate != null && loading;

  return showSkeleton ? (
    <SkeletonTemplate isEditMode={isEditMode} data={data} />
  ) : (
    <Template items={feedItems} isEditMode={isEditMode} data={data} />
  );
};

RssBody.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default RssBody;
