import {createStore,combineReducers,applyMiddleware} from 'redux'
import registerReducer from './register/registerReducer';
import loginReducer from './login/loginReducer';
import blogReducer from './blog/blogReducer';
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    loginReducer: loginReducer,
    registerReducer: registerReducer,
    blogReducer:blogReducer
    });
const store= createStore(rootReducer,applyMiddleware(thunk))
const unsub=store.subscribe(rootReducer)
unsub();
export default store;
