import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Text } from 'react-native'
import { MapView } from 'expo'
import { MapStyle } from '../assets/styles'
import { trainThunks } from './duck'
import { redLineStations, defaultRegion } from './data/stations'
import TrainLineComponent from './TrainLineComponent'
import TrainStationsComponent from './TrainStationsComponent'

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
    const { routeToggle, redLineRoute, brownLineRoute, blueLineRoute } = this.props

    return (
      <MapView
        style={styles.container}
        initialRegion={defaultRegion}
        provider={PROVIDER_GOOGLE}
        customMapStyle={MapStyle}
      >

        {
          this.props.routeToggle.red &&
          <View>
            <TrainLineComponent
              coord={redLineRoute}
              color="#E00001"
              width={4}
            />
            <TrainStationsComponent stations={redLineStations} />
          </View>
        }

        {
          this.props.routeToggle.brown &&
          <View>
            <TrainLineComponent
              coord={brownLineRoute}
              color="#9C786C"
              width={4}
            />
            {/* <TrainStationsComponent stations={redLineStations} /> */}
          </View>
        }

        {
          this.props.routeToggle.blue &&
          <View>
            <TrainLineComponent
              coord={blueLineRoute}
              color="#42A5F5"
              width={4}
            />
            {/* <TrainStationsComponent stations={redLineStations} /> */}
          </View>
        }

      </MapView>
    )

  }
}

const mapStateToProps = (state) => {
  return {
    redLineRoute: state.trains.redLineRoute,
    brownLineRoute: state.trains.brownLineRoute,
    blueLineRoute: state.trains.blueLineRoute,
    routeToggle: state.trains.routeToggle
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
