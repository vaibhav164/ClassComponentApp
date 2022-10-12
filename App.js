import React from 'react';
import {Text, Button, View, StyleSheet} from 'react-native';

class App extends React.Component {
  state = {
    counter: 0,
  };

  render() {
    const {counter} = this.state;
    return (
      <View style={styles.container}>
        <Text>{counter}</Text>
        <Button
          style={styles.increment}
          onPress={() => {
            this.setState(prevState => ({counter: prevState.counter + 1}));
          }}
          title="Increment"
        />
        <Button
          style={styles.decrement}
          onPress={() => {
            this.setState(prevState => ({counter: prevState.counter - 1}));
          }}
          title="Decrement"
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  decrement: {
    backgroundColor: 'orrange',
    borderWidth: 2,
  },
  increment: {},
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default App;
