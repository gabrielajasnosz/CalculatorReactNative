import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Button from './Button';
import Result from './Result';

export default class App extends Component {
  render() {
    const tab = [
      {title: 'AC', color: '#a6b4c4', size: '25%'},
      {title: ' ', color: '#a6b4c4', size: '50%'},
      {title: '/', color: '#242c53', size: '25%'},
      {title: '7', color: '#a6b4c4', size: '25%'},
      {title: '8', color: '#a6b4c4', size: '25%'},
      {title: '9', color: '#a6b4c4', size: '25%'},
      {title: 'x', color: '#242c53', size: '25%'},
      {title: '4', color: '#a6b4c4', size: '25%'},
      {title: '6', color: '#a6b4c4', size: '25%'},
      {title: '5', color: '#a6b4c4', size: '25%'},
      {title: '-', color: '#242c53', size: '25%'},
      {title: '1', color: '#a6b4c4', size: '25%'},
      {title: '2', color: '#a6b4c4', size: '25%'},
      {title: '3', color: '#a6b4c4', size: '25%'},
      {title: '+', color: '#242c53', size: '25%'},
      {title: '0', color: '#a6b4c4', size: '50%'},
      {title: ',', color: '#a6b4c4', size: '25%'},
      {title: '=', color: '#242c53', size: '25%'},
    ];
    return (
      <View style={styles.container}>
        <View style={styles.calc}>
          <View style={styles.resultStyle}>
            <Result title={0} />
          </View>
          {tab.map((element) => {
            return (
              <Button
                title={element.title}
                //key={element.id}
                color={element.color}
                size={element.size}
              />
            );
          })}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#ffffff',
  },
  resultStyle: {
    width: '100%',
    alignSelf: 'flex-end',
  },
  calc: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    alignContent: 'flex-end',
  },
});
