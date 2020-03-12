import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import moment from 'moment';

const CardWithoutImageRssTemplate = ({ item }) => {
    return (
        <div className="col-12 col-lg-3">
            <div className="card-wrapper">
                <div className="card">
                    <div className="card-body">
                        <div class="category-top">
                            {item.categories.length > 0 ? (
                                <a class="category">
                                    {item.categories[0]._}
                                </a>
                            ) : ''
                            }
                            <span class="data">{moment(item.pubDate).format('DD-MMM-Y')}</span>
                        </div>
                        <h5 class="big-heading card-title">{item.title}</h5>
                        <p class="text-serif card-text">{item.contentSnippet}</p>
                    </div>
                    <a class="read-more" href={item?.link}>
                        <span class="text">Leggi di più</span>
                    </a>
                </div>
            </div>
        </div >
    );
};
CardWithoutImageRssTemplate.propTypes = {
    item: PropTypes.object,
};

export default injectIntl(CardWithoutImageRssTemplate);
