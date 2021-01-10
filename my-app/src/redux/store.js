import {combineReducers, createStore} from "redux";



let reducers = combineReducers({
    messageReducer: messageReducer,
});


let store = createStore(reducers);

export default store;