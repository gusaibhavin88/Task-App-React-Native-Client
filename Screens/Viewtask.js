import React, {Component, useEffect, useState} from 'react';
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
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import Delete from "../Images/delete.jpg"
import { deleteTaskItem, Loaduser } from '../Redux/Action';


export default Viewtask = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {user,error,message} = useSelector(state => state.auth);
  const [Profileimage, setProfileimage] = useState('');
  const [userdata , setuserdata] = useState(user)
  const [avatar,setavatar] = useState(user?.avatar.url)
  const [deletebutton,setdeletebutton] = useState(false)
  console.log(user)

const deletetask = async(taskId) => {
 await dispatch(deleteTaskItem(taskId))

//  dispatch(Loaduser())

 console.log(typeof(taskId))
 console.log(taskId)
}

useEffect(() => {
  if(error){
    alert(error)
    dispatch({ type: "clearError" })
  }

},[dispatch,error])

  return (
    <View style={styles.mainview}>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Image
          source={user?{uri : avatar} : avatar} 
          style={{
            height: 40,
            borderRadius :30 ,
            width: 40,
            position: 'absolute',
            right: 0,
            top: 10,
          }}></Image>
      </TouchableOpacity>
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.taskview}>
          {user && user.task.map(data => {
            return(
              <TouchableOpacity style={styles.box} key ={data._id} delayLongPress = {2000}  onLongPress= {() => setdeletebutton(!deletebutton)}>
                <TouchableOpacity  style ={[styles.pdelete]} onPress ={() => deletetask(Number(data._id))}>
                <Image source={Delete}  style={[deletebutton? {display : "flex"} : {display : "none"},styles.delete]}></Image> 
                </TouchableOpacity>
              <Text style={{fontWeight: 'bold', fontSize: 18}}>
                {data.title}
              </Text>
              <Text style={{marginTop : Spacing}}>
                {data.description}
              </Text>
            </TouchableOpacity>
            )
          })}
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.addiconperent}
        onPress={() => navigation.navigate('Addtask')}>
        <Image source={Add} style={styles.addicon}></Image>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainview: {
    height: '100%',
    position: 'relative',
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
    justifyContent: "space-evenly",
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: Spacing * 1,
  },
  box: {
    backgroundColor: '#FFFFFF',
    width: '45%',
    marginTop: Spacing * 2,
    borderRadius: Spacing * 2,
    padding: Spacing,

  },
  addiconperent: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  addicon: {
    height: 80,
    width: 80,
  },
  delete: {
    height: 35,
    width: 35,
    position : "absolute",
    right : 0,
    top : 0
  },
  pdelete: {
    height: 35,
    width: 35,
    position : "absolute",
    right : 10,
    top : 10
  },
});
