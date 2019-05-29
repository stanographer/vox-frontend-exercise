import * as ACTIONTYPES from '../constants';

const initialState = {
  stories: [
    {
      title: 'Must go faster... go, go, go, go, go!',
      author: 'David Levinson',
      publishedTime: new Date('2019, March, 12, 8, 55'),
      img: 'https://www.fillmurray.com/300/300',
      liveOrder: null,
    },
    {
      title: 'Is this my espresso machine?',
      author: 'Alistair Hennessey',
      publishedTime: new Date('2019, February, 23, 13, 05'),
      img: 'https://www.fillmurray.com/300/300',
      liveOrder: null,
    },
    {
      title: 'What do they got in there? King Kong?',
      author: 'Dr. Ian Malcolm',
      publishedTime: new Date('2019, February, 12, 11, 35'),
      img: 'https://www.fillmurray.com/300/300',
      liveOrder: null,
    },
    {
      title: 'So you two dig up, dig up dinosaurs?',
      author: 'Dr. Ian Malcolm',
      publishedTime: new Date('2019, February, 02, 12, 05'),
      img: 'https://www.fillmurray.com/300/300',
      liveOrder: null,
    },
    {
      title: 'You really think you can fly that thing?',
      author: 'David Levinson',
      publishedTime: new Date('2019, January, 02, 10, 05'),
      img: 'https://www.fillmurray.com/300/300',
      liveOrder: null,
    },
  ],
};

const rootReducer = (state = initialState, action) => {
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
      return state;
  }
};

export default rootReducer;