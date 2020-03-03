import React from 'react';
import { StyleSheet, View,Text, CheckBox, TouchableHighlight, ScrollView } from 'react-native';

export default function TodoItem(props) {
  const {
    text,
    index,
    isDone,
    onDeleteTodoItem,
    onCheckBoxValueChange,
  } = props;

  return (
    <View style={styles.todoItem} key={index}>
      <CheckBox
        value={isDone}
        onValueChange={(value) => onCheckBoxValueChange(index, value)}
      />
      <Text style={[
        styles.todoItemText,
        isDone && styles.todoItemTextIsDone,
      ]}>
        {text}
      </Text>
      <TouchableHighlight onPress={() => onDeleteTodoItem(index)}>
        <Text>X</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  todoItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderColor: 'gray',
    borderWidth: 1,
    height: 60,
    width: '90%',
    marginBottom: 20,
  },
  todoItemText: {
    fontSize: 20,
    paddingLeft: 20,
    paddingRight: 20,
    overflow: 'hidden',
  },
  todoItemTextIsDone: {
    textDecorationLine: 'line-through',
  },
});
