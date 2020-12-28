import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';
import { defineMessages, useIntl } from 'react-intl';
import { TextWidget } from '@plone/volto/components';
import UrlWidget from '@plone/volto/components/manage/Widgets/UrlWidget';
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
  linkMore: {
    id: 'linkMore',
    defaultMessage: 'Link more',
  },
  linkMoreTitle: {
    id: 'linkMoreTitle',
    defaultMessage: 'Title for link more',
  },
});

const RssSidebar = ({ data, block, onChangeBlock, required = false }) => {
  const intl = useIntl();

  useEffect(() => {
    if (!data.feedItemNumber) {
      onChangeBlock(block, {
        ...data,
        feedItemNumber: 10,
      });
    }
  }, []);

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
          id="feed"
          title={intl.formatMessage(messages.RssFeedURL)}
          required={true}
          value={data.feed || ''}
          onChange={(name, value) => {
            onChangeBlock(block, {
              ...data,
              [name]: value,
            });
          }}
        />
        <TextWidget
          id="feedItemNumber"
          title={intl.formatMessage(messages.RssFeedItemNumber)}
          required={true}
          value={data.feedItemNumber}
          onChange={(name, value) => {
            onChangeBlock(block, {
              ...data,
              [name]: value,
            });
          }}
        />
      </Segment>
      <Segment>
        <TextWidget
          id="linkMoreTitle"
          title={intl.formatMessage(messages.linkMoreTitle)}
          required={false}
          value={data.linkMoreTitle || ''}
          onChange={(name, value) => {
            onChangeBlock(block, {
              ...data,
              [name]: value,
            });
          }}
        />

        <UrlWidget
          id="linkMore"
          title={intl.formatMessage(messages.linkMore)}
          required={false}
          value={data.linkMore}
          onChange={(name, value) => {
            onChangeBlock(block, {
              ...data,
              [name]: value,
            });
          }}
        />
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
