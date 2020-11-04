import React, {Component} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import Button from './Button';
import Result from './Result';
import Error from './Error';

export default class App extends Component {
  constructor(props) {
    super(props);

    const isPortrait = () => {
      const dim = Dimensions.get('window');
      return dim.height > dim.width;
    };

    this.state = {
      displayValue: '0',
      operator: null,
      myValue: '0',
      isDot: false,
      isClicked: false,
      isEqualsClicked: false,
      errorText: ' ',
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
    const {
      displayValue,
      operator,
      myValue,
      isDot,
      isClicked,
      isEqualsClicked,
    } = this.state;

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
        if (!isClicked) {
          this.setState({
            myValue: displayValue,
            operator: input,
            displayValue: '0',
            isDot: false,
            isClicked: true,
            isEqualsClicked: false,
            errorText: ' ',
          });
        } else {
          this.setState({
            operator: input,
          });
        } //if the operator is already chosen it only changes the operator not the remembered values
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
        if (operator != null) {
          if (!isEqualsClicked) {
            if (displayValue.charAt(displayValue.length - 1) === '.') {
              this.setState({
                displayValue: displayValue + '0',
              });
            }
            // eslint-disable-next-line no-eval
            let result = eval(myValue + operator + displayValue);
            this.setState({
              tempValue: displayValue, //remembers last number
              displayValue: result % 1 === 0 ? result : result.toFixed(4),
              isDot: true,
              isClicked: false,
              myValue: displayValue,
              isEqualsClicked: true,
              errorText: ' ',
            });
          }
        }
        break;
      case 'AC':
        this.setState({
          displayValue: '0',
          operator: null,
          myValue: '0',
          tempValue: '',
          isDot: false,
          isClicked: false,
          isEqualsClicked: false,
          errorText: ' ',
        });
        break;
      case '√x':
        let result = Math.sqrt(displayValue);
        if (displayValue >= 0) {
          this.setState({
            displayValue: result % 1 === 0 ? result : result.toFixed(4),
            isDot: true,
            errorText: ' ',
          });
        } else {
          this.setState({
            errorText: result % 1 === 0 ? result : result.toFixed(4),
          });
        }
        break;
      case 'x!':
        if (displayValue <= 20 && displayValue >= 0) {
          if (displayValue === 0 || displayValue === 1) {
            this.setState({
              displayValue: 1,
              errorText: ' ',
            });
          } else {
            let factorial = 1;
            let counter = Math.round(displayValue);
            while (counter > 1) {
              factorial = factorial * counter;
              counter = counter - 1;
            }
            this.setState({
              displayValue: factorial,
              errorText: ' ',
            });
          }
        } else {
          this.setState({
            errorText: 'Wrong value!',
          });
        }
        break;
      case 'x^2':
        this.setState({
          displayValue: Math.pow(displayValue, 2),
          errorText: ' ',
        });
        break;
      case 'x^3':
        this.setState({
          displayValue: Math.pow(displayValue, 3),
          errorText: ' ',
        });
        break;
      case '10^x':
        let x = Math.round(displayValue);
        this.setState({
          displayValue: Math.pow(10, x),
          errorText: ' ',
        });
        break;
      case '+/-':
        this.setState({
          displayValue: displayValue * -1,
          errorText: ' ',
        });
        break;
      case 'e^x':
        let y = Math.round(displayValue);
        this.setState({
          displayValue: Math.pow(Math.E, y).toFixed(4),
          errorText: ' ',
        });
        break;
      case 'e':
        this.setState({
          displayValue: Math.E.toFixed(4),
          isDot: true,
          errorText: ' ',
        });
        break;
      case 'pi':
        this.setState({
          displayValue: Math.PI.toFixed(4),
          isDot: true,
          errorText: ' ',
        });
        break;
      case 'ln(x)':
        if (displayValue <= 0) {
          this.setState({
            errorText: Math.log(displayValue).toFixed(4),
          });
        } else {
          this.setState({
            displayValue: Math.log(displayValue).toFixed(4),
            isDot: true,
            errorText: ' ',
          });
        }

        break;
      case 'log10':
        if (displayValue >= 0) {
          this.setState({
            displayValue: Math.log10(displayValue).toFixed(4),
            isDot: true,
          });
        } else {
          this.setState({
            errorText: Math.log10(displayValue).toFixed(4),
          });
        }
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
          <Error title={this.state.errorText} />
          <Result title={this.state.displayValue} />
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
