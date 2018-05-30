import React from 'react';
import { StyleSheet, View, Text } from 'react-native'
import { TrainMap } from '../components'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default class MapScreen extends React.Component {
  static navigationOptions = {
    title: 'Map',
  };

  render() {
    return (
      <View style={styles.container}>
        <TrainMap />
      </View>
    );
  }
}
