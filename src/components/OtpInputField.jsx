import React, { useEffect, useRef, useState } from 'react'
import { View, Text, KeyboardAvoidingView, TextInput, Dimensions, StyleSheet } from 'react-native'
import Colors from '../constants/colors'

const inputs = Array(4).fill('')
let newInputIndex = 0;

const OtpInputField = () => {

    const input = useRef();
    const [OTP, setOTP] = useState({0: '', 1: '', 2: '', 3: ''})
    const [nexInputIndex, setNexInputIndex] = useState(0)
    const handleChangeText = (text, index) => {
        const newOTP = {...OTP};
        newOTP[index] = text;
        setOTP(newOTP)

        const lastInputIndex = inputs.length - 1;
        if(!text) newInputIndex = index === 0 ? 0 : index - 1;
        else newInputIndex = index === lastInputIndex ? lastInputIndex : index + 1
        setNexInputIndex(newInputIndex)       

    }

  useEffect(() => {
    input.current.focus()
  }, [nexInputIndex])  
    
  return <KeyboardAvoidingView>
    <View style={styles.otpContainer}>
        {
            inputs.map((inp, index) => {
                return <View  
                    key={index.toString()} 
                    style={styles.inputs} >
                    <TextInput
                        value={OTP[index]}
                        onChangeText={(text) => handleChangeText(text, index)}
                        style={styles.textInputs}
                        placeholder = {'0'}
                        keyboardType={'numeric'} maxLength={1}
                        ref={nexInputIndex === index ? input : null} />
                </View>
            })
        }
    </View>
  </KeyboardAvoidingView>
}

const {width} = Dimensions.get('window')
const inputWidth = Math.round(width / 6);

const styles = StyleSheet.create({
    inputs: {
       width: inputWidth,
       height: inputWidth,
       borderColor: Colors.white,
       borderWidth: 2,
       borderRadius: 50,
       justifyContent: 'center',
       alignItems: 'center'
    },
    textInputs: {
       fontSize: 25,
       paddingHorizontal: 15
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: inputWidth / 4
    }
})

export default OtpInputField
