import React from 'react';
import PropTypes from 'prop-types';
import { useIntl, defineMessages } from 'react-intl';
import { Card, Button } from 'semantic-ui-react';
import moment from 'moment';

const messages = defineMessages({
  readMore: { id: 'rss_read_more', defaultMessage: 'Read more' },
  noResults: {
    id: 'rss_no_results',
    defaultMessage: 'No results from RSS feed.',
  },
});

const DefaultRSSTemplate = ({ items = [] }) => {
  const intl = useIntl();

  return (
    <Card.Group>
      {items?.length > 0 ? (
        items.map(item => (
          <Card
            header={
              <a href={item.link ?? '#'}>
                <h3 style={{ marginTop: 0 }}>{item.title}</h3>
              </a>
            }
            description={item.contentSnippet}
            extra={
              <div>
                {item.pubDate && (
                  <span className="date">
                    {moment(item.pubDate).format('LL')}
                  </span>
                )}
                <Button size="mini" floated="right" href={item.link ?? '#'}>
                  {intl.formatMessage(messages.readMore)}
                </Button>
              </div>
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
