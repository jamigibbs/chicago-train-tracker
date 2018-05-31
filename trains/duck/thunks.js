import axios from 'axios'
import actions from './actions'
import { decode } from '../../utils'
import app from '../../app.json';

const gotRedLineRouteFromGoogle = actions.gotRedLineRouteFromGoogle

const fetchRedLineRoute = () => {
  const API_KEY = app.expo.ios.config.googleMapsApiKey
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

export default {
  gotRedLineRouteFromGoogle,
  fetchRedLineRoute
}
