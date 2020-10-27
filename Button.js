import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

class Button extends Component {
  render() {
    const {title, color, size} = this.props;
    return (
      <TouchableOpacity
        style={{
          backgroundColor: color,
          width: size,
          height: 67,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Button;
