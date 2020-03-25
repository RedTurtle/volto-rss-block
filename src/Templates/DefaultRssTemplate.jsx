import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, injectIntl } from 'react-intl';
import moment from 'moment';

const messages = defineMessages({
  readMore: {
    id: 'read-more',
    defaultMessage: 'Read more',
  },
});

const CardWithoutImageRssTemplate = ({ intl, item }) => {
  return (
    <div className="col-12 col-lg-3">
      <div className="card-wrapper">
        <div className="card">
          <div className="card-body">
            <div className="category-top">
              {item.categories.length > 0 ? (
                <span className="category">{item.categories[0]._}</span>
              ) : (
                ''
              )}
              <span className="data">
                {moment(item.pubDate).format('DD-MMM-Y')}
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
  );
};
CardWithoutImageRssTemplate.propTypes = {
  item: PropTypes.object,
};

export default injectIntl(CardWithoutImageRssTemplate);
