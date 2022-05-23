import React from 'react';
import PropTypes from 'prop-types';
import { useIntl, defineMessages } from 'react-intl';
import { Card, Button } from 'semantic-ui-react';
import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';
import './defaultRssTemplate.css';

const messages = defineMessages({
  readMore: { id: 'rss_read_more', defaultMessage: 'Read more' },
  noResults: {
    id: 'rss_no_results',
    defaultMessage: 'No results from RSS feed.',
  },
});

const DefaultRSSTemplate = ({ items = [], data = {}, moment: Moment }) => {
  const intl = useIntl();
  const moment = Moment.default;
  moment.locale(intl.locale);

  return (
    <div className="default-rss-template">
      {items?.length > 0 ? (
        <>
          {data.title && <h2>{data.title}</h2>}
          <Card.Group itemsPerRow={4}>
            {items.map((item) => (
              <Card
                header={
                  <>
                    <a
                      href={item.link ?? '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <h3>{item.title}</h3>
                    </a>
                    {item.source && <div className="source">{item.source}</div>}
                  </>
                }
                description={item.contentSnippet}
                image={item.enclosure?.url ?? null}
                extra={
                  <div>
                    {(item.pubDate || item.date) && (
                      <span className="date">
                        {moment(item.pubDate || item.date).format('LL')}
                      </span>
                    )}
                    <Button
                      size="mini"
                      floated="right"
                      href={item.link ?? '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {intl.formatMessage(messages.readMore)}
                    </Button>
                  </div>
                }
                meta={
                  item?.categories?.length > 0 ? item.categories[0]._ : null
                }
              />
            ))}
          </Card.Group>
          {data.linkMore && data.linkMoreTitle && (
            <div className="read-more">
              <Button as="a" href={data.linkMore} primary>
                {data.linkMoreTitle}
              </Button>
            </div>
          )}
        </>
      ) : data.feed ? (
        <div className="no-rss-feed-results">
          {intl.formatMessage(messages.noResults)}
        </div>
      ) : null}
    </div>
  );
};

DefaultRSSTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default injectLazyLibs(['moment'])(DefaultRSSTemplate);
