import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {SearchBar} from 'react-native-screens';
import {Spacing} from '../Data';
import Tasklogo from '../Images/Tasklogo.png';
import Search from '../Images/Search.png';

export default Addtask = () => {
  return (
    <ScrollView style={styles.mainview}>
      <Image style={styles.tasklogo} source={Tasklogo} />
      <TouchableOpacity style = {{flexDirection: "row",            borderColor: '#EDEEEF',
            borderWidth: 1,
            width: '85%',
            alignSelf: 'center',
            borderRadius: Spacing,
            backgroundColor: '#FFFFFF',
            alignItems : "center",
            justifyContent : "space-evenly"}}>
        <Image source={Search} style={styles.search}></Image>
        <TextInput
          style={{
            width: '70%',
            alignSelf: 'center',
          }} placeholder = "Please type something"></TextInput>
      </TouchableOpacity>
      <View style={styles.taskview}>
        <View style={styles.box}>
          <Text style = {{fontWeight : "bold" ,fontSize : 18}}>Title</Text>
          <Text>Lohghhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhghhhhhhhhhhhhhhhhhhhhhhhh</Text>
        </View>
        <View style={styles.box}>
          <Text style = {{fontWeight : "bold" ,fontSize : 18}}>Title</Text>
          <Text>Lohghhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</Text>
        </View>
        <View style={styles.box}>
          <Text style = {{fontWeight : "bold" ,fontSize : 18}}>Title</Text>
          <Text>Lohghhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</Text>
        </View>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainview: {
    paddingHorizontal: Spacing,
  },
  tasklogo: {
    height: 150,
    width: 100,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  search: {
    height: 30,
    width: 30,
  },
  taskview: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: Spacing * 4,
  },
  box: {
    backgroundColor: '#FFFFFF',
    width: '40%',
    marginTop : Spacing*2,
    borderRadius : Spacing *2,
    padding : 10
  },
});
