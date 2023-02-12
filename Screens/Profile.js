import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import {Spacing} from '../Data';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {Loaduser, Logout, updateProfile} from '../Redux/Action';
import { launchImageLibrary } from 'react-native-image-picker';
import Backarrow from '../Images/backarrow.png';



const Profile = ({navigation}) => {
  const {user,error,message} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [name,setname] = useState("")
  const [avatar,setavatar] = useState(user.avatar.url)
  const [newavatar,setnewavatar] = useState("")
  const [inewavatar,setinewavatar] = useState(true)


  const logoutuser = async () => {
    await dispatch(Logout());
  };

  const updateP= async() => {
    const myform = new FormData();
    myform.append('name', name);
    myform.append('avatar', {
      uri: newavatar.uri,
      type: newavatar.type,
      name: newavatar.fileName,
    });
      await  dispatch(updateProfile(myform));
      dispatch(Loaduser())
    }

  const Gallary = () =>
    launchImageLibrary(
      {
        mediaType: 'photo',
        includeBase64: false,
        maxHeight: 200,
        maxWidth: 200,
      },
      response => {
        console.log(response);
       setinewavatar(false);
       setnewavatar(response.assets[0]);
       setavatar(response.assets[0]);
      },
    );



    useEffect(() => {
      if(error){
        alert(error)
        dispatch({ type: "clearError" })
      }
      if(message){
        alert(message)
        dispatch({ type: "clearMessage" })
      }
    
    },[dispatch,error,message])

  return (
    <View
      style={{flex: 1, padding: Spacing, alignItems: 'center', gap: Spacing}}>
    <View style = {{flexDirection : "row" , width : "100%"}}>
    <TouchableOpacity onPress={() => navigation.navigate('Viewtask')}>
      <Image   source={Backarrow} style={styles.backimage}></Image>
    </TouchableOpacity>
    </View>

      <Image source={inewavatar ? {uri : avatar} : newavatar} style={styles.image}></Image>
      <TouchableOpacity onPress={Gallary}>
        <Text style={{textAlign: 'center', fontSize: 20, color: '#4096F6'}} >
          Change Photo
        </Text>
      </TouchableOpacity>

      <TextInput style={styles.textin} placeholder="Name" onChangeText={setname}></TextInput>
      <View style={styles.updatebutton} >
        <Button color={'#1877F2'} title="Update" onPress={updateP} ></Button>
      </View>
      <TouchableOpacity>
        <Text
          style={styles.button}
          onPress={() => navigation.navigate("Changepass")}>
          Change Password
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={logoutuser}>
        <Text style={styles.button}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200,
    alignSelf: 'center',
    marginTop: '20%',
    borderRadius : 100

  },
  textin: {
    width: '80%',
    borderColor: '#E3E5E7',
    borderWidth: 1,
    marginTop: 50,
    backgroundColor: '#F6F6F6',
  },
  updatebutton: {
    width: '80%',
    marginTop: 30,
  },
  button: {
    textAlign: 'center',
    fontSize: 20,
    color: '#333F4D',
    fontWeight: '400',
    marginTop: 20,
  },
  backimage: {
    height: 20,
    width: 25,
  },
});
