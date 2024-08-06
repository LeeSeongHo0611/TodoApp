import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Checkbox, IconButton } from 'react-native-paper';

const TodoItem = ({ item, toggleComplete, deleteTodo }) => {
  return (
    <View style={styles.itemContainer}>
      <Checkbox
        status={item.completed ? 'checked' : 'unchecked'}
        onPress={() => toggleComplete(item.id)}
      />
      <View style={styles.textContainer}>
        <Text style={[styles.itemText, item.completed && styles.completed]}>
          {item.text}
        </Text>
        {item.details ? <Text style={styles.itemDetails}>{item.details}</Text> : null}
      </View>
      <IconButton
        icon="delete"
        color="red"
        size={20}
        onPress={() => deleteTodo(item.id)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    marginVertical: 5,
    borderRadius: 5,
    elevation: 1,
  },
  textContainer: {
    flex: 1,
  },
  itemText: {
    fontSize: 18,
  },
  itemDetails: {
    fontSize: 14,
    color: 'gray',
  },
  completed: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
});

export default TodoItem;
