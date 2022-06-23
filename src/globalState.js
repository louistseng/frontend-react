import { createGlobalState } from 'react-hooks-global-state';

export default createGlobalState({
  me: null,
  cart: [],
  ts: 0,
});
