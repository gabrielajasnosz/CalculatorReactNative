import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

class Error extends Component {
  render() {
    const {title} = this.props;
    return (
      <View style={styles.error}>
        <Text style={styles.errorText}>{title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  error: {
    backgroundColor: '#8f919d',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },

  errorText: {
    fontSize: 15,
    margin: 10,
    color: 'red',
  },
});

export default Error;
