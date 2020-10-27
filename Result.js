import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

class Result extends Component {
  render() {
    const {title} = this.props;
    return (
      <View style={styles.result}>
        <Text style={styles.resultText}>{title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  result: {
    backgroundColor: '#595998',
    height: 100,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  resultText: {
    fontSize: 35,
    fontWeight: 'bold',
    margin: 10,
    color: 'white',
  },
});

export default Result;
