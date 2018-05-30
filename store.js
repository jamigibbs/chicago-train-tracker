import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import axios from 'axios'
import { decode } from './utils'

const GOT_RED_LINE_ROUTE = 'GOT_RED_LINE_ROUTE'

const gotRedLineRouteFromGoogle = (routes) => {
  return {
    type: GOT_RED_LINE_ROUTE,
    routes
  }
}

export const fetchRedLineRoute = () => {
  const API_KEY = 'AIzaSyAYTe89LlLWccW24ili2gNNcLGEUAVAy4U'
  const mode = 'transit'
  const origin = 'place_id:ChIJY_Cw_xTQD4gRM0qzmGJcCcU'
  const destination = 'place_id:ChIJAxJFPeQlDogRXVsdIvn1WxM';
  const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${API_KEY}&mode=${mode}`;

  return async function(dispatch){
    try {
      const { data } = await axios.get(url)
      const decodedData = decode(data.routes[0].overview_polyline.points)
      const action = gotRedLineRouteFromGoogle(decodedData)
      dispatch(action)
    } catch (err) { console.error(err) }
  }
}

const initialState = {
  transitRoutes: {
    red: []
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_RED_LINE_ROUTE:
      return {...state, transitRoutes: {red: [action.routes] }}
    default:
      return state
  }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware))
export default store
