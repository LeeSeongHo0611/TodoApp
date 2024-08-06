import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import uuid from 'react-native-uuid'; // react-native-uuid 사용

const HomeScreen = ({ navigation }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text, details) => {
    setTodos([...todos, { id: uuid.v4(), text, details, completed: false }]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <View style={styles.container}>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
      <Button title="MEMO" onPress={() => navigation.navigate('Memo')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
});

export default HomeScreen;
