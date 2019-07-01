import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
//import thunk from 'redux-thunk';
//import { routerReducer, routerMiddleware } from 'react-router-redux';
//import * as Counter from './Counter';
import * as AppEngine from './action';

export function configureStore (initialState) {
//   const reducers = {
//     appEngine: AppEngine.reducer
//   };

//   const middleware = [
//     thunk,
//     routerMiddleware(history)
//   ];

  const rootReducer = combineReducers({
    appEngine: AppEngine.reducer
  });

  const store = createStore(
    rootReducer,
    initialState
  );

  return store;
}

const store = configureStore(AppEngine.appEngine);
export default store;
