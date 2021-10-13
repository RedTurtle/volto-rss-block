export const GET_RSS_MIXER_DATA = 'GET_RSS_MIXER_DATA';

/**
 * getRSSMixerData function
 * @function getRSSMixerData
 * @param {string} path
 * @param {Object} data
 */
export function getRSSMixerData(data, subrequest) {
  return {
    type: GET_RSS_MIXER_DATA,
    subrequest,
    request: {
      op: 'post',
      path: '/@rss_mixer_data',
      data,
    },
  };
}
