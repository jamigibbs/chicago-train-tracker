import axios from 'axios'
import actions from './actions'
import { decode } from '../../utils'
import app from '../../app.json';

const gotRedLineRouteFromGoogle = actions.gotRedLineRouteFromGoogle
const gotBrownLineRouteFromGoogle = actions.gotBrownLineRouteFromGoogle
const gotBlueLineRouteFromGoogle = actions.gotBlueLineRouteFromGoogle

const GOOGLE_DIRECTIONS_URL = 'https://maps.googleapis.com/maps/api/directions/json'
const API_KEY = app.expo.ios.config.googleMapsApiKey
const mode = 'transit'

const fetchRedLineRoute = () => {
  const origin = 'place_id:ChIJY_Cw_xTQD4gRM0qzmGJcCcU'
  const destination = 'place_id:ChIJAxJFPeQlDogRXVsdIvn1WxM';
  const url = `${GOOGLE_DIRECTIONS_URL}?origin=${origin}&destination=${destination}&key=${API_KEY}&mode=${mode}`;

  return async function(dispatch){
    try {
      const { data } = await axios.get(url)
      const decodedData = decode(data.routes[0].overview_polyline.points)
      const action = gotRedLineRouteFromGoogle(decodedData)
      dispatch(action)
    } catch (err) { console.error(err) }
  }
}

const fetchBrownLineRoute = () => {
  const origin = 'place_id:ChIJY5rFa-bND4gRpz7jFktCjns'
  const destination = 'place_id:ChIJU61QZbAsDogRU2ucgL2Me4U'
  const url = `${GOOGLE_DIRECTIONS_URL}?origin=${origin}&destination=${destination}&key=${API_KEY}&mode=${mode}`

  return async function(dispatch) {
    try {
      const { data } = await axios.get(url)
      const decodedData = decode(data.routes[0].overview_polyline.points)
      const action = gotBrownLineRouteFromGoogle(decodedData)
      dispatch(action)
    } catch (err) { console.error(err) }
  }
}

const fetchBlueLineRoute = () => {
  const origin = 'place_id:EiYxMDAwIE9oYXJlIFdheSwgQ2hpY2FnbywgSUwgNjA2NjYsIFVTQQ'
  const destination = 'place_id:ChIJ611X0sEsDogRlHYw4Mv92JM'
  const url = `${GOOGLE_DIRECTIONS_URL}?origin=${origin}&destination=${destination}&key=${API_KEY}&mode=${mode}`

  return async function(dispatch) {
    try {
      const { data } = await axios.get(url)
      const decodedData = decode(data.routes[0].overview_polyline.points)
      const action = gotBlueLineRouteFromGoogle(decodedData)
      dispatch(action)
    } catch (err) { console.error(err) }
  }
}

export default {
  gotRedLineRouteFromGoogle,
  gotBrownLineRouteFromGoogle,
  gotBlueLineRouteFromGoogle,
  fetchRedLineRoute,
  fetchBrownLineRoute,
  fetchBlueLineRoute
}
