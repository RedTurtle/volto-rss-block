import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import RssBody from './RssBody';
import { SidebarPortal } from '@plone/volto/components';
import RssSidebar from './RssSidebar';

import { getBaseUrl } from '@plone/volto/helpers';

const Edit = ({
  data,
  onChangeBlock,
  block,
  selected,
  properties,
  pathname,
}) => {
  let feeds = data?.feeds?.filter((f) => f.url?.length > 0) ?? [];

  return (
    <>
      {feeds?.length <= 0 ? (
        <FormattedMessage id="feed_not_set" defaultMessage="No feeds set">
          {(message) => (
            <div className="public-ui">
              <div className="ui message warning">{message}</div>
            </div>
          )}
        </FormattedMessage>
      ) : (
        <>
          <FormattedMessage
            id="RssFeed Url description"
            defaultMessage="To see the set feed, you need to save the content."
          >
            {(message) => (
              <div className="public-ui">
                <div className="ui message warning">{message}</div>
              </div>
            )}
          </FormattedMessage>
          <RssBody
            data={data}
            properties={properties}
            block={block}
            path={getBaseUrl(pathname)}
            isEditMode={true}
            pathname={pathname}
          />
        </>
      )}

      <SidebarPortal selected={selected}>
        <RssSidebar data={data} block={block} onChangeBlock={onChangeBlock} />
      </SidebarPortal>
    </>
  );
};

Edit.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  index: PropTypes.number.isRequired,
  selected: PropTypes.bool.isRequired,
  block: PropTypes.string.isRequired,
  onSelectBlock: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.any),
  properties: PropTypes.objectOf(PropTypes.any).isRequired,
  pathname: PropTypes.string.isRequired,
};

export default Edit;
