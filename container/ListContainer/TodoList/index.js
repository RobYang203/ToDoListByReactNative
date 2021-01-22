import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import TodoItem from './TodoItem';
import {setToDoItemIsProcessing, setTodoItemIsFinish} from '../../../fakeApi';
export default function TodoList({list = [], handleTodoChange}) {
  const handleItemClick = async (id, status) => {
    const callAPI =
      status === 'finish' ? setToDoItemIsProcessing : setTodoItemIsFinish;
    const res = await callAPI(id);
    if (res.type === 'success') handleTodoChange();
  };
  const renderItem = ({item}) => {
    return <TodoItem item={item} handleItemClick={handleItemClick} />;
  };
  return (
    <FlatList
      data={list}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}
