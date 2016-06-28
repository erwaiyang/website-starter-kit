import { createStore } from 'redux';

const store = createStore(
  window.devToolsExtension ? window.devToolsExtension() : undefined
);

export default store;
