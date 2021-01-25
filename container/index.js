import React, {useEffect, useReducer} from 'react';
import {View} from 'react-native';
import {REFRESHLIST} from './config/actionType';
import ToDoInput from './ToDoInput';
import {refreshTodoList} from './config/action';
import {readAll} from '../fakeApi';
import TodoList from './TodoList';
const initState = {
  list: [],
};

const reducer = (state, action) => {
  const {payload} = action;
  switch (action.type) {
    case REFRESHLIST:
      return {
        ...state,
        list: payload.list,
      };
    default:
      return state;
  }
};

export default function Container() {
  const [todo, dispatch] = useReducer(reducer, initState);
  const {list} = todo;

  const refreshList = async () => {
    const res = await readAll();
    dispatch(refreshTodoList(res.data));
  };
  const handleTodoChange = () => {
    refreshList();
  };

  useEffect(() => {
    refreshList();
  }, []);
  return (
    <View>
      <ToDoInput handleTodoChange={handleTodoChange} />
      <TodoList list={list} handleTodoChange={handleTodoChange} />
    </View>
  );
}
