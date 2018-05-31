import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import types from './types'

const redLineReducer = (state = [], action) => {
  switch (action.type) {
    case types.GOT_RED_LINE_ROUTE:
      return action.routes
    default:
      return state
  }
}

const reducer = combineReducers({
  redLineRoute: redLineReducer
})

export default reducer
