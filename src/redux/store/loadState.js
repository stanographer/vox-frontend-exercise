// Import initial data.
import { initialState } from '../../data';

export const loadState = () => {

  // Using try-catch block in case privacy settings prevent localstorage access.
  try {

    // Try to grab from localstorage API via a key.
    const unSerializedState = localStorage.getItem('state');

    console.log('serialized', JSON.parse(unSerializedState));

    if (!unSerializedState || {}) {
      console.info('no (saved) local state found; handing you default instead!');
      return initialState;
    }

    return JSON.parse(unSerializedState);
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