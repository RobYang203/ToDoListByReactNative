import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';

export default function ToDoInput() {
  const [textValue, setTextValue] = useState('');
  const onInputChange = (text) => {
    setTextValue(text);
  };
  const onButtonClick = (e) => {
    alert(textValue)
  } 
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="請輸入..."
        onChange={onInputChange}
        value={textValue}
      />
      <TouchableOpacity style={styles.button} onPress={onButtonClick}>
        <Text style={styles.buttonText}>Click</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: 100,
    justifyContent: 'center',
  },
  textInput: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: '80%',
    height: 30,
    borderWidth: 1,
    borderColor: '#c3c3c3',
  },
  button: {
    width: '15%',
    backgroundColor: '#FF3D00',
    height: 30,
    padding: 2,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
