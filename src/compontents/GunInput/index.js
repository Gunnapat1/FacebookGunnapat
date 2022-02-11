import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Fontisto';
import {View, Text, StyleSheet, Button, TextInput,Modal,Image, Touchable} from 'react-native';
import { Images } from '@config';
import { SafeAreaView } from 'react-native-safe-area-context';
import RNTextArea from "@freakycoder/react-native-text-area";

const GunInput = props => {
  const { editMode , editData ,editDataHandler } = props;
  const [enterData, setData] = useState('');

  const gunInputHandle = enteredText => {
    setData(enteredText);
  };
  const addGunHandler = () => {
    if(editData && editMode){
      editData.type = enterData;
      editDataHandler(editData)
    }else{
      props.onAddGun(enterData);
      setData('');
    }
    
  };
  useEffect(()=> {
    if(editData?.type)setData(editData?.type)
    else setData('')
    
  },[editData?.type])
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.testArea}>
        <Icon style={{marginTop:15,marginLeft:5,}}  name="angle-left" size={15} color="white" onPress={props.onCancel}/>
        <Text style={{fontWeight:'bold',fontSize:20,marginTop:10,color:'white'}}>  สร้างโพสต์</Text>
        <Text style={styles.postText} onPress={addGunHandler}>{editMode ? 'UPDATE':'POST'}</Text>
      </View>
      <View style={styles.inputContrainer}>
        <Image style={styles.imgCircles} source={Images.GunnapatProfile}/>
        <Text style={{fontSize:16,fontWeight:'bold',marginLeft:10,marginTop:7,color:'black'}}>Gunnapat Yamsumroul </Text>
        <View style={{marginTop:30,marginLeft:-160,flexDirection:'row',paddingRight:0}}>
          <Icon style={{marginLeft:-5}} name="earth" size={15}/>
          <Text style={{borderColor:'black',marginTop:-3}}> Public</Text>
        

        </View>
      </View>
      <View style={styles.setComment}>
          {
          !editMode ? (
            <RNTextArea
              style={styles.input}
              maxCharLimit={500}
              placeholderTextColor="black"
              exceedCharCountColor="#990606"
              placeholder="คุณกำลังคิดอะไรอยู่..."
              onChangeText={gunInputHandle}
              textAlignVertical='top'
              charCountColor={'transparent'}
            />
          ):(
            <RNTextArea
              style={styles.input}
              maxCharLimit={500}
              placeholderTextColor="black"
              exceedCharCountColor="#990606"
              placeholder="คุณกำลังคิดอะไรอยู่..."
              onChangeText={gunInputHandle}
              textAlignVertical='top'
              charCountColor={'transparent'}
              value={enterData}
              autoFocus={true}
            />
          )
        }
        </View>
      <View style={{flex:1,flexDirection:'column',borderWidth:0}}>
          <View style={{flex:1,flexDirection:'row',borderWidth:0.5,margin:2}}>
            <Image style={styles.imgPopup} source={Images.uploadPhoto}/>
            <Text style={{marginTop:25,fontSize:20,fontWeight:'bold'}}>รูปภาพ/วิดีโอ</Text>
          </View>
          <View style={{flex:1,flexDirection:'row',borderWidth:0.5,margin:2}}>
          {/* <Image style={{width:50,height:42,marginTop:13,marginLeft:13}} source={require('')}/> */}
          <Text style={{marginTop:25,fontSize:20,fontWeight:'bold',paddingLeft:30,}}>แท็กผู้คน</Text>
          </View>
          <View style={{flex:1,flexDirection:'row',borderWidth:0.5,margin:2}}>
          <Image style={{width:50,height:42,marginTop:13,marginLeft:13}} source={Images.smileFace}/>
          <Text style={{marginTop:25,fontSize:20,fontWeight:'bold',paddingLeft:30,}}>ความรู้สึก/กิจกรรม</Text>
          </View>
          <View style={{flex:1,flexDirection:'row',borderWidth:0.5,margin:2}}>
          <Image style={{width:50,height:42,marginTop:13,marginLeft:13}} source={Images.logoLocation}/>
          <Text style={{marginTop:25,fontSize:20,fontWeight:'bold',paddingLeft:30,}}>เช็คอิน</Text>
          </View>
          <View style={{flex:1,flexDirection:'row',borderWidth:0.5,margin:2}}>
          <Image style={{width:50,height:42,marginTop:13,marginLeft:13}} source={Images.cameraFacebook}/>
          <Text style={{marginTop:25,fontSize:20,fontWeight:'bold',paddingLeft:30,}}>กล้อง</Text>
          </View>
          <View style={{flex:1,flexDirection:'row',borderWidth:0.5,margin:2}}>
          <Image style={{width:50,height:42,marginTop:13,marginLeft:13}} source={Images.liveFacebook}/>
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
  setComment :{
    marginVertical : 10
  },
  input: {
    fontSize:17,
    backgroundColor: '#f3f3f3',
    justifyContent : 'flex-start',
    textAlignVertical: 'top',
  },
  testArea:{
    backgroundColor:'#4267B2',
    flexDirection:'row',
    paddingBottom:15,
    alignItems:'center',
  },
  sentto:{
    flexDirection:'row',
    justifyContent:'space-between',
    width: '35%',
  },
  postText:{
    right: 0,
    fontSize:18,
    fontWeight:'bold',
    color:'white',
    padding:10,
    position:'absolute'

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
