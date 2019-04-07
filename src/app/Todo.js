import React from 'react';
import { connect  } from 'react-redux';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import { ADD_TODO, CHANGE_INPUT } from './reducers'

const Todo = ({todos, newTodo, onHandleChangeInput, addTodo}) => (
  <View style={styles.container}>
    <TextInput style={styles.input} value={newTodo} onChangeText={onHandleChangeInput} />

    <TouchableOpacity onPress={() => addTodo(newTodo)}>
      <Text style={styles.button}>Add</Text>
    </TouchableOpacity>

    <ScrollView style={styles.list}>
      {
        todos.map((todo, id) => <Text key={id}>{todo}</Text>)
      }
    </ScrollView>
  </View>
);

const mapStateToProps = (state) => ({
  todos: state.todos,
  newTodo: state.newTodo,
});

const mapActionsToProps = (dispatch) => ({
  addTodo(todo) {
    dispatch({ type: ADD_TODO, payload: todo });
    dispatch({ type: CHANGE_INPUT, payload: '' });
  },
  onHandleChangeInput(text) {
    dispatch({type: CHANGE_INPUT, payload: text});
  }
})

export default connect(mapStateToProps, mapActionsToProps)(Todo);

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
