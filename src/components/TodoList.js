import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleComplete, deleteTodo, navigateToEdit }) => {
  return (
    <View>
      <Text style={styles.sectionTitle}>일정 목록</Text>
      {todos.filter(todo => !todo.completed).map((todo) => (
        <TodoItem
          key={todo.id}
          item={todo}
          toggleComplete={() => toggleComplete(todo.id)}
          deleteTodo={() => deleteTodo(todo.id)}
          editTodo={() => navigateToEdit(todo)}
        />
      ))}
      <Text style={styles.sectionTitle}>완료된 목록</Text>
      {todos.filter(todo => todo.completed).map((todo) => (
        <TodoItem
          key={todo.id}
          item={todo}
          toggleComplete={() => toggleComplete(todo.id)}
          deleteTodo={() => deleteTodo(todo.id)}
          editTodo={() => navigateToEdit(todo)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default TodoList;
