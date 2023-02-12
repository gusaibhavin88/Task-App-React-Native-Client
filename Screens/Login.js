import React, {Component, useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import {Spacing} from '../Data';
import Logo from '../Images/Logo.png';
import {useDispatch, useSelector} from 'react-redux';
import {LoginAcc, Register} from '../Redux/Action';
import {launchImageLibrary} from 'react-native-image-picker';
import Profile from '../Images/profile.png';

export default Login = ({navigation, route}) => {

  const {user , message , error}  = useSelector((state) => state.auth)
  const dispatch = useDispatch();
// -------------------------------------------------------------


  const [signup, setsignup] = useState(false);
  const [logwrongpass, setlogwrongpass] = useState(false);
  const [logemail, setlogemail] = useState('');

// -------------------------------------------------------------

  const [avatar, setavatar] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [confirmpassword, setconfirmpassword] = useState('');
  const [name, setname] = useState('');
  const [wrongpass, setwrongpass] = useState(false);


  const [logpassword, setlogpassword] = useState('');


  const registerHandle = async() => {
    const myform = new FormData();
    myform.append('email', email);
    myform.append('name', name);
    myform.append('password', password);
    myform.append('avatar', {
      uri: avatar.uri,
      type: avatar.type,
      name: avatar.fileName,
    });
    if (email === '' || name === '' || password === '' || avatar === '') {
      alert('Please fill all the Details');
    } else {
      if (password.length < 8 || password !== confirmpassword) {
        setwrongpass(true);
      } else {
        dispatch(Register(myform));
      }
    }
  };
// -------------------------------------------------------------
  

  const loginHandle = () => {

      const myform = {
        'email': logemail,
        'password': logpassword
      }
      if (logemail === '' || logpassword === '' ) {
        alert('Please fill all the Details');
      }else{
          dispatch(LoginAcc(myform));
    } 
  };
// -------------------------------------------------------------

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
        setavatar(response.assets[0]);
        console.log(avatar);
      },
    );

// -------------------------------------------------------------
// useEffect(() => {
//   if(user){
//     setlogwrongpass(true)
//   }
// },[])

useEffect(() => {
  if(error){
    alert(error)
    dispatch({ type: "clearError" })
  }

},[dispatch,error])

// console.log(error)

  return (
    <View style={styles.mainscreen}>
      <Image source={Logo} style={styles.logo} />
      {signup ? (
        <View style={styles.inputperent}>
          <Image
            source={avatar ? avatar : Profile}
            style={{
              width: 50,
              height: 50,
              alignSelf: 'center',
              marginVertical: 10,
            }}></Image>
          <TouchableOpacity>
            <Text
              style={{
                alignSelf: 'center',
                marginVertical: 10,
                color: '#4096F6',
              }}
              onPress={Gallary}>
              Upload Image
            </Text>
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setemail}
            placeholder="Type email address "></TextInput>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setname}></TextInput>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setpassword}
            placeholder="Password"></TextInput>
          <TextInput
            style={styles.input}
            value={confirmpassword}
            onChangeText={setconfirmpassword}
            placeholder="Confirm Password"></TextInput>
          <Text
            style={[
              {marginTop: 10, color: 'red'},
              wrongpass ? {display: 'flex'} : {display: 'none'},
            ]}>
            {' '}
            * Invalid password or password is not matching
          </Text>
          <TouchableOpacity
            style={{marginTop: Spacing * 3, alignItems: 'center'}}
            onPress={registerHandle}>
            <Text
              style={{
                backgroundColor: '#42B72A',
                borderRadius: 5,
                textAlign: 'center',
                width: 80,
                height: 40,
                alignItems: 'center',
                alignContent: 'center',
                fontWeight: 'bold',
                paddingTop: 9,
              }}>
              Sign up
            </Text>
          </TouchableOpacity>
          <Text
            style={{textAlign: 'center', marginTop: 15, color: '#4096F6'}}
            onPress={() => setsignup(false)}>
            Already logged in click here
          </Text>
        </View>
      ) : 

      // --------------------------------------------------------------------
      
      (
        <View style={styles.inputperent}>
          <TextInput
            style={styles.input}
            value ={logemail}
            onChangeText={setlogemail}
            placeholder="Email address "></TextInput>
          <TextInput
            style={styles.input}
            value ={logpassword}
            onChangeText={setlogpassword}
            placeholder="Password"
            secureTextEntry={true}
            autoCorrect={false}
            activeOutlineColor="#326A81"></TextInput>
          <Text
            style={[
              {marginTop: 10, color: 'red'},
              !logwrongpass ? {display: 'none'} : '',
            ]}>
            {' '}
            * Invalid username or password
          </Text>
          <TouchableOpacity
            style={{marginTop: Spacing * 3, alignItems: 'center'}}
            onPress={loginHandle}>
            <Text
              style={{
                backgroundColor: '#1877F2',
                borderRadius: 5,
                textAlign: 'center',
                width: 80,
                height: 40,
                alignItems: 'center',
                alignContent: 'center',
                fontWeight: 'bold',
                paddingTop: 9,
              }}>
              Log in
            </Text>
          </TouchableOpacity>
          <View
            style={{
              borderTopWidth: 1,
              borderColor: '#EDEEEF',
              marginTop: Spacing * 3,
            }}></View>
          <TouchableOpacity
            style={{marginTop: Spacing * 3, alignItems: 'center'}}
            onPress={() => setsignup(true)}>
            <Text
              style={{
                backgroundColor: '#42B72A',
                borderRadius: 5,
                textAlign: 'center',
                width: 80,
                height: 40,
                alignItems: 'center',
                alignContent: 'center',
                fontWeight: 'bold',
                paddingTop: 9,
              }}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainscreen: {
    backgroundColor: '#F0F2F5',
    height: '100%',
    alignItems: 'center',
    paddingHorizontal: Spacing,
    paddingVertical: Spacing,
    flexDirection: 'column',
  },
  logo: {
    height: 120,
    resizeMode: 'contain',
    marginTop: Spacing * 4,
  },
  input: {
    backgroundColor: 'white',
    width: 300,
    borderRadius: 10,
    marginTop: Spacing * 1.5,
    borderWidth: 1,
    borderColor: '#EDEEEF',
  },
  inputperent: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginTop: 50,
    borderRadius: Spacing * 2,
  },
});
