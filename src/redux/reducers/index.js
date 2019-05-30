import * as ACTIONTYPES from '../constants';

const rootReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTIONTYPES.ADD_TO_LIVE:
      const storyArr = state.stories;

      console.log('state!', storyArr);
      return storyArr.map((item, idx) => {
        console.log(item, idx, );
        if (idx === Number(action.payload.story)) {
          return {
            liveOrder: action.payload.story,
          };
        }
      });
    case ACTIONTYPES.REMOVE_FROM_LIVE:
      return {
        ...state,
        liveOrder: null,
      };
    case ACTIONTYPES.REORDER_LIVE:
      console.log('pay load', action.payload);
      return {
        ...state,
        liveOrder: action.payload,
      };
      // To-do: Reset all stories.
    case ACTIONTYPES.RESET_ALL_LIVE:
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;