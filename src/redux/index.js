import store from './store';
import {
  addToLive,
  removeFromLive,
  reorderLive,
  resetAll,
} from './actions';

window.store = store;
window.addToLive = addToLive;
window.removeFromLive = removeFromLive;
window.reorderLive = reorderLive;
window.resetAll = resetAll;