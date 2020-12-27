import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from 'redux-saga'
import { CatsState } from './ducks/cats/state';
import {rootReducer} from './rootReducer';
import rootSaga from './saga';


// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga);


export interface RootState {
    cats: CatsState
}