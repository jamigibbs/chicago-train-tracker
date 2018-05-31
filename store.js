import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import trainReducer from './trains/duck'

const rootReducer = combineReducers({
  trains: trainReducer
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export default store
