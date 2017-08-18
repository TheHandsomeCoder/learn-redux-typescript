
import reducers from './reducers';
import comments from './data/comments';
import posts from './data/posts';
import { createStore,  applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import {   routerMiddleware,  } from 'react-router-redux';
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

const defaultState = {
    posts,
    comments
};

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(reducers, defaultState, composeEnhancers(applyMiddleware(middleware)));

export default store;
export { history };