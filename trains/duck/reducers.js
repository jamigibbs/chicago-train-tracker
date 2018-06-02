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

const brownLineReducer = (state = [], action) => {
  switch (action.type) {
    case types.GOT_BROWN_LINE_ROUTE:
      return action.routes
    default:
      return state
  }
}

const blueLineReducer = (state = [], action) => {
  switch (action.type) {
    case types.GOT_BLUE_LINE_ROUTE:
      return action.routes
    default:
      return state
  }
}


const initialRouteState = {
  red: false,
  brown: false,
  blue: false,
  apiCalls: 0
}

const toggleTrainRouteReducer = (state = initialRouteState, action) => {
  switch (action.type) {
    case types.TOGGLED_TRAIN_ROUTE:
      return {...state, [action.color]: action.bool}
    case types.COUNT_GOOGLE_MAPS_API_CALLS:
      return {...state, apiCalls: state.apiCalls + 1}
    default:
      return state
  }
}

const reducer = combineReducers({
  coordinates: combineReducers({
    red: redLineReducer,
    brown: brownLineReducer,
    blue: blueLineReducer
  }),
  routeToggle: toggleTrainRouteReducer
})

export default reducer
