import React from 'react';
import PropTypes from 'prop-types';
import { useIntl, defineMessages } from 'react-intl';
import { Card, Button, Grid } from 'semantic-ui-react';
import moment from 'moment';

const messages = defineMessages({
  readMore: { id: 'rss_read_more', defaultMessage: 'Read more' },
  noResults: {
    id: 'rss_no_results',
    defaultMessage: 'No results from RSS feed.',
  },
});

const DefaultRSSTemplate = ({ items = [], data = {} }) => {
  const intl = useIntl();

  return (
    <>
      {items?.length > 0 ? (
        <>
          <Card.Group>
            {data.title && <h2>{data.title}</h2>}
            {items.map((item) => (
              <Card
                header={
                  <a
                    href={item.link ?? '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3 style={{ marginTop: 0 }}>{item.title}</h3>
                  </a>
                }
                description={item.contentSnippet}
                image={item.enclosure?.url ?? null}
                extra={
                  <div>
                    {(item.pubDate || item.date) && (
                      <span className="date">
                        {moment(item.pubDate || item.date)
                          .locale(intl.locale)
                          .format('LL')}
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
            <Grid>
              <Grid.Row>
                <Grid.Col textAlign="center">
                  <Button as="a" href={data.linkMore}>
                    {data.linkMoreTitle}
                  </Button>
                </Grid.Col>
              </Grid.Row>
            </Grid>
          )}
        </>
      ) : data.feed ? (
        <div className="no-rss-feed-results">
          {intl.formatMessage(messages.noResults)}
        </div>
      ) : null}
    </>
  );
};

DefaultRSSTemplate.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};

export default DefaultRSSTemplate;
