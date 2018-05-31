import types from './types'

const gotRedLineRouteFromGoogle = (routes) => {
  return {
    type: types.GOT_RED_LINE_ROUTE,
    routes
  }
}

export default {
  gotRedLineRouteFromGoogle
}
