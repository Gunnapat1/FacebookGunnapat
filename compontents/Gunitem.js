import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity,Image,Modal} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';


const Gunitem = props => {
  return (
    <View style={styles.listitem}>
      <View style={{flexDirection:'row'}}>
      <Image style={styles.imgCircles} source={require('../photo/GunnapatProfile.jpg')}/>
      <Text style={{fontsize:20,fontWeight:'bold',color:'black',marginLeft:5,marginTop:10,}}>Gunnapat Yamsumroul</Text>
      <Text style={{marginTop:27,marginLeft:-144}}>1 minute ago ◦ </Text>
      <Icon style={{marginLeft:3,marginTop:30}} name="earth" size={15} />

      <Icon style={{marginLeft:170,marginTop:-3}} name="trash" size={20} onPress={props.onDelete.bind(this, props.DeleteMessage)}/>


      </View>
      <View style={{flexDirection:'row'}}>


      <Text style={{fontSize:16,fontWeight:'600',marginTop:20,marginLeft:10,color:'#2A2A2A'}}>{props.header}</Text> //ส่งค่าไปยัง appjs ผ่านตัว header//


      </View>
      <View style={{flexDiretion:'row'}}>
        <View style={{flexDirection:'row'}}>
        <Icon name="like" size={30} style={{marginTop:20,marginLeft:30,}}/>
        <Text style={{fontsize:20,fontWeight:'bold',marginTop:25,marginLeft:15}}>Like</Text>

        <Icon name="share-a" size={30} style={{marginTop:20,marginLeft:140}}/>
        <Text style={{fontsize:20,fontWeight:'bold',marginTop:25,marginLeft:15}}>Share</Text>
        
      </View>
      
    </View>
    </View>
    
  
  );
};

const styles = StyleSheet.create({
  listitem: {
    flex:1,
    flexDirection:'column',
    padding: 10,
    marginTop: 15,
    marginLeft:-10,
    borderColor: 'black',
    backgroundColor: 'white',
    borderWidth: 0.3,
  },
  imgCircles: {
    marginTop: 10,
    marginLeft: 10,
    width: 45,
    height: 45,
    borderRadius: 200 / 2,
  },
});

export default Gunitem;
