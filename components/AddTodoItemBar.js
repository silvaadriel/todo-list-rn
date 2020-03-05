import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
} from 'react-native';

export default function AddTodoItemBar(props) {
  const {
    value,
    placeholder,
    onChangeText,
    onPressAddButton,
  } = props;

  return (
    <View style={styles.todoInput}>
      <TextInput
        style={{ width: '70%', height: 40, borderColor: 'gray', borderWidth: 1, padding: 10 }}
        onChangeText={text => onChangeText(text)}
        value={value}
        placeholder={placeholder}
      />
      <TouchableHighlight
        style={styles.addButton}
        disabled={!value}
        onPress={onPressAddButton}
      >
        <Text style={{ color: '#fff' }}>Add</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  todoInput: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    marginTop: 60,
    marginBottom: 40,
  },
  addButton: {
    padding: 13,
    backgroundColor: '#659DF6',
  },
});
