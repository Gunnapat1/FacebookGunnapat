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
    Touchable,
    TouchableOpacity,
  } from 'react-native';
  import React, {useState} from 'react';
  import {GunItem,GunInput} from '@components';
  import Icon from 'react-native-vector-icons/FontAwesome';
  import { Images } from '@config';
  import styles from './style';
  
  export default function Home() {
    const [commentOut, setCommentGun] = useState([]);
    const [isAddMode, setIsAddMode] = useState(false);
    const [editItem, seteditItem] = useState();
    const [isModalVisible, setisModalVisible] = useState(false);
    const [ editable , setEditable ] = useState(false);
    const [ editData , setEditData ] = useState('');
  
  
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

    const editDataHandler = data => {
      const edited = commentOut.filter((item)=> item.id !== data?.id )
      edited.push(data) 
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
      <SafeAreaView style={styles.container}>
        <View style={{flexDirection:'row',}}>
         <Text style={styles.FaceFont}>facebook</Text>
         <Icon style={{marginLeft:180,marginTop:5,}} name="search" size={30}/>
         <Image style={styles.imgBox} source={Images.message1}/>
        </View>
        <View style={styles.backgroundProfile}>
          <Image style={styles.imgCircle} source={Images.GunnapatProfile}/>
          <Text style={{marginLeft:18,marginTop:13,fontSize:15,fontWeight:'bold'}} onPress={() => {
            setIsAddMode(true)
            setEditable(false)
            setEditData('')
            }}>คุณกำลังคิดอะไรอยู่</Text>
          <Image style={styles.uploadPho} source={Images.uploadPhoto}/>
        </View>
        <View style={styles.statFacebook}>
          <View style={styles.onlyStat}>
          <Image style={styles.imgCircle} source={Images.smileFace}/>
          <Text style={{marginLeft:5,fontSize:15,fontWeight:'bold',}}>  สถานะ     </Text>
          </View>
          <View style={{flexDirection:'row',backgroundColor:'white',borderRadius:200/2,padding:2,paddingRight:4,marginLeft:30,}}>
          <Image style={styles.imgCircle} source={Images.groupFacebook}/>
          <Text style={{marginLeft:5,fontSize:15,fontWeight:'bold'}}>   กลุ่ม       </Text>
          </View>
          <View style={{flexDirection:'row',backgroundColor:'white',borderRadius:200/2,padding:2,marginLeft:30,}}>
          <Image style={styles.imgCircle} source={Images.liveFacebook}/>
          <Text style={{marginLeft:5,fontSize:15,fontWeight:'bold'}}>   Live      </Text>
          </View>
        </View>
        <GunInput
          visible={isAddMode}
          editMode={editable}
          onAddGun={addDataHandler}
          onCancel={cancelGunAdditionHandler}
          editData={editData}
          editDataHandler={editDataHandler}
        />
        <ScrollView>
          <View>
            {
              commentOut.map((MesseageFacebook,index)=>(
                <GunItem
                  ket={index}
                  post={MesseageFacebook}
                  onPress={() => onPressItem(MesseageFacebook?.type)}
                  DeleteMessage={MesseageFacebook?.id}
                  onDelete={removeGunHandle}
                  setEditable={setEditable}
                  setIsAddMode={setIsAddMode}
                  setEditData={setEditData}
                />
              ))
            }
          </View>
           
        </ScrollView>
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
      </SafeAreaView>
      
    ); 
  }
