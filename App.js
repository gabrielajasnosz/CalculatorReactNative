import React, {Component} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import Button from './Button';
import TextView from './TextView';

const mexp = require('math-expression-evaluator');

export default class App extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  constructor(props) {
    super(props);

    const isPortrait = () => {
      const dim = Dimensions.get('window');
      return dim.height > dim.width;
    };
    this.state = {
      displayValue: '0',
      operator: null,
      myValue: '',
      isDot: false,
      orientation: isPortrait() ? 'PORTRAIT' : 'LANDSCAPE',
    };

    this.portraitButtons = [
      {key: 1, title: 'AC', color: '#787d8c', size: '25%'},
      {key: 2, title: ' ', color: '#787d8c', size: '50%'},
      {key: 3, title: '/', color: '#1e5169', size: '25%'},
      {key: 4, title: '7', color: '#7d8491', size: '25%'},
      {key: 5, title: '8', color: '#7d8491', size: '25%'},
      {key: 6, title: '9', color: '#7d8491', size: '25%'},
      {key: 7, title: '*', color: '#1e5169', size: '25%'},
      {key: 8, title: '4', color: '#7d8491', size: '25%'},
      {key: 9, title: '6', color: '#7d8491', size: '25%'},
      {key: 10, title: '5', color: '#7d8491', size: '25%'},
      {key: 11, title: '-', color: '#1e5169', size: '25%'},
      {key: 12, title: '1', color: '#7d8491', size: '25%'},
      {key: 13, title: '2', color: '#7d8491', size: '25%'},
      {key: 14, title: '3', color: '#7d8491', size: '25%'},
      {key: 15, title: '+', color: '#1e5169', size: '25%'},
      {key: 16, title: '0', color: '#7d8491', size: '50%'},
      {key: 17, title: '.', color: '#7d8491', size: '25%'},
      {key: 18, title: '=', color: '#1e5169', size: '25%'},
    ];

    this.landscapeButtons = [
      {key: 1, title: '√x', color: '#787d8c', size: String(100 / 6) + '%'},
      {key: 2, title: 'log10', color: '#787d8c', size: String(100 / 6) + '%'},
      {key: 3, title: '+/-', color: '#787d8c', size: String(100 / 6) + '%'},
      {key: 4, title: 'AC', color: '#787d8c', size: String(100 / 6) + '%'},
      {key: 5, title: '%', color: '#787d8c', size: String(100 / 6) + '%'},
      {key: 6, title: '/', color: '#1e5169', size: String(100 / 6) + '%'},
      {key: 7, title: 'e^x', color: '#787d8c', size: String(100 / 6) + '%'},
      {key: 8, title: '10^x', color: '#787d8c', size: String(100 / 6) + '%'},
      {key: 9, title: '7', color: '#7d8491', size: String(100 / 6) + '%'},
      {key: 10, title: '8', color: '#7d8491', size: String(100 / 6) + '%'},
      {key: 11, title: '9', color: '#7d8491', size: String(100 / 6) + '%'},
      {key: 12, title: '*', color: '#1e5169', size: String(100 / 6) + '%'},
      {key: 13, title: 'ln(x)', color: '#787d8c', size: String(100 / 6) + '%'},
      {key: 14, title: 'x!', color: '#787d8c', size: String(100 / 6) + '%'},
      {key: 15, title: '4', color: '#7d8491', size: String(100 / 6) + '%'},
      {key: 16, title: '5', color: '#7d8491', size: String(100 / 6) + '%'},
      {key: 17, title: '6', color: '#7d8491', size: String(100 / 6) + '%'},
      {key: 18, title: '-', color: '#1e5169', size: String(100 / 6) + '%'},
      {key: 19, title: 'e', color: '#787d8c', size: String(100 / 6) + '%'},
      {key: 20, title: 'x^2', color: '#787d8c', size: String(100 / 6) + '%'},
      {key: 21, title: '1', color: '#7d8491', size: String(100 / 6) + '%'},
      {key: 22, title: '2', color: '#7d8491', size: String(100 / 6) + '%'},
      {key: 23, title: '3', color: '#7d8491', size: String(100 / 6) + '%'},
      {key: 24, title: '+', color: '#1e5169', size: String(100 / 6) + '%'},
      {key: 25, title: 'pi', color: '#787d8c', size: String(100 / 6) + '%'},
      {key: 26, title: 'x^3', color: '#787d8c', size: String(100 / 6) + '%'},
      {key: 27, title: '0', color: '#7d8491', size: String(100 / 3) + '%'},
      {key: 28, title: '.', color: '#7d8491', size: String(100 / 6) + '%'},
      {key: 29, title: '=', color: '#1e5169', size: String(100 / 6) + '%'},
    ];

    Dimensions.addEventListener('change', () => {
      this.setState({
        orientation: isPortrait() ? 'PORTRAIT' : 'LANDSCAPE',
      });
    });
  }

  renderPortraitButtons() {
    return (
      <View style={styles.calculatorStyle}>
        {this.portraitButtons.map((element) => {
          return (
            <Button
              title={element.title}
              key={element.key}
              color={element.color}
              size={element.size}
              handleOnPress={this.handleInput.bind(this, element.title)}
            />
          );
        })}
      </View>
    );
  }

  renderLandscapeButtons() {
    return (
      <View style={styles.calculatorStyle}>
        {this.landscapeButtons.map((element) => {
          return (
            <Button
              title={element.title}
              key={element.key}
              color={element.color}
              size={element.size}
              handleOnPress={this.handleInput.bind(this, element.title)}
            />
          );
        })}
      </View>
    );
  }

  handleInput = (input) => {
    const {displayValue, operator, myValue, isDot} = this.state;

    switch (input) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        this.setState({
          displayValue: displayValue === '0' ? input : displayValue + input,
          errorText: ' ',
        });
        break;
      case '+':
      case '-':
      case '*':
      case '/':
      case '%':
        this.setState({
          operator: input,
          myValue: myValue + displayValue + input,
          displayValue: '0',
          isDot: false,
        }); //if the operator is already chosen it only changes the operator not the remembered values
        break;
      case '.':
        if (!isDot) {
          this.setState({
            displayValue: displayValue + input,
            isDot: true,
            errorText: ' ',
          });
        }
        break;
      case '=':
        // eslint-disable-next-line no-eval
        let result = mexp.eval(myValue + displayValue);
        if (result % 1 !== 0) {
          this.setState({
            isDot: true,
          });
        }
        this.setState({
          displayValue: result,
          isDot: true,
          myValue: ' ',
        });
        break;
      case 'AC':
        this.setState({
          displayValue: '0',
          operator: null,
          myValue: ' ',
          tempValue: '',
          isDot: false,
        });
        break;
      case '√x':
        this.setState({
          displayValue: 'pow(' + displayValue + ',0.5)',
        });
        break;
      case 'x!':
        this.setState({
          displayValue: '(' + displayValue + '!' + ')',
        });
        break;
      case 'x^2':
        this.setState({
          displayValue: 'pow(' + displayValue + ', 2)',
        });
        break;
      case 'x^3':
        this.setState({
          displayValue: 'pow(' + displayValue + ', 3)',
        });
        break;
      case '10^x':
        this.setState({
          displayValue: 'pow(10,' + displayValue + ')',
        });
        break;
      case '+/-':
        this.setState({
          displayValue: displayValue * -1,
        });
        break;
      case 'e^x':
        this.setState({
          displayValue: 'pow(e,' + displayValue + ')',
        });
        break;
      case 'e':
        this.setState({
          displayValue: 'e',
        });
        break;
      case 'pi':
        this.setState({
          displayValue: 'pi',
        });
        break;
      case 'ln(x)':
        this.setState({
          displayValue: 'ln(' + displayValue + ')',
        });
        break;
      case 'log10':
        this.setState({
          displayValue: 'log(' + displayValue + ')',
        });
        break;
    }
  };

  render() {
    let view =
      this.state.orientation === 'PORTRAIT'
        ? this.renderPortraitButtons()
        : this.renderLandscapeButtons();

    return (
      <View style={styles.container}>
        <View style={styles.resultStyle}>
          <TextView
            title={this.state.myValue}
            fontColor={'#a9a9a9'}
            size={20}
            boxHeight={'30%'}
          />
          <TextView
            title={this.state.displayValue}
            fontColor={'#ffffff'}
            size={35}
            boxHeight={'70%'}
          />
        </View>
        {view}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  resultStyle: {
    flex: 1,
    width: '100%',
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
  },
  calculatorStyle: {
    flex: 2,
    alignContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
});
