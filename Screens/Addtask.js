import React, {Component, useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import {Spacing} from '../Data';
import Backarrow from '../Images/backarrow.png';
import Right from '../Images/Right.png';
import {useDispatch, useSelector} from 'react-redux';
import {addTasksitem, Loaduser} from '../Redux/Action';

export default Addtask = ({navigation}) => {
  const [title, settitle] = useState('');
  const [description, setdescription] = useState('');
  const {user,error} = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const addtaskitem = async () => {
    const task = {
      title: title,
      description: description,
    };
    await dispatch(addTasksitem(task));
    dispatch(Loaduser());
  };

  useEffect(() => {
    if(error){
      alert(error)
      dispatch({ type: "clearError" })
    }
  
  },[dispatch,error])

  return (
    <View style={styles.maindis}>
      <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => navigation.navigate('Viewtask')}>
          <Image source={Backarrow} style={styles.backimage}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={addtaskitem}>
          <Image source={Right} style={styles.backimage}></Image>
        </TouchableOpacity>
      </View>

      <TextInput
        placeholder="Title"
        style={{fontSize: 15, fontWeight: '600' ,marginTop : Spacing}}
        multiline={false}
        maxLength={31}
        onChangeText={settitle}></TextInput>
      <TextInput
        placeholder="Start typing"
        style={{fontSize: 15}}
        multiline={true}
        onChangeText={setdescription}></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  maindis: {
    paddingHorizontal: Spacing,
    paddingVertical: Spacing * 1.5,
  },

  backimage: {
    height: 20,
    width: 25,
  },
});
