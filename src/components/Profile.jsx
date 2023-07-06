import React, { useState } from 'react'
import { View, Button, Text, SafeAreaView, StyleSheet, Image, ActivityIndicator, TouchableOpacity } from 'react-native'
import Colors from '../constants/colors'
import CustomTextInput from './CustomTextInput'
import PrimaryButton from './PrimaryButton'
import * as ImagePicker from 'expo-image-picker';
import { StackActions, useNavigation } from '@react-navigation/native'
import { vh } from 'react-native-expo-viewport-units'
import CustomModal from './CustomModal'
import SecondaryButton from './SecondaryButton'
import axios from 'axios'

const Profile = () => {
    const navigation = useNavigation()

    const [errors, setErrors] = React.useState({});
    const [inputs, setInputs] = React.useState({username: ''});
    const [message, setMessage] = useState([])
    const [visibleModal, setVisibleModal] = React.useState(false);
    const [loading, setLoading] = useState(false);

    const [image, setImage] = useState(null);
    const [imageObj, setImageObj] = useState({});

    const handleOnchange = (text, input) => {
        setInputs(prevState => ({...prevState, [input]: text}));
      };
      const handleError = (error, input) => {
        setErrors(prevState => ({...prevState, [input]: error}));
      };


  // define a function to render the button text based on loading state
  const getButtonText = () => {
    return loading ? <ActivityIndicator size="large" color={Colors.primary} /> : <Text>Continue</Text>
  };

    const pickImage = async() => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

        if (!result.canceled) {
          setImage(result.assets[0].uri);
          setImageObj(result.assets[0])
      }
    }

  const uploadImage = async () => {
    try {
      const formdata = new FormData()
      formdata.append("image", imageObj, image)
      
      const res = await axios.post('https://iholda.ew.r.appspot.com/api/users/userprofiles/USER: EQNecX76h8cVxuVA7CiRDcSK02NxI1oq stamp-> 56576c5e-2125-4640-9f92-923026026580/images/', formdata, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgzOTc2NjM5LCJpYXQiOjE2ODMzNzE4MzksImp0aSI6IjA3MDFlZTZmODJkNzRjYmFhNjgyYmYxNTk0ZGNjM2MyIiwidXNlcl9pZCI6MjR9.KUQhtGfGf2IAao_y3X7n4fctoR-7behE12pvOW5aBZk'
          }
      });
      console.log(res.status);
    } catch (error) {
      console.log(error.message);
    }
  }
  
  const saveUsername = () => {
    setLoading(true)

    let query_id = 'USER: ThhBydsuzbP2Nk3mE8KnQkrxovd00ulu stamp-> 577af89f-1660-44d1-85f1-fb266b375dc3'


    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "username": inputs.username
    });

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`https://iholda.ew.r.appspot.com/api/users/${query_id}/`, requestOptions)
      .then(response => response.text())
      .then(result => {
        setMessage('Successful')
        setVisibleModal(true)
        navigation.navigate('CreateUnlockPin')
      })
      .catch(error => console.log('error', error))
    .finally(() => {
      // set loading back to false
      setLoading(false);
    });
  }

  return (
    <SafeAreaView style={{ backgroundColor: Colors.primary, flex: 1 }}>
      <View style={styles.container}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      
    </View>
         <View style={{justifyContent: 'center', alignItems: 'center', ...styles.subContainer}}>
            <Text style={{marginBottom: 20, textAlign: 'center', fontSize: 25, fontWeight: 'bold', color: Colors.white}}>Profile picture</Text>
            <TouchableOpacity onPress={pickImage}>
                {!image && <Image style={{ width: 150, height: 150}} source={require('../../assets/profile.png')}  />}
                {image && <Image source={{ uri: image }} style={{ width: 150, height: 150, borderRadius: 100, borderWidth: 6, borderColor: Colors.secondary }} />}
            </TouchableOpacity>
         </View>

         <View >
            <Text style={{textAlign: 'center', color: Colors.white, fontSize: 25, marginBottom: -10, marginTop: 65}}>Username</Text>
            <CustomTextInput
            onChangeText={text => handleOnchange(text, 'username')}
            onFocus={() => handleError(null, 'text')}
            placeholder="bayuga"
            error={errors.text}
            text
          />
         </View>

         <View style={{marginTop: 100}}>
            <PrimaryButton 
             title={getButtonText()}
             bgColor={Colors.black} 
             borderRadius={10}
            //  onPress={uploadImage}
             onPress={saveUsername}
            //  onPress={() => navigation.navigate('CreateUnlockPin')} 
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
    subContainer: {
       marginTop: 30,
       marginLeft: 'auto',
       marginRight: 'auto'
    }
})

export default Profile
