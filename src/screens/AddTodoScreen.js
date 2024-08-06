import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AddTodoScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Add Todo Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddTodoScreen;
