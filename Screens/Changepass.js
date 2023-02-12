import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {Spacing} from '../Data';
import Add from '../Images/add.png';
import {Changeaccountpassword} from '../Redux/Action';
import {useDispatch} from 'react-redux';
import Backarrow from '../Images/backarrow.png';



export default function Changepass({navigation}) {
  const [oldPassword, setoldPassword] = useState('');
  const [newPassword, setnewPassword] = useState('');
  const dispatch = useDispatch();

  const changePass = async () => {
    const change = {
      oldPassword: oldPassword,
      newPassword: newPassword,
    };
    await dispatch(Changeaccountpassword(change));
  };

  return (
    <View
      style={{flex: 1, padding: Spacing, alignItems: 'center', gap: Spacing}}>
        <View style = {{flexDirection : "row" , width : "100%"}}>
        <TouchableOpacity onPress={() => navigation.navigate('Viewtask')}>
          <Image   source={Backarrow} style={styles.backimage}></Image>
        </TouchableOpacity>
        </View>

      <Text
        style={{
          textAlign: 'center',
          fontSize: 20,
          color: '#4096F6',
          marginTop: 100,
          fontWeight: 'bold',
        }}>
        Change Password
      </Text>

      <TextInput
        style={styles.textin}
        onChangeText={setoldPassword}
        placeholder="Old password"></TextInput>
      <TextInput
        style={styles.textin}
        onChangeText={setnewPassword}
        placeholder="New Password"></TextInput>
      <View style={styles.updatebutton}>
        <Button color={'#1877F2'} title="Update" onPress={changePass}></Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200,
    alignSelf: 'center',
    marginTop: '20%',
  },
  textin: {
    width: '70%',
    borderColor: '#E3E5E7',
    borderWidth: 1,
    marginTop: 30,
    backgroundColor: '#F6F6F6',
  },
  updatebutton: {
    width: '70%',
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
