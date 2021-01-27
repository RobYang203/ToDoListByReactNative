import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

export default function TodoItem({item = {}, handleItemClick}) {
  const {todo, id, status} = item;
  const onItemPress = async () => {
    handleItemClick(id, status);
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onItemPress}>
      <Text style={styles.count}>{`${id}.`}</Text>
      <Text style={status === 'finish' ? styles.contentFinish : {}}>
        {todo}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 30,
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    borderColor: '#c7c7c7',
    padding: 5,
  },
  containerFinish: {
    backgroundColor: '#cFcFcF',
  },
  count: {
    width: 20,
  },
  contentFinish: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    textDecorationColor: '#000',
  },
});
