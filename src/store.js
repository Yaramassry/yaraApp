import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
//import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from './reducers';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
// import createHistory from 'history/createBrowserHistory';
// const history = createHistory();

const initialState = {};

const middleware = [thunk];
//const routingMiddleware = routerMiddleware(browserHistory);

const routingMiddleware = routerMiddleware(history);
//const routingMiddleware = routerMiddleware(browserHistory);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(
    ///applyMiddleware(...middleware)
    applyMiddleware(...middleware, routingMiddleware)
    // ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
