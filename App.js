import React, { useState } from 'react';
import { 
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  CheckBox,
} from 'react-native';

export default function App() {
  const [value, onChangeText] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleAddButton = () => {
    const todoListCopy = [...todoList];
    todoListCopy.push({
      text: value,
      isDone: false,
    });
    setTodoList(todoListCopy);
    onChangeText('');
  };

  const handleDeleteTodo = todoIndex => {
    const todoListFiltered = todoList.filter(
      (_todo, index) => index !== todoIndex,
    );
    setTodoList(todoListFiltered);
  };

  const handleCheckBoxValueChange = (todoIndex, value) => {
    const todoListCopy = [...todoList];
    todoListCopy[todoIndex].isDone = value;
    setTodoList(todoListCopy);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>TodoListRN</Text>
      <View style={styles.todoInput}>
        <TextInput
          style={{ width: '70%', height: 40, borderColor: 'gray', borderWidth: 1, padding: 10 }}
          onChangeText={text => onChangeText(text)}
          value={value}
          placeholder="Type something todo"
        />
        <TouchableHighlight
          style={styles.addButton}
          disabled={!value}
          onPress={handleAddButton}
        >
          <Text style={{ color: '#fff' }}>Add</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.todoList}>
        {
          todoList.length
            ? (todoList.map((todo, index) => (
                <View style={styles.todoItem} key={index}>
                  <CheckBox
                    value={todo.isDone}
                    onValueChange={(value) => handleCheckBoxValueChange(index, value)}
                  />
                  <Text style={[
                    styles.todoItemText,
                    todo.isDone && styles.todoItemTextIsDone,
                  ]}>
                    {todo.text}
                  </Text>
                  <TouchableHighlight onPress={() => handleDeleteTodo(index)}>
                    <Text>X</Text>
                  </TouchableHighlight>
                </View>
              )))
            : <Text>Nothing Todo Here :)</Text>
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  appTitle: {
    fontSize: 38,
    marginTop: 60,
  },
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
  todoList: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
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
  },
  todoItemTextIsDone: {
    textDecorationLine: 'line-through',
  },
});
