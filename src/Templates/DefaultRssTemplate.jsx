import React from 'react';
import PropTypes from 'prop-types';
import { useIntl, defineMessages } from 'react-intl';
import { Card } from 'semantic-ui-react';
import moment from 'moment';

const messages = defineMessages({
  noResults: {
    id: 'rss_no_results',
    defaultMessage: 'No results from RSS feed.',
  },
});

const DefaultRSSTemplate = ({ items }) => {
  const intl = useIntl();

  return (
    <Card.Group>
      {items?.length > 0 ? (
        items.map(item => (
          <Card
            href={item.link ?? '#'}
            header={item.title}
            description={item.contentSnippet}
            extra={
              <span className="date">{moment(item.pubDate).format('LL')}</span>
            }
            meta={item?.categories?.length > 0 ? item.categories[0]._ : null}
          />
        ))
      ) : (
        <div className="no-rss-feed-results">
          {intl.formatMessage(messages.noResults)}
        </div>
      )}
    </Card.Group>
  );
};

DefaultRSSTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default DefaultRSSTemplate;
