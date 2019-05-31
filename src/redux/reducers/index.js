import * as ACTIONTYPES from '../constants';

const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTIONTYPES.ADD_TO_LIVE:
      console.log('save state!', action.payload);
      return {
        ...state,
        columns: action.payload.columns,
      };
    case ACTIONTYPES.REMOVE_FROM_LIVE:
      return {
        ...state,
        liveOrder: null,
      };
    case ACTIONTYPES.REORDER_LIVE:
      return {
        ...state,
        columns: action.payload.columns,
      };
      // To-do: Reset all stories in application state.
    case ACTIONTYPES.RESET_ALL_LIVE:
      return {
        state: null,
      };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;