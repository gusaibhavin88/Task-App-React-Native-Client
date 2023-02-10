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
import React from 'react';
import Add from '../Images/add.png';
import {Spacing} from '../Data';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Logout } from '../Redux/Action';

const Profile = () => {
  const {user} = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  
  // ------------------------------------
const logoutuser = () => {
  dispatch(Logout())
}
  // ------------------------------------
const changePass = () => {

  
}




  return (
    <View
      style={{flex: 1, padding: Spacing, alignItems: 'center', gap: Spacing}}>
      <Image source={user.avatar.url} style={styles.image}></Image>
      <TouchableOpacity>
        <Text style={{textAlign: 'center', fontSize: 20, color: '#4096F6'}}>
          Change Photo
        </Text>
      </TouchableOpacity>

      <TextInput style={styles.textin} placeholder="Name"></TextInput>
      <View style={styles.updatebutton}>
        <Button color={'#1877F2'} title="Update"></Button>
      </View>
      <TouchableOpacity>
        <Text style={styles.button}>Change Password</Text>
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
});
