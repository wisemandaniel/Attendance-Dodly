import { URL } from 'react-native-url-polyfill/auto';
import React, { useState, useEffect } from 'react'
import { View, SafeAreaView, ActivityIndicator, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'
import Colors from '../constants/colors'
import { useNavigation } from '@react-navigation/native'
import CustomModal from '../components/CustomModal'
import { vh, vw } from 'react-native-expo-viewport-units'
import Constants from 'expo-constants';
import * as Application from 'expo-application';
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fooiwhusdtnbmbizrgog.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZvb2l3aHVzZHRuYm1iaXpyZ29nIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM1NTA5MjUsImV4cCI6MTk5OTEyNjkyNX0.SnbibjqI0h0O6cc9FUdiSa-A4ASEhhOLrUZilOjniAM'
const supabase = createClient(supabaseUrl, supabaseKey)

const Inpt = ({placeholder}) => {
  const [text, onChangeText] = React.useState('');

  return (
    <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        autoComplete='username'
        value={text}
        borderRadius={20}
        borderColor = {Colors.primary}
        textAlign= 'center'
        placeholder={placeholder}
      />
  );
}

const Btn = ({btnText, onPress}) => {

  return (
    <TouchableOpacity onPress={onPress} style={{backgroundColor: Colors.primary, width: vw(80), alignItems: 'center', justifyContent: 'center', borderRadius: 50}}>
      <Text style={{padding: vw(2), fontSize: 18, color: Colors.white}}>{btnText}</Text>
    </TouchableOpacity>
  );
}

  const Registration = () => {
    const [inputs, setInputs] = useState({
      name: '',
      role: '',
      email: '',
      password: '',
      device_id: ''
    })

    const [loading, setLoading] = useState(false);

    const handleOnchange = (text, input) => {
      setInputs(prevState => ({...prevState, [input]: text}));
    };

    useEffect(() => {
      const deviceId = Application.androidId;
      console.log('D: ', deviceId);
      setInputs({
        name: '',
        email: '',
        password: '',
        role: 'student',
        device_id: deviceId
      })
    }, [])
    
     // define a function to render the button text based on loading state
     const getButtonText = () => {
      return loading ? <ActivityIndicator size="large" color={Colors.white} /> : <Text>Register</Text>
    };

    const nav = useNavigation()
    const register = async () => {
      try {
        setLoading(true)
        const { data, error } = await supabase
        .from('users')
        .insert(inputs)

        if (error) {
          setLoading(false)
          alert(error.message)
        } else {
          setLoading(false)
          alert(data)
        }
      } catch (error) {
        setLoading(false)
        console.log(error.message);
      }
    }

    const auth = async () => {
      try {
        setLoading(true)
        const {user, error} = await supabase.auth.signUp({
          email: inputs.email,
          password: inputs.password
         })
        if (error) {
          setLoading(false)
          console.log('Error registering user:', error.message);
        } else {
          setLoading(false)
          console.log('User registered successfully:', user);
          register()
        }
      } catch (error) {
        setLoading(false)
        console.log('Error registering user:', error.message);
      }
    }

  return (
    <SafeAreaView style={{ backgroundColor: Colors.white, flex: 1 }}>
      <View style={styles.container}>
        <View>
          <Text style={{textAlign: 'center', fontWeight: 700, fontSize: 28}}>Sign up</Text>
        </View>
        <View style={styles.inputField}>
            <TextInput
              style={styles.input}
              onChangeText={text => handleOnchange(text, 'name')}
              autoComplete='username'
              borderRadius={20}
              borderColor = {Colors.primary}
              textAlign= 'center'
              placeholder={'Enter your name'}
            />
        <View style={styles.inputField}>
           <TextInput
              style={styles.input}
              onChangeText={text => handleOnchange(text, 'email')}
              autoComplete='username'
              borderRadius={20}
              borderColor = {Colors.primary}
              textAlign= 'center'
              placeholder={'Enter your email'}
            />
        </View>
        <View style={styles.inputField}>
           <TextInput
              style={styles.input}
              onChangeText={text => handleOnchange(text, 'password')}
              autoComplete='username'
              borderRadius={20}
              borderColor = {Colors.primary}
              textAlign= 'center'
              placeholder={'Enter your password'}
            />
        </View>
        <View style={styles.inputField}>
           <TextInput
              style={styles.input}
              onChangeText={text => handleOnchange(text, 'device_id')}
              autoComplete='username'
              value={inputs.device_id}
              borderRadius={20}
              borderColor = {Colors.primary}
              textAlign= 'center'
              editable={false}
              placeholder={'Mac address'}
            />
        </View>
        <View style={styles.inputField}>
           <Btn onPress={auth} btnText={getButtonText()} />
        </View>
        <View style={{...styles.inputField}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', width: vw(68)}}>
            <Text style={{alignItems: 'center', justifyContent: 'center'}}>Already have an account? 
            </Text>
            <TouchableOpacity onPress={() => nav.navigate('Login')}>
              <Text>Login</Text>  
            </TouchableOpacity>
          </View>
        </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: vh(10),
  },
  btn: {
    marginLeft: 35,
    marginRight: 35
  },
  input: {
    height: 40,
    margin: 12,
    width: vw(80),
    borderWidth: 1,
    padding: 10,
  },
  inputField: {
    marginTop: vh(3),
    alignItems: 'center',
    justifyContent: 'center',
    width: vw(80)
  }
})

export default Registration
