import { StyleSheet, Text, View,Image ,TouchableOpacity, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { Spacing } from '../Data'
import Logo from '../Images/Logo.png';
import { useDispatch } from 'react-redux';
import { Otpverification } from '../Redux/Action';


const Otp = () => {

    const dispatch = useDispatch()

const [otp , setotp] = useState("")

const submitotp = {
    if(otp){
       dispatch(Otpverification(otp))

    }
}

  return (
    <View
    style={{flex: 1, padding: Spacing, alignItems: 'center', gap: Spacing}}>

    <Image source={Logo} style={styles.logo} />
    <View style ={{marginTop : Spacing*10}}>
    <TextInput    style={styles.input}
    value ={otp}
    onChangeText = {setotp}
            placeholder="Please enter otp "></TextInput>
      <View style={styles.updatebutton}>
        <Button color={'#1877F2'} title="Submit"></Button>
      </View>
    </View>


    </View>
  )
}

export default Otp

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'white',
        width: 300,
        borderRadius: 10,
        marginTop: Spacing * 1.5,
        borderWidth: 1,
        borderColor: '#EDEEEF',
      },
      logo: {
        height: 120,
        resizeMode: 'contain',
        marginTop: Spacing * 4,
        marginTop : Spacing *5
      },
      updatebutton :{
        width : 200,
        marginTop: 20,
        alignSelf :"center"
      }
})