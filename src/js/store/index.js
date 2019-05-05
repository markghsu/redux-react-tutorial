import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/index';
import { forbiddenWordsMiddleware } from '../middleware/index';
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga';
import apiSaga from '../sagas/api-saga';

const initializeSagaMiddleware = createSagaMiddleware();

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//STORE HOLDS ALL STATE FOR AN APPLICATION.
const store = createStore(rootReducer,
	storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, thunk, initializeSagaMiddleware))
);//CREATE A STORE USING OUR REDUCER

initializeSagaMiddleware.run(apiSaga);
export default store;