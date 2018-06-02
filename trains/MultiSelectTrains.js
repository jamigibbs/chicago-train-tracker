import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Switch, Text, StyleSheet } from 'react-native'
import { trainActions } from './duck'

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 10
  },
  switch: {
    margin: 5
  }
});

export class MultiSelectTrains extends Component {

  toggleSwitch = (color) => {
    const prevColorToggle = this.props.routeToggle[color]
    const bool = !prevColorToggle
    this.props.updateToggle(color, bool)
  }

  render(){
    const { routeToggle, apiCalls } = this.props
    return (
      <View style={styles.container}>
        <Switch
          style={styles.switch}
          onValueChange={ () => { this.toggleSwitch('red') } }
          value={ routeToggle.red }
          tintColor="#E00001"
          onTintColor="#E00001"
        />
        <Switch
          style={styles.switch}
          onValueChange={ () => { this.toggleSwitch('brown') } }
          value={ routeToggle.brown }
          tintColor="#8D6E63"
          onTintColor="#8D6E63"
        />
        <Switch
          style={styles.switch}
          onValueChange={ () => { this.toggleSwitch('blue') } }
          value={ routeToggle.blue }
          tintColor="#42A5F5"
          onTintColor="#42A5F5"
        />
        <Text>Google API Calls: {routeToggle.apiCalls}</Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state.trains)
  return {
    routeToggle: state.trains.routeToggle
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateToggle: (color, bool) => {
      dispatch(trainActions.toggleTrainRouteView(color, bool))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MultiSelectTrains)
