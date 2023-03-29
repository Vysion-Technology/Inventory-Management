import {createStore,combineReducers,applyMiddleware } from 'redux';
import {getItemReducer} from './reducer/itemReducer';
import thunk from 'redux-thunk';
import {composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
    getItems: getItemReducer
})
const middleware = [thunk];
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;