import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AddTodo = ({ addTodo }) => {
  const [text, setText] = useState('');
  const [details, setDetails] = useState('');

  const handleAddTodo = () => {
    addTodo(text, details);
    setText('');
    setDetails('');
  };

  return (
    <View style={styles.inputContainer}>
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
      <Button title="Add" onPress={handleAddTodo} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    marginVertical: 5,
    borderRadius: 5,
    elevation: 1,
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

// 완성된 export 부분
export default AddTodo;
