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
import {Spacing} from '../Data';
import Tasklogo from '../Images/Tasklogo.png';
import Search from '../Images/Search.png';
import Add from '../Images/add.png';

export default Viewtask = ({navigation}) => {
  return (
    <View style = {  styles.mainview}>

      <Image style={styles.tasklogo} source={Tasklogo} />
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          borderColor: '#EDEEEF',
          borderWidth: 1,
          width: '85%',
          alignSelf: 'center',
          borderRadius: Spacing,
          backgroundColor: '#FFFFFF',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <Image source={Search} style={styles.search}></Image>
        <TextInput
          style={{
            width: '70%',
            alignSelf: 'center',
          }}
          placeholder="Please type something"></TextInput>
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator  ={false}>

      <View style={styles.taskview}>
        <TouchableOpacity style={styles.box} >
        <Text style={{fontWeight: 'bold', fontSize: 18}}>Title</Text>
          <Text>
            Lohghhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
          </Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
      <TouchableOpacity style={styles.addiconperent} onPress = {() => navigation.navigate("Addtask")}>
        <Image source={Add} style={styles.addicon}></Image>
      </TouchableOpacity>
    </View>

  );
};

const styles = StyleSheet.create({
  mainview: {
    height : "100%" , position : "relative",  paddingHorizontal : Spacing ,

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
    marginTop: Spacing * 1,
  },
  box: {
    backgroundColor: '#FFFFFF',
    width: '40%',
    marginTop: Spacing * 2,
    borderRadius: Spacing * 2,
    padding: 10,
  },
  addiconperent: {
    position : "absolute",
    bottom  : 10,
    right : 10 
  },
  addicon: {
    height: 80,
    width: 80,
  },
});
