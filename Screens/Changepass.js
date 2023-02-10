import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  TextInput,
} from 'react-native';
import React from 'react';
import {Spacing} from '../Data';
import Add from '../Images/add.png';

export default function Changepass() {
  return (
    <View
      style={{flex: 1, padding: Spacing, alignItems: 'center', gap: Spacing}}>
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

      <TextInput style={styles.textin} placeholder="Old password"></TextInput>
      <TextInput style={styles.textin} placeholder="New Password"></TextInput>
      <View style={styles.updatebutton}>
        <Button color={'#1877F2'} title="Update"></Button>
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
});
