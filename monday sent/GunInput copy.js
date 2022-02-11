import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TextInput} from 'react-native';

const GunInput = props => {
  const [enterData, setData] = useState('');
  
  const gunInputHandle = enteredText => {
    setData(enteredText);
  };

  return (
    <View style={styles.inputContrainer}>
      <TextInput
        placeholder="เขียนความคิดเห็น..."
        style={styles.input}
        onChangeText={gunInputHandle}
        value={enterData}
      />
      <Button title="ส่ง ▶" onPress={props.onAddGun.bind(this, enterData)}  />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContrainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '70%',
    borderBottomColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
});

export default GunInput;
