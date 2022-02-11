import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Gunitem = props => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.DeleteMessage)}>
        <View style={styles.listitem}>
      <Text>Gunnapat: {props.header}</Text>
    </View>
    </TouchableOpacity>
  
  );
};

const styles = StyleSheet.create({
  listitem: {
    padding: 10,
    marginTop: 15,
    borderColor: 'black',
    backgroundColor: '#ccc',
    borderWidth: 1,
  },
});

export default Gunitem;
