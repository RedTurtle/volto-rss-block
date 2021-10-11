import React from 'react';
import PropTypes from 'prop-types';
import TemplateWidget from './TemplateWidget';
import config from '@plone/volto/registry';

const RssStyle = ({ data, block, onChangeBlock, required = false }) => {
  const templatesConfig = config.blocks.blocksConfig.rssBlock.templates;
  if (templatesConfig && Object.keys(templatesConfig).length > 1) {
    return (
      <>
        <div className="sidebar-listing-data listing-style">
          <TemplateWidget
            data={data}
            block={block}
            onChangeBlock={onChangeBlock}
            required={required}
          />
        </div>
      </>
    );
  }

  return null;
};

RssStyle.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  block: PropTypes.string.isRequired,
  onChangeBlock: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

export default RssStyle;
