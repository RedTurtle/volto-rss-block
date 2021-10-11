import { GET_RSS_FROM_BLOCK } from '../actions';

const initialState = {
  error: null,
  loaded: false,
  loading: false,
  subrequests: {},
};

function getRequestKey(actionType) {
  return actionType.split('_')[0].toLowerCase();
}

/**
 * getRssFromBlock reducer.
 * @function submitForm
 * @param {Object} state Current state.
 * @param {Object} action Action to be handled.
 * @returns {Object} New state.
 */

export const rssFromBlockReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case `${GET_RSS_FROM_BLOCK}_PENDING`:
      return action.subrequest
        ? {
            ...state,
            subrequests: {
              ...state.subrequests,
              [action.subrequest]: {
                ...(state.subrequests[action.subrequest] || {
                  data: null,
                }),
                loaded: false,
                loading: true,
                error: null,
              },
            },
          }
        : {
            ...state,
            [getRequestKey(action.type)]: {
              loading: true,
              loaded: false,
              error: null,
            },
          };
    case `${GET_RSS_FROM_BLOCK}_SUCCESS`:
      return action.subrequest
        ? {
            ...state,
            subrequests: {
              ...state.subrequests,
              [action.subrequest]: {
                loading: false,
                loaded: true,
                error: null,
              },
            },
          }
        : {
            ...state,
            [getRequestKey(action.type)]: {
              loading: false,
              loaded: true,
              error: null,
            },
          };
    case `${GET_RSS_FROM_BLOCK}_FAIL`:
      return action.subrequest
        ? {
            ...state,
            subrequests: {
              ...state.subrequests,
              [action.subrequest]: {
                data: null,
                loading: false,
                loaded: false,
                error: action.error,
              },
            },
          }
        : {
            ...state,
            data: null,
            [getRequestKey(action.type)]: {
              loading: false,
              loaded: false,
              error: action.error,
            },
          };

    default:
      return state;
  }
};
