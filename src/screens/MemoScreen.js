import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';
import { v4 as uuidv4 } from 'uuid';

const MemoScreen = () => {
  const [memos, setMemos] = useState([]);
  const [memoText, setMemoText] = useState('');

  const addMemo = () => {
    setMemos([...memos, { id: uuidv4(), text: memoText }]);
    setMemoText('');
  };

  const deleteMemo = (id) => {
    setMemos(memos.filter((memo) => memo.id !== id));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Write your memo"
        value={memoText}
        onChangeText={setMemoText}
      />
      <Button title="Add Memo" onPress={addMemo} />
      <FlatList
        data={memos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.memoContainer}>
            <Text style={styles.memoText}>{item.text}</Text>
            <Button title="Delete" onPress={() => deleteMemo(item.id)} color="red" />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f5f5f5',
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
  memoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    marginVertical: 5,
    borderRadius: 5,
    elevation: 1,
  },
  memoText: {
    fontSize: 18,
  },
});

export default MemoScreen;
