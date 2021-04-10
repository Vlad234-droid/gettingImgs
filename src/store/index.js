/* eslint-disable import/prefer-default-export */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { MODULE_NAME as imgInfoModule, reducer as imgInfoReducer } from './imgToRender/reducer';

const rootReducer = combineReducers({
  [imgInfoModule]: imgInfoReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))