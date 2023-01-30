import React, {Component, useState} from 'react';
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

export default Signup = () => {
  const [signup, setsignup] = useState(false);
  return (
    <View style={styles.mainscreen}>
      <Image source={Logo} style={styles.logo} />
      <View style={styles.inputperent}>
        <TextInput
          style={styles.input}
          placeholder="Email address "></TextInput>
        <TextInput style={styles.input} placeholder="First Name"></TextInput>
        <TextInput style={styles.input} placeholder="Last Name"></TextInput>
        <TextInput style={styles.input} placeholder="Password"></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"></TextInput>
        <TextInput
          style={styles.input}
          placeholder="Contact Number"></TextInput>
        <Text style={{display: 'none', marginTop: 10, color: 'red'}}>
          {' '}
          * Invalid username or password
        </Text>
        <TouchableOpacity
          style={{marginTop: Spacing * 3, alignItems: 'center'}}>
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

        <Text style={{textAlign: 'center', marginTop: 10, color: '#4096F6'}}>
          Already logged in click here
        </Text>
      </View>
      {signup && <Text>hhh</Text>}
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
