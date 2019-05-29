import * as ACTIONTYPE from '../constants';

// Add a story to the live feed.
export const addToLive = payload => {
  return {
    type: ACTIONTYPE.ADD_TO_LIVE,
    payload,
  };
};

// Remove a story from the live feed.
export const removeFromLive = payload => {
  return {
    type: ACTIONTYPE.REMOVE_FROM_LIVE,
    payload,
  };
};

// Reorder a story on the live feed.
export const reorderLive = payload => {
  return {
    type: ACTIONTYPE.REORDER_LIVE,
    payload,
  };
};

// Reset all live stories (remove all stories from the live feed).
export const resetAll = () => {
  return {
    type: ACTIONTYPE.RESET_ALL_LIVE,
    payload: null,
  };
};