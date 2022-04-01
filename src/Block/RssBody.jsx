import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { useSelector, useDispatch } from 'react-redux';
import config from '@plone/volto/registry';
import { getRSSMixerData } from 'volto-rss-block';

const RssBody = ({ block, data, isEditMode, pathname }) => {
  const dispatch = useDispatch();
  const rssState = useSelector(
    (state) => state.rssMixerData?.subrequests[block],
  );
  const feedItems = rssState?.data;
  const loading = rssState?.loading;
  const loaded = rssState?.loaded;

  useEffect(() => {
    if (!loading && (isEditMode || (!isEditMode && !loaded))) {
      if (data.feeds?.filter((f) => f.url?.length > 0)?.length > 0) {
        dispatch(getRSSMixerData(data, block, pathname));
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.feeds, data.limit]);

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
