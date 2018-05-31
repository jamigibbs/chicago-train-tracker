import React from 'react'
import { MapView } from 'expo'

const TrainStationsComponent = ( {stations} ) => {
  const { Marker } = MapView
  return (
    stations.map((marker) => (
      <Marker
        key={marker.id}
        coordinate={marker.latlng}
        title={marker.title}
        description={marker.description}
        image={require('../assets/images/circle.png')}
      />
    ))
  )
}

export default TrainStationsComponent
