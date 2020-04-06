import React, { useEffect } from 'react';
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
  useEffect(() => {
    if (!data.feed) {
      onChangeBlock(block, {
        ...data,
        feed: '',
        block,
      });
    }
    /* eslint-disable react-hooks/exhaustive-deps */
  }, []);

  return (
    <>
      {data?.feed?.length ? (
        <FormattedMessage id="feed_set" defaultMessage="Feed set">
          {message => <p className="items-preview">{message}</p>}
        </FormattedMessage>
      ) : (
        <FormattedMessage id="feed_not_set" defaultMessage="No feed set">
          {message => <p className="items-preview">{message}</p>}
        </FormattedMessage>
      )}
      <RssBody
        data={data}
        properties={properties}
        block={block}
        path={getBaseUrl(pathname)}
        isEditMode
      />
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
