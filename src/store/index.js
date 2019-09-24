import { applyMiddleware, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers.js'
let store = createStore(combineReducers({ reducers }), applyMiddleware(thunk))

export default store
