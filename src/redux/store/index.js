import { createStore } from 'redux';
import rootReducer from '../reducers';

// Import initial data.
import { initialState } from '../../data';

const store = createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;