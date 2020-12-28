import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Segment, Form, Grid } from 'semantic-ui-react';
import { defineMessages, useIntl } from 'react-intl';
import { TextWidget } from '@plone/volto/components';
import aheadSVG from '@plone/volto/icons/ahead.svg';
import { Button } from 'semantic-ui-react';
import { Icon } from '@plone/volto/components';
import RssStyle from './RssStyle';

const messages = defineMessages({
  RssFeed: {
    id: 'RssFeed',
    defaultMessage: 'RSS Feed',
  },
  title: {
    id: 'title',
    defaultMessage: 'Title',
  },
  RssFeedURL: {
    id: 'RssFeed Url',
    defaultMessage: 'RSS Feed URL',
  },
  setrss: {
    id: 'setrss',
    defaultMessage: 'Set RSS feed',
  },
  RssFeedItemNumber: {
    id: 'RssFeedItemNumber',
    defaultMessage: 'Number of items to show',
  },
});

const RssSidebar = ({ data, block, onChangeBlock, required = false }) => {
  const intl = useIntl();

  const [feed, setFeed] = useState(data.feed || '');
  const [feedItemNumber, setFeedItemNumber] = useState(
    data.feedItemNumber || 10,
  );
  return (
    <Segment.Group raised>
      <header className="header pulled">
        <h2>{intl.formatMessage(messages.RssFeed)}</h2>
      </header>

      <Segment>
        <TextWidget
          id="title"
          title={intl.formatMessage(messages.title)}
          required={false}
          value={data.title}
          onChange={(name, value) => {
            onChangeBlock(block, {
              ...data,
              [name]: value,
            });
          }}
        />
        <RssStyle data={data} block={block} onChangeBlock={onChangeBlock} />
      </Segment>
      <Segment>
        <TextWidget
          id="RssFeed"
          title={intl.formatMessage(messages.RssFeedURL)}
          required={true}
          value={feed}
          onChange={(name, value) => {
            setFeed(value);
          }}
        />
        <TextWidget
          id="RssFeedItemNumber"
          title={intl.formatMessage(messages.RssFeedItemNumber)}
          required={true}
          value={feedItemNumber}
          onChange={(name, value) => {
            setFeedItemNumber(value);
          }}
        />

        <Form.Field inline>
          <Grid>
            <Grid.Row stretched>
              <Grid.Column width="12" textAlign="right" floated="right">
                <Button
                  basic
                  primary
                  floated="right"
                  type="submit"
                  id="rss-form-submit"
                  aria-label={intl.formatMessage(messages.setrss)}
                  title={intl.formatMessage(messages.setrss)}
                  onClick={() => {
                    onChangeBlock(block, {
                      ...data,
                      template,
                      feed,
                      feedItemNumber,
                    });
                  }}
                >
                  <Icon className="circled" name={aheadSVG} size="30px" />
                </Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Form.Field>
      </Segment>
    </Segment.Group>
  );
};

RssSidebar.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  block: PropTypes.string.isRequired,
  onChangeBlock: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

export default RssSidebar;
