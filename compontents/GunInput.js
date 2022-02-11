import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Fontisto';
import {View, Text, StyleSheet, Button, TextInput,Modal,Image, Touchable} from 'react-native';

const GunInput = props => {
  const [enterData, setData] = useState('');
  
  const gunInputHandle = enteredText => {
    setData(enteredText);
  };
  const addGunHandler = () => {
    props.onAddGun(enterData);
    setData('');
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.testArea}>
        <Icon style={{marginTop:5,marginLeft:5,}}  name="arrow-left" size={30} color="white" onPress={props.onCancel}/>
        <Text style={{fontWeight:'normal',fontSize:20,marginTop:5,color:'white'}}>  สร้างโพสต์</Text>
        <Text style={styles.postText} onPress={addGunHandler}>Post</Text>
      </View>
    <View style={styles.inputContrainer}>
      <Image style={styles.imgCircles} source={require('../photo/GunnapatProfile.jpg')}/>
      <Text style={{fontSize:16,fontWeight:'bold',marginLeft:10,marginTop:7,color:'black'}}>Gunnapat Yamsumroul</Text>
      <View style={{marginTop:30,marginLeft:-160,flexDirection:'row',paddingRight:0}}>
        <Icon style={{marginLeft:-5}} name="earth" size={15}/>
        <Text style={{borderColor:'black',marginTop:-3}}> Public</Text>
      

      </View>
      
      <TextInput
        placeholder="คุณกำลังคิดอะไรอยู่..."
        style={styles.input}
        onChangeText={gunInputHandle}
        value={enterData}
      />
    </View>
    <View style={{flex:1,flexDirection:'column',borderWidth:0}}>
        <View style={{flex:1,flexDirection:'row',borderWidth:0.5,margin:2}}>
          <Image style={styles.imgPopup} source={require('../photo/uploadPhoto.jpg')}/>
          <Text style={{marginTop:25,fontSize:20,fontWeight:'bold'}}>รูปภาพ/วิดีโอ</Text>
        </View>
        <View style={{flex:1,flexDirection:'row',borderWidth:0.5,margin:2}}>
        <Image style={{width:50,height:42,marginTop:13,marginLeft:13}} source={require('../photo/tagIcon.png')}/>
        <Text style={{marginTop:25,fontSize:20,fontWeight:'bold',paddingLeft:30,}}>แท็กผู้คน</Text>
        </View>
        <View style={{flex:1,flexDirection:'row',borderWidth:0.5,margin:2}}>
        <Image style={{width:50,height:42,marginTop:13,marginLeft:13}} source={require('../photo/smileFace.jpg')}/>
        <Text style={{marginTop:25,fontSize:20,fontWeight:'bold',paddingLeft:30,}}>ความรู้สึก/กิจกรรม</Text>
        </View>
        <View style={{flex:1,flexDirection:'row',borderWidth:0.5,margin:2}}>
        <Image style={{width:50,height:42,marginTop:13,marginLeft:13}} source={require('../photo/logoLocation.jpg')}/>
        <Text style={{marginTop:25,fontSize:20,fontWeight:'bold',paddingLeft:30,}}>เช็คอิน</Text>
        </View>
        <View style={{flex:1,flexDirection:'row',borderWidth:0.5,margin:2}}>
        <Image style={{width:50,height:42,marginTop:13,marginLeft:13}} source={require('../photo/cameraFacebook.jpg')}/>
        <Text style={{marginTop:25,fontSize:20,fontWeight:'bold',paddingLeft:30,}}>กล้อง</Text>
        </View>
        <View style={{flex:1,flexDirection:'row',borderWidth:0.5,margin:2}}>
        <Image style={{width:50,height:42,marginTop:13,marginLeft:13}} source={require('../photo/liveFacebook.jpg')}/>
        <Text style={{marginTop:25,fontSize:20,fontWeight:'bold',paddingLeft:30,}}>วิดีโอถ่ายทอดสด</Text>
        </View>
    </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContrainer: {
    flexDirection:'row',
    marginTop:10,
   
  },
  publicIcon:{
    flexDirection:'row',
    marginTop:5,
  },
  input: {
    paddingTop:20,
    paddingBottom:160,
    marginTop:50,
    marginLeft:-110,
    fontSize:17,

  },
  testArea:{
    backgroundColor:'#4267B2',
    flexDirection:'row',
    paddingBottom:15,
  },
  sentto:{
    flexDirection:'row',
    justifyContent:'space-between',
    width: '35%',
  },
  postText:{
    marginLeft:200,
    fontSize:18,
    fontWeight:'bold',
    color:'white',
    padding:10

  },
  imgCircles:{
    marginTop:10,
    marginLeft:10,
    width: 45,
    height: 45,
    borderRadius: 200/2,
  },
  imgPopup:{
    marginTop:10,
    marginLeft:0,
    width: 90,
    height: 40,
  }
});

export default GunInput;
