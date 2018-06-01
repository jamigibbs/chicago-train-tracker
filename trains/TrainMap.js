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
    this.props.fetchBrownLineRoute()
    this.props.fetchBlueLineRoute()
  }

  render() {
    const { PROVIDER_GOOGLE, Marker, Polyline } = MapView
    const { routeToggle, coordinates } = this.props

    return (
      <MapView
        style={styles.container}
        initialRegion={defaultRegion}
        provider={PROVIDER_GOOGLE}
        customMapStyle={MapStyle}
      >

        { routeToggle.red &&
          <Polyline
            coordinates={routeToggle.red ? coordinates.red : null}
            strokeColor="#E00001"
            strokeWidth={4}
          />
        }

        { routeToggle.brown &&
          <Polyline
            coordinates={routeToggle.brown ? coordinates.brown : null}
            strokeColor="#9C786C"
            strokeWidth={4}
          />
        }

        { routeToggle.blue &&
          <Polyline
            coordinates={routeToggle.blue ? coordinates.blue : null}
            strokeColor="#42A5F5"
            strokeWidth={4}
          />
        }

      </MapView>
    )

  }
}

const mapStateToProps = (state) => {
  return {
    routeToggle: state.trains.routeToggle,
    coordinates: state.trains.coordinates
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRedLineRoute: () => {
      dispatch(trainThunks.fetchRedLineRoute())
    },
    fetchBrownLineRoute: () => {
      dispatch(trainThunks.fetchBrownLineRoute())
    },
    fetchBlueLineRoute: () => {
      dispatch(trainThunks.fetchBlueLineRoute())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrainMap)
