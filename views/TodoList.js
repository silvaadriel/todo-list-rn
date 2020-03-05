import React, { useState } from 'react';
import { 
  StyleSheet,
  Text,
  View,
} from 'react-native';
import TodoItem from '../components/TodoItem';
import AddTodoItemBar from '../components/AddTodoItemBar';

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

  const handleDeleteTodoItem = todoItemIndex => {
    const todoListFiltered = todoList.filter(
      (_todoItem, index) => index !== todoItemIndex,
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
      <AddTodoItemBar
        value={value}
        onChangeText={onChangeText}
        placeholder="Type something todo"
        onPressAddButton={handleAddButton}
      />
      <View style={styles.todoList}>
        {
          todoList.length
            ? todoList.map((todo, index) => (
                <TodoItem
                  key={index}
                  index={index}
                  text={todo.text}
                  isDone={todo.isDone}
                  onDeleteTodoItem={handleDeleteTodoItem}
                  onCheckBoxValueChange={handleCheckBoxValueChange}
                />
              ))
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
  todoList: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
});
