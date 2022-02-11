import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  Modal,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Gunitem from './compontents/Gunitem';
import GunInput from './compontents/GunInput';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function App() {
  const [commentOut, setCommentGun] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const [editItem, seteditItem] = useState();
  const [isModalVisible, setisModalVisible] = useState(false);


  const onPressItem = (item) =>{
    setisModalVisible(true);
    setCommentGun(item.text);
    seteditItem(item.id);
  };

  const handleEditItem =(editItem) => {
    const newData = data.map(item=>{
      if(item.id == editItem){
        item.text = commentOut;
        return item;
      }
      return item;
    })
    setCommentGun(newData);
    setIsAddMode(!isAddMode);
  }

  const addDataHandler = gunTitle => {
    setCommentGun(currentGoals => [
      ...currentGoals,
      {id: Math.random().toString(), type: gunTitle},
    ]);
    setIsAddMode(false);
  };

  const removeGunHandle = gunId => {
    setCommentGun(currentGoals => {
      return currentGoals.filter(gunnapat => gunnapat.id !== gunId);
    });
  };

  const cancelGunAdditionHandler = () => {
    setIsAddMode(false);
  };
  
  const onPressSaveEdit = () =>{
    handleEditItem(editItem);
    setisModalVisible(false);
  }

  return (
    <View style={styles.root}>

      <View style={{flexDirection:'row',}}>
       <Text style={styles.FaceFont}>facebook</Text>
       <Icon style={{marginLeft:180,marginTop:5,}} name="search" size={30}/>
       <Image style={styles.imgBox} source={require('./photo/message1.png')} />
      </View>
      <View style={styles.backgroundProfile}>
        <Image style={styles.imgCircle} source={require('./photo/GunnapatProfile.jpg')}/>
        <Text style={{marginLeft:18,marginTop:13,fontSize:15,fontWeight:'bold'}} onPress={() => setIsAddMode(true)}>คุณกำลังคิดอะไรอยู่</Text>
        <Image style={styles.uploadPho} source={require('./photo/uploadPhoto.jpg')}/>
      </View>
      <View style={styles.statFacebook}>
        <View style={styles.onlyStat}>
        <Image style={styles.trippleIcon} source={require('./photo/smileFace.jpg')}/>
        <Text style={{marginLeft:5,fontSize:15,fontWeight:'bold',}}>  สถานะ     </Text>
        </View>
        <View style={{flexDirection:'row',backgroundColor:'white',borderRadius:200/2,padding:2,paddingRight:4,marginLeft:30,}}>
        <Image style={styles.trippleIcon} source={require('./photo/groupFacebook.png')}/>
        <Text style={{marginLeft:5,fontSize:15,fontWeight:'bold'}}>   กลุ่ม       </Text>
        </View>
        <View style={{flexDirection:'row',backgroundColor:'white',borderRadius:200/2,padding:2,marginLeft:30,}}>
        <Image style={styles.trippleIcon} source={require('./photo/liveFacebook.jpg')}/>
        <Text style={{marginLeft:5,fontSize:15,fontWeight:'bold'}}>   Live      </Text>
        </View>
      </View>
      <GunInput
        visible={isAddMode}
        onAddGun={addDataHandler}
        onCancel={cancelGunAdditionHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={commentOut}
        renderItem={MesseageFacebook => (
          <Gunitem
           header={MesseageFacebook.item.type}  
           onPress={() => onPressItem(MesseageFacebook.item.type)}
           DeleteMessage={MesseageFacebook.item.id}
           onDelete={removeGunHandle}
              
          />

        )}>
        </FlatList>
        <Modal animationType='slide' visible={isModalVisible} onRequestClose={() => setisModalVisible(false)}>
          <TextInput
            onChangeText={(text) => setCommentGun(text)}
            defaultValue={commentOut}
            editable={true}
            multiline={false}
            maxLength={100}
          />
          <TouchableOpacity onPress={()=> onPressSaveEdit()}>
            <Text>SAVE</Text>

          </TouchableOpacity>

        </Modal>

    </View>
  ); 
}

const styles = StyleSheet.create({
  root: {
    padding: 1,
  },
  FaceFont: {
    paddingLeft: 5,
    marginBottom: 1,
    fontWeight: 'bold',
    fontSize: 30,
    color: '#4267B2',
  },
  SearchMessage:{
    flexDirection:'column',
    alignItems:'flex-end',
    
  },
  imgBox:{
    marginTop:5,
    marginLeft:15,
    height: 30,
    width: 30,
  },
  imgCircle:{
    marginTop:7,
    marginLeft:0,
    width: 45,
    height: 45,
    borderRadius: 200/2,
  },
  backgroundProfile:{
    padding:20,
    flexDirection:'row',
    backgroundColor:'#F7F7F7'
  },
  uploadPho:{
    marginLeft:90,
    width:70,
    height:60,
    borderRadius: 200/2,
  },
  statFacebook:{
    padding:12,
    flexDirection:'row',
    backgroundColor:'#F3F3F3'
  },
  trippleIcon:{
    width:26,
    height:26,
    borderRadius: 200/2,
    backgroundColor: '#C9C9C8'

  },
  onlyStat:{
    flexDirection:'row',
    backgroundColor:'white',
    borderRadius:200/2,
    padding:2,
  },
});
