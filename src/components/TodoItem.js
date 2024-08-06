import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Checkbox, IconButton } from 'react-native-paper';

const TodoItem = ({ item, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <View style={styles.item}>
      <Checkbox
        status={item.completed ? 'checked' : 'unchecked'}
        onPress={toggleComplete}
      />
      <View style={styles.textContainer}>
        <Text style={[styles.text, item.completed && styles.completed]}>{item.text}</Text>
        <Text style={[styles.details, item.completed && styles.completed]}>{item.details}</Text>
      </View>
      <IconButton
        icon="pencil"
        size={20}
        onPress={editTodo}
      />
      <IconButton
        icon="delete"
        size={20}
        onPress={deleteTodo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 1,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  text: {
    fontSize: 16,
  },
  details: {
    fontSize: 12,
    color: 'gray',
  },
  completed: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
});

export default TodoItem;
