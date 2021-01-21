/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// import ListContainer from "./container/ListContainer/index"
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import ListContainer from "./container/ListContainer";


const App = () => {
  return (
    <SafeAreaView>
      <ListContainer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
