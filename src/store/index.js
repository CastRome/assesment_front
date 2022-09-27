import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import postsReducer from './reducers/Posts.reducer';

// const logger = (store) => {
//   console.log("Store", store)

//   return (next) => {
//     // next permite pasar al siguiente
//     return (action) => {
//       next(action)
//     }
//   }
// }

const rootReducer = combineReducers({ postsReducer });

const middleware = applyMiddleware(thunk);

export const store = createStore(rootReducer, middleware);

const bar = 'bar';
export default bar;
