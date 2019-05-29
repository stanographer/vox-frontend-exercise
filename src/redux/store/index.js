import { createStore } from 'redux';
import rootReducer from '../reducers';

const initialState = {
  stories: [
    {
      id: 0,
      title: 'Must go faster... go, go, go, go, go!',
      author: 'David Levinson',
      publishedTime: new Date(2019, 3, 12, 8, 55),
      img: 'https://www.fillmurray.com/300/300',
      liveOrder: null,
    },
    {
      id: 1,
      title: 'Is this my espresso machine?',
      author: 'Alistair Hennessey',
      publishedTime: new Date(2019, 2, 23, 13, 5),
      img: 'https://www.fillmurray.com/300/300',
      liveOrder: null,
    },
    {
      id: 2,
      title: 'What do they got in there? King Kong?',
      author: 'Dr. Ian Malcolm',
      publishedTime: new Date(2019, 2, 12, 11, 35),
      img: 'https://www.fillmurray.com/300/300',
      liveOrder: null,
    },
    {
      id: 3,
      title: 'So you two dig up, dig up dinosaurs?',
      author: 'Dr. Ian Malcolm',
      publishedTime: new Date(2019, 2, 2, 12, 5),
      img: 'https://www.fillmurray.com/300/300',
      liveOrder: null,
    },
    {
      id: 4,
      title: 'You really think you can fly that thing?',
      author: 'David Levinson',
      publishedTime: new Date(2019, 1, 2, 10, 5),
      img: 'https://www.fillmurray.com/300/300',
      liveOrder: null,
    },
  ],
};

const store = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;