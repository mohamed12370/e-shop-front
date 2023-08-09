import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootRudcer from './reducers/rootRudcer';

// const initailState = {};
// const middleWarw = [thunk];

const store = createStore(rootRudcer, applyMiddleware(thunk));

export default store;
