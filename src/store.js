import {createStore} from 'redux';
import {hotAndColdReducer} from './reducer/index';

export default createStore(hotAndColdReducer);