import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Text } from 'react-native'
import { MapView } from 'expo'
import { MapStyle } from '../assets/styles'
import { fetchRedLineRoute } from '../store'
import { redLineStations, defaultRegion } from '../assets/data/stations'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export class TrainMap extends React.Component {

  componentDidMount(){
    this.props.getRedLineRoute()
  }

  render() {
    const { PROVIDER_GOOGLE, Marker, Polyline } = MapView

    return (
      <MapView
        style={styles.container}
        region={defaultRegion}
        provider={PROVIDER_GOOGLE}
        customMapStyle={MapStyle}
        transitLayer
      >

        {
          this.props.redLineRoute[0] &&
          <Polyline
            coordinates={this.props.redLineRoute[0]}
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
    redLineRoute: state.transitRoutes.red
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getRedLineRoute: () => {
      dispatch(fetchRedLineRoute())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TrainMap)
