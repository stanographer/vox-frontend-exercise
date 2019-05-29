import * as ACTIONTYPES from '../constants';

const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTIONTYPES.ADD_TO_LIVE:
      return {
        ...state,
        liveOrder: action.payload,
      };
    case ACTIONTYPES.REMOVE_FROM_LIVE:
      return {
        ...state,
        liveOrder: null,
      };
    case ACTIONTYPES.REORDER_LIVE:
      return {
        ...state,
        liveOrder: action.payload,
      };
      // To-do: Reset all stories.
    case ACTIONTYPES.RESET_ALL_LIVE:
      return {
        ...state
      };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;