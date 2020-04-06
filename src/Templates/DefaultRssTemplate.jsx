import React from 'react';
import PropTypes from 'prop-types';
import { useIntl, defineMessages } from 'react-intl';
import moment from 'moment';

const messages = defineMessages({
  readMore: { id: 'rss_read_more', defaultMessage: 'Read more' },
  noResults: {
    id: 'rss_no_results',
    defaultMessage: 'No results from RSS feed.',
  },
});

const CardWithoutImageRssTemplate = ({ items }) => {
  const intl = useIntl();

  return (
    <div className="row">
      {items?.length > 0 ? (
        items.map(item => (
          <div className="col-12 col-lg-3">
            <div className="card-wrapper">
              <div className="card">
                <div className="card-body">
                  <div className="category-top">
                    {item?.categories?.length > 0 ? (
                      <span className="category">{item.categories[0]._}</span>
                    ) : null}
                    <span className="data">
                      {moment(item.pubDate).format('LL')}
                    </span>
                  </div>
                  <h5 className="big-heading card-title">{item.title}</h5>
                  <p className="text-serif card-text">{item.contentSnippet}</p>
                </div>
                <a className="read-more" href={item?.link}>
                  <span className="text">
                    {intl.formatMessage(messages.readMore)}
                  </span>
                </a>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="no-rss-feed-results">
          {intl.formatMessage(messages.noResults)}
        </div>
      )}
    </div>
  );
};
CardWithoutImageRssTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default CardWithoutImageRssTemplate;
