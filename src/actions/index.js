export const GET_RSS_MIXER_DATA = 'GET_RSS_MIXER_DATA';

/**
 * getRSSMixerData function
 * @function getRSSMixerData
 * @param {string} path
 * @param {Object} data
 */
export function getRSSMixerData(data, block, pathname = '') {
  return {
    type: GET_RSS_MIXER_DATA,
    subrequest: block,
    request: {
      op: 'get',
      path: pathname.replace('/edit', '') + '/@rss_mixer_data',
      params: { block },
    },
  };
}
