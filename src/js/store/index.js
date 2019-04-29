import { createStore } from 'redux';
import rootReducer from '../reducers/index';

//STORE HOLDS ALL STATE FOR AN APPLICATION.
const store = createStore(rootReducer);//CREATE A STORE USING OUR REDUCER

export default store;