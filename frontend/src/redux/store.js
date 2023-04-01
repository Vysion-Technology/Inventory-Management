import {createStore,combineReducers,applyMiddleware } from 'redux';
import {getItemReducer,usedItemReducer} from './reducer/itemReducer';
import thunk from 'redux-thunk';
import {composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
    getItems: getItemReducer,
    usedItem: usedItemReducer,
})
const middleware = [thunk];
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;