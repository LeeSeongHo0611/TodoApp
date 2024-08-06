import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const EditTodoScreen = ({ route, navigation }) => {
  const { todo, editTodo } = route.params;
  const [text, setText] = useState(todo.text);
  const [details, setDetails] = useState(todo.details);

  const handleSave = () => {
    const updatedTodo = { ...todo, text, details };
    editTodo(updatedTodo);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="일정목록"
        value={text}
        onChangeText={setText}
      />
      <TextInput
        style={styles.input}
        placeholder="세부내용"
        value={details}
        onChangeText={setDetails}
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
});

export default EditTodoScreen;
