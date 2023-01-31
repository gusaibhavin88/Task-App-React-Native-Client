import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image, TextInput} from 'react-native';
import {Spacing} from '../Data';
import Backarrow from '../Images/backarrow.png';
import Right from "../Images/Right.png"

export default Addtask = ({navigation}) => {
  return (
    <View style={styles.maindis}>
        <View style ={{justifyContent : "space-between" , flexDirection : "row"}}> 
        <TouchableOpacity onPress={() => navigation.navigate("Viewtask")} >
        <Image source={Backarrow} style={styles.backimage} ></Image>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Viewtask")} >
        <Image source={Right} style={styles.backimage} ></Image>
      </TouchableOpacity>
        </View>

      <TextInput placeholder='Title' place style ={{fontSize : 25 , fontWeight : "bold" }} multiline = {false} maxLength  = {31}></TextInput>
      <TextInput placeholder='Start typing' style ={{fontSize : 15 }} multiline = {true} ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  maindis: {
    paddingHorizontal: Spacing,
    paddingVertical: Spacing*1.5,
  },

  backimage: {
    height: 20,
    width: 25,
  },
});
