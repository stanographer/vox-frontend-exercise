import { createStore } from 'redux';
import rootReducer from '../reducers';
import { loadState, saveState } from './loadState';
import throttle from 'lodash/throttle';

const persistedState = loadState();

const store = createStore(
    rootReducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

store.subscribe(throttle(() => {
  saveState({
    columns: store.getState().columns,
  })
}, 500));

export default store;