import React, { useEffect, useRef, useState } from 'react'
import { View, SafeAreaView, StyleSheet, Text, ActivityIndicator, KeyboardAvoidingView, TextInput, Dimensions} from 'react-native'
import PrimaryButton from '../components/PrimaryButton'
import SecondaryButton from '../components/SecondaryButton'
import Colors from '../constants/colors'
import { useNavigation, useRoute } from '@react-navigation/native'
import { StackActions } from '@react-navigation/native'
import CustomModal from '../components/CustomModal'
import { vh } from 'react-native-expo-viewport-units'
vh

const inputs = Array(4).fill('')
let newInputIndex = 0;

const OtpScreen = () => {
  const navigation = useNavigation();
  const [domain, setDomain] = useState('http://iholda.ew.r.appspot.com')

  const route = useRoute();
  const data = route.params?.otp;

  const [visibleModal, setVisibleModal] = React.useState(false);

  const input = useRef();
  const [OTP, setOTP] = useState({0: '', 1: '', 2: '', 3: ''})
  const [nexInputIndex, setNexInputIndex] = useState(0)
  const [loading, setLoading] = useState(false);

  // define a function to render the button text based on loading state
  const getButtonText = () => {
    return loading ? <ActivityIndicator size="large" color={Colors.primary} /> : <Text>Continue</Text>
  };

  const handleChangeText = (text, index) => {
      const newOTP = {...OTP};
      newOTP[index] = text;
      setOTP(newOTP)

      const lastInputIndex = inputs.length - 1;
      if(!text) newInputIndex = index === 0 ? 0 : index - 1;
      else newInputIndex = index === lastInputIndex ? lastInputIndex : index + 1
      setNexInputIndex(newInputIndex)       
     
  }

  const confirm = () => {

    let url = `${domain}/api/users/confirm-otp/`; 
    let otp = OTP[0]+OTP[1]+OTP[2]+OTP[3]
    
    // set loading to true
    setLoading(true);
    
    fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        otp: otp
      })
    }).then((res) => {
      console.log(res.status);
      if (res.ok) {
        console.log('success');
        navigation.dispatch(StackActions.replace('Profile'))
      } else {
        console.log('wrong');
        setVisibleModal(true)
      }
    }).then((data) => {
      // console.log(JSON.stringify(data.statusText));
    }).catch((err) => {
      console.log(err);
    }).finally(() => {
        // set loading back to false
        setLoading(false);
    })
  }

useEffect(() => {
  input.current.focus()
}, [nexInputIndex]) 

  return (
    <SafeAreaView style={{ backgroundColor: Colors.primary, flex: 1 }}>
      <View style={styles.container}> 
        <Text style={{fontSize: 43.74, color: Colors.white, fontWeight: 'bold'}}>Confirm sms OTP code</Text>
        <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
                alignItems: 'center'
              }}>
            <Text style={{fontSize: 16, color: Colors.white}}>Sent to +237678313613</Text>
            <SecondaryButton onPress={() => navigation.dispatch(StackActions.replace('Registration'))} title={'Change'} color = {Colors.white}/>
        </View>
        <View style={{marginTop: 50}}>
            {/* <OtpInputField /> */}


            <KeyboardAvoidingView>
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

        </View>
        <View style={{...styles.btn, marginTop: 50}}>
           <PrimaryButton 
              title={getButtonText()}
              bgColor={Colors.black} 
              borderRadius={10}
               onPress={confirm}
           />
        </View>
      </View>

      <CustomModal visible={visibleModal}>
        <Text style={{fontSize: 22, textAlign: 'center'}}>
          {'Wrong OTP entered!'}
        </Text>
        <View style={{display: 'flex', flexDirection: 'row', marginTop: vh(7), justifyContent: 'flex-end'}}>
          <SecondaryButton 
            title={'Close'} 
            bgColor={Colors.white}
            onPress={() => {
              setVisibleModal(false);
            }}
          />
        </View>
    </CustomModal>
    <Text>{data}</Text>
   </SafeAreaView>
  )
}

const {width} = Dimensions.get('window')
const inputWidth = Math.round(width / 6);

const styles = StyleSheet.create({
  container: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 90,
  },
  btn: {
    marginLeft: 35,
    marginRight: 35
  },
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

export default OtpScreen
