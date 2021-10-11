export const GET_RSS_FROM_BLOCK = 'GET_RSS_FROM_BLOCK';

/**
 * getRSSFromBlock function
 * @function getRSSFromBlock
 * @param {string} path
 * @param {Object} data
 */
export function getRSSFromBlock(data, subrequest) {
  return {
    type: GET_RSS_FROM_BLOCK,
    subrequest,
    request: {
      op: 'post',
      path: '/@get_rss_from_block',
      data,
    },
  };
}
