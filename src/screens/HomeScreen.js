import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';
import uuid from 'react-native-uuid';


const HomeScreen = ({ navigation }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text, details) => {
    console.log("알랏")
    if (text === null || text === undefined || !text.trim()) {
      Alert.alert('Error', '일정목록은 필수로 들어가야 됩니다.');
      return;
    }
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

  const editTodo = (updatedTodo) => {
    setTodos(
      todos.map((todo) =>
        todo.id === updatedTodo.id ? updatedTodo : todo
      )
    );
  };

  const navigateToEdit = (todo) => {
    navigation.navigate('EditTodo', { todo, editTodo });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ToDoList</Text>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} navigateToEdit={navigateToEdit} />
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default HomeScreen;
