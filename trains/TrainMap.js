import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Text } from 'react-native'
import { MapView } from 'expo'
import { MapStyle } from '../assets/styles'
import { trainThunks } from './duck'
import { redLineStations, defaultRegion } from './data/stations'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export class TrainMap extends Component {

  componentDidMount(){
    this.props.fetchRedLineRoute()
  }

  render() {
    const { PROVIDER_GOOGLE, Marker, Polyline } = MapView
    const redLineRoute = this.props.redLineRoute
    return (
      <MapView
        style={styles.container}
        region={defaultRegion}
        provider={PROVIDER_GOOGLE}
        customMapStyle={MapStyle}
        transitLayer
      >

        {
          redLineRoute &&
          <Polyline
            coordinates={redLineRoute}
            strokeColor="#E00001"
            strokeWidth={4}
          />
        }

        {redLineStations.map((marker) => (
          <Marker
            key={marker.id}
            coordinate={marker.latlng}
            title={marker.title}
            description={marker.description}
            image={require('../assets/images/circle.png')}
          />
        ))}

      </MapView>
    )

  }
}

const mapStateToProps = (state) => {
  return {
    redLineRoute: state.trains.redLineRoute
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRedLineRoute: () => {
      dispatch(trainThunks.fetchRedLineRoute())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrainMap)
