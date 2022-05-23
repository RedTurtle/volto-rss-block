import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grid, Form } from 'semantic-ui-react';
import { defineMessages, useIntl } from 'react-intl';

import { injectLazyLibs } from '@plone/volto/helpers/Loadable/Loadable';
import {
  Option,
  DropdownIndicator,
  selectTheme,
  customSelectStyles,
} from '@plone/volto/components/manage/Widgets/SelectStyling';
import config from '@plone/volto/registry';

const messages = defineMessages({
  Template: {
    id: 'Template',
    defaultMessage: 'Template',
  },
});

const TemplateWidget = ({ data, block, onChangeBlock, reactSelect }) => {
  const intl = useIntl();
  const Select = reactSelect.default;

  const templatesConfig = config.blocks.blocksConfig.rssBlock?.templates;
  const template = data.template || 'default';

  useEffect(() => {
    if (!data.template) {
      onChangeBlock(block, {
        ...data,
        template: template,
      });
    }
  }, []);

  if (templatesConfig && Object.keys(templatesConfig).length > 1) {
    return (
      <Form.Field inline required={true} id="field-template">
        <Grid>
          <Grid.Row stretched>
            <Grid.Column width="4">
              <div className="wrapper">
                <label htmlFor="select-listingblock-template">
                  {intl.formatMessage(messages.Template)}
                </label>
              </div>
            </Grid.Column>
            <Grid.Column width="8">
              <Select
                id="select-listingblock-template"
                name="select-listingblock-template"
                className="react-select-container"
                classNamePrefix="react-select"
                options={Object.keys(templatesConfig).map((key) => {
                  return {
                    value: key,
                    ...templatesConfig[key],
                  };
                })}
                styles={customSelectStyles}
                theme={selectTheme}
                components={{ DropdownIndicator, Option }}
                value={{
                  value: template,
                  label: templatesConfig[template].label,
                }}
                onChange={(field) => {
                  onChangeBlock(block, {
                    ...data,
                    template: field.value,
                  });
                }}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Form.Field>
    );
  }

  return <></>;
};

TemplateWidget.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
  block: PropTypes.string.isRequired,
  onChangeBlock: PropTypes.func.isRequired,
};

export default injectLazyLibs('reactSelect')(TemplateWidget);
