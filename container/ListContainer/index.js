import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
} from 'react-native';
import ToDoInput from './ToDoInput';


export default () => {
  return (
    <View>
        <ToDoInput/>
    </View>
  );
};

const styles = StyleSheet.create({
  
});

