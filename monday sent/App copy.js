import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import Gunitem from '../compontents/Gunitem';
import GunInput from '../compontents/GunInput';

export default function App() {
  const [commentOut, setCommentGun] = useState([]);

  const addDataHandler = gunTitle => {
    setCommentGun(currentGoals => [
      ...currentGoals,
      {id: Math.random().toString(), type: gunTitle},
    ]);
  };

  const removeGunHandle = gunId => {
    setCommentGun(currentGoals => {
      return currentGoals.filter((gunnapat) => gunnapat.id !== gunId);
    });
  }

  return (
    <View style={styles.root}>
      <GunInput onAddGun={addDataHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={commentOut}
        renderItem={MesseageFacebook => (
          <Gunitem
            DeleteMessage={MesseageFacebook.item.id}
            onDelete={removeGunHandle}
            header={MesseageFacebook.item.type}
          />
        )}></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 50,
  },
});
