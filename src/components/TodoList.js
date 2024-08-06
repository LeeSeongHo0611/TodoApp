import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleComplete, deleteTodo }) => {
  const completedTodos = todos.filter(todo => todo.completed);
  const pendingTodos = todos.filter(todo => !todo.completed);

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>일정 목록</Text>
      <FlatList
        data={pendingTodos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TodoItem item={item} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
        )}
      />
      <Text style={styles.sectionTitle}>완료된 목록</Text>
      <FlatList
        data={completedTodos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TodoItem item={item} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default TodoList;
