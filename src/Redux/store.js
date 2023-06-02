import {legacy_createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import { reducer} from './reducer'

const reduxStore = legacy_createStore(reducer,applyMiddleware(thunk))
export default reduxStore;





