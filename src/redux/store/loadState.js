// Import initial data.
import { initialState } from '../../data';

export const loadState = () => {

  // Using try-catch block in case privacy settings prevent localstorage access.
  try {
    const serializedState = localStorage.getItem('state');

    if (serializedState === undefined || {}) {
      console.info('no (saved) local state found; handing you default instead!');
      return initialState;
    }

    console.log('serialized', JSON.parse(serializedState));

    return JSON.parse(serializedState);
  } catch (err) {
    console.error('There was an error retrieving your state from localstorage!');
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.error('There was an error saving your state to localstorage!');
  }
};