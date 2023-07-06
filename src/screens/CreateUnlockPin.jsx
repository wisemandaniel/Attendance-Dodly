import React, { useState } from 'react'
import { View, ActivityIndicator, Text, SafeAreaView, StyleSheet, TextInput } from 'react-native'
import Colors from '../constants/colors'
import PrimaryButton from '../components/PrimaryButton'
import { useNavigation } from '@react-navigation/native'
import { vh } from 'react-native-expo-viewport-units'
import CustomModal from '../components/CustomModal'
import SecondaryButton from '../components/SecondaryButton'

const CustomTextInput = ({
    label,
    iconName,
    error,
    bg,
    type,
    password,
    onFocus = () => {},
    ...props
  }) => {
    const [hidePassword, setHidePassword] = React.useState(password);
    const [isFocused, setIsFocused] = React.useState(false);
    

    return (
      <View style={{marginBottom: 20}}>
        <View
          style={[
            styles.inputContainer,
            {
              borderColor: error
                ? 'pink'
                : isFocused
                ? Colors.white
                : Colors.white,
              alignItems: 'center',
            },
          ]}>
          <TextInput
            placeholderTextColor={'#fff'}
            keyboardType={type}
            autoCorrect={false}
            onFocus={() => {
              onFocus();
              setIsFocused(true);
            }}
            onBlur={() => setIsFocused(false)}
            secureTextEntry={hidePassword}
            style={{color: Colors.white, flex: 1, padding: 10, borderWidth: 0, textAlign: 'center' }}
            {...props}
          />
        </View>
      </View>
    );
  };


const CreateUnlockPin = () => {
    const navigation = useNavigation()
    const [errors, setErrors] = React.useState({});
    const [inputs, setInputs] = React.useState({pin: '', pinAgain: ''});
    const [loading, setLoading] = useState(false);
    const [visibleModal, setVisibleModal] = React.useState(false);
    const [message, setMessage] = useState([])

    const handleOnchange = (text, input) => {
        setInputs(prevState => ({...prevState, [input]: text}));
    };

    const handleError = (error, input) => {
      setErrors(prevState => ({...prevState, [input]: error}));
    };
      

      // define a function to render the button text based on loading state
      const getButtonText = () => {
        return loading ? <ActivityIndicator size="large" color={Colors.primary} /> : <Text>Complete</Text>
      };

      const createPin = () => {
        setLoading(true)

        console.log('Pin: ', inputs.pin, 'Pin again: ', inputs.pinAgain);

        let query_id = 'USER: vMojVTSAXwm2OUXBufaHihkzshpuGmu2 stamp-> 8921fbcd-2122-4e7f-b5b1-b53a5a11697d'
    
    
        var myHeaders = new Headers();
        
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgzOTc2NjM5LCJpYXQiOjE2ODMzNzE4MzksImp0aSI6IjA3MDFlZTZmODJkNzRjYmFhNjgyYmYxNTk0ZGNjM2MyIiwidXNlcl9pZCI6MjR9.KUQhtGfGf2IAao_y3X7n4fctoR-7behE12pvOW5aBZk");

        myHeaders.append("Content-Type", "application/json");
    
        var raw = JSON.stringify({
          "pin": inputs.pin
        });
    
        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        if (inputs.pin == inputs.pinAgain) {
          fetch(`https://iholda.ew.r.appspot.com/api/users/${query_id}/pin/`, requestOptions)
          .then(response => {
            if (response.status == 200) {
              navigation.navigate('ReferralCode')
            } else {
              setMessage('Not successful! please try again')
              setVisibleModal(true)
            }
          })
          .catch(error => console.log('error', error))
          .finally(() => {
            // set loading back to false
            setLoading(false);
          });
        } else {
          setMessage('Pins do not match')
          setVisibleModal(true)
          setLoading(false)
        }
    
      }

  return (
    <SafeAreaView style={{ backgroundColor: Colors.primary, flex: 1 }}>
      <View style={styles.container}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
    </View>
         <View style={{marginTop: vh(12)}}>
            <Text style={{color: '#fff', fontSize: 45, fontWeight: 700}}>Create your unlock pin</Text>
         </View>
         <View style={{marginTop: vh(10)}} >
            <View style={{marginBottom: vh(4)}}>
                <CustomTextInput
                    onChangeText={text => handleOnchange(text, 'pin')}
                    onFocus={() => handleError(null, 'text')}
                    placeholder="Pin"
                    error={errors.text}
                    text
                />
            </View>
            <CustomTextInput
                onChangeText={text => handleOnchange(text, 'pinAgain')}
                onFocus={() => handleError(null, 'text')}
                placeholder="Re-enter"
                error={errors.text}
                text
            />
         </View>

         <View style={{marginTop: 100}}>
            <PrimaryButton 
             title={getButtonText()}
             bgColor={Colors.black} 
             borderRadius={10}
             onPress={createPin}
            //  onPress={() => navigation.navigate('ReferralCode')}
            />
         </View>
      </View>

      <CustomModal visible={visibleModal}>
        <Text style={{fontSize: 22, textAlign: 'center'}}>
          {message}
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
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    inputContainer: {
        height: 55,
        backgroundColor: Colors.primary,
        flexDirection: 'row',
        borderColor: Colors.white,
        paddingHorizontal: 15,
        borderRadius: 50,
        borderWidth: 2,
    },
    subContainer: {
       marginTop: 30,
       marginLeft: 'auto',
       marginRight: 'auto'
    }
})

export default CreateUnlockPin
