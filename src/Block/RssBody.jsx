import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Parser from 'rss-parser';
import config from '@plone/volto/registry';

const RssBody = ({ data, isEditMode }) => {
  const [feedItems, setFeedItems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let parser = new Parser();
    setFeedItems([]);
    if (data?.feed?.length > 0) {
      let base_url = config.settings.apiPath;
      parser.parseURL(base_url + '/@get_rss_feed?feed=' + data.feed, function (
        err,
        feed,
      ) {
        setLoading(false);
        if (err) throw err;
        setFeedItems(feed.items.slice(0, data?.feedItemNumber));
      });
    }
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
