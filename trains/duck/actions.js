import types from './types'

const gotRedLineRouteFromGoogle = (routes) => {
  return {
    type: types.GOT_RED_LINE_ROUTE,
    routes
  }
}

const gotBrownLineRouteFromGoogle = (routes) => {
  return {
    type: types.GOT_BROWN_LINE_ROUTE,
    routes
  }
}

const toggleTrainRouteView = (color, bool) => {
  return {
    type: types.TOGGLED_TRAIN_ROUTE,
    color,
    bool
  }
}

export default {
  gotRedLineRouteFromGoogle,
  gotBrownLineRouteFromGoogle,
  toggleTrainRouteView
}
