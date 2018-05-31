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

const initialRouteState = {
  red: false,
  brown: false,
  purple: false
}

const toggleTrainRouteReducer = (state = initialRouteState, action) => {
  switch (action.type) {
    case types.TOGGLED_TRAIN_ROUTE:
      return {...state, [action.color]: action.bool}
    default:
      return state
  }
}

const reducer = combineReducers({
  redLineRoute: redLineReducer,
  routeToggle: toggleTrainRouteReducer
})

export default reducer
