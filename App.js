/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      todos: ['Hello'],
      newTodo: '',
    };
  }

  onHandleAddButton = () => {
    const newTodos = this.state.todos;
    newTodos.push(this.state.newTodo);

    this.setState({ todos: newTodos, newTodo: '' });
  }

  onHandleChangeText = (text) => {
    this.setState({ newTodo: text });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} value={this.state.newTodo} onChangeText={this.onHandleChangeText} />

        <TouchableOpacity onPress={this.onHandleAddButton}>
          <Text style={styles.button}>Add</Text>
        </TouchableOpacity>

        <ScrollView style={styles.list}>
          {
            this.state.todos.map((todo, id) => <Text key={id}>{todo}</Text>)
          }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d2d2d2',
    flex: 1,
    padding: 5
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 4,
    marginBottom: 7,
  },
  button: {
    backgroundColor: 'red',
    color: '#fff',
    textAlign: 'center',
    padding: 8,
  },
  list: {
    marginTop: 8,
  }
});
