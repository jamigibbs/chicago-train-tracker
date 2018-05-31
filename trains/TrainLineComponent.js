import React from 'react'
import { MapView } from 'expo'

const TrainLineComponent = ( {coord, color, width} ) => {
  const { Polyline, Marker } = MapView
  return (
    <Polyline
      coordinates={coord}
      strokeColor={color}
      strokeWidth={width}
    />
  )
}

export default TrainLineComponent
