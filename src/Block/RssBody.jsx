import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Parser from 'rss-parser';
import config from '@plone/volto/registry';

const baseUrl = () => {
  let apiPath;
  if (config.settings.internalApiPath && __SERVER__) {
    apiPath = config.settings.internalApiPath;
  } else if (__DEVELOPMENT__ && config.settings.devProxyToApiPath) {
    apiPath = config.settings.devProxyToApiPath;
  } else {
    apiPath = config.settings.apiPath;
  }
  return apiPath;
};

const RssBody = ({ data, isEditMode }) => {
  const [feedItems, setFeedItems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let parser = new Parser();
    setFeedItems([]);
    if (data?.feed?.length > 0) {
      let base_url = baseUrl();
      parser.parseURL(
        base_url + '/@get_rss_feed?feed=' + encodeURIComponent(data.feed),
        function (err, feed) {
          setLoading(false);
          if (err) throw err;
          setFeedItems(feed.items.slice(0, data?.feedItemNumber));
        },
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.feed, data?.feedItemNumber]);

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
