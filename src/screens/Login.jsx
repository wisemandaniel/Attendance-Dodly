import { URL } from 'react-native-url-polyfill/auto';
import React, { useState, useEffect } from 'react'
import { View, SafeAreaView, ActivityIndicator, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'
import Colors from '../constants/colors'
import { useNavigation } from '@react-navigation/native'
import CustomModal from '../components/CustomModal'
import SecondaryButton from '../components/SecondaryButton';
import { vh, vw } from 'react-native-expo-viewport-units'
import Constants from 'expo-constants';
import * as Application from 'expo-application';
import { createClient } from '@supabase/supabase-js'
import AsyncStorage from '@react-native-async-storage/async-storage';

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

  const Login = () => {
    const [inputs, setInputs] = useState({
      name: '',
      mat: '',
      email: '',
      pass: '',
      mac: ''
    })

    const [loading, setLoading] = useState(false);
    const [visibleModal, setVisibleModal] = React.useState(false);
    const [message, setMessage] = useState([])

    const handleOnchange = (text, input) => {
      setInputs(prevState => ({...prevState, [input]: text}));
    };

    useEffect(() => {
      const deviceId = Application.androidId;
      setInputs({
        name: '',
        mat: '',
        email: '',
        pass: '',
        mac: deviceId
      })
    }, [])
    
     // define a function to render the button text based on loading state
     const getButtonText = () => {
      return loading ? <ActivityIndicator size="large" color={Colors.white} /> : <Text>Login</Text>
    };

    const nav = useNavigation()

    const getUser = async () => {
      let { data: users, error } = await supabase
      .from('users')
      .select("*")

      // Filters
      .eq('email', inputs.email);

      return users
    }

    const auth = async () => {
      try {
        setLoading(true)
        const {user, error} = await supabase.auth.signInWithPassword({
          email: inputs.email,
          password: inputs.pass
         })
        if (error) {
          setLoading(false)
          setMessage(error.message)
          setVisibleModal(true)
        } else {
          setLoading(false)
          let { data: users, error } = await supabase
          .from('users')
          .select("*")

          // Filters
          .eq('email', inputs.email);
          console.log(users[0]);
          try {
            await AsyncStorage.setItem('user_att', JSON.stringify(users[0]));
          } catch (error) {
            console.log('async error', error);
          }
          nav.navigate('Dashboard')
        }
      } catch (error) {
        setLoading(false)
        setMessage(error.message)
        setVisibleModal(false)
      }
    }

  return (
    <SafeAreaView style={{ backgroundColor: Colors.white, flex: 1 }}>
      <View style={styles.container}>
        <View>
          <Text style={{textAlign: 'center', fontWeight: 700, fontSize: 28}}>Login</Text>
        </View>
        <View style={styles.inputField}>
           <TextInput
              style={styles.input}
              onChangeText={text => handleOnchange(text, 'email')}
              autoComplete='username'
              // value={'text'}
              borderRadius={20}
              borderColor = {Colors.primary}
              textAlign= 'center'
              placeholder={'Enter your email'}
            />
        </View>
        <View style={styles.inputField}>
           <TextInput
              style={styles.input}
              onChangeText={text => handleOnchange(text, 'pass')}
              autoComplete='username'
              // value={'text'}
              borderRadius={20}
              borderColor = {Colors.primary}
              textAlign= 'center'
              placeholder={'Enter your password'}
            />
        </View>
        <View style={styles.inputField}>
           <TextInput
              style={styles.input}
              onChangeText={text => handleOnchange(text, 'mac')}
              autoComplete='username'
              value={inputs.mac}
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
          <View style={{flexDirection: 'row', justifyContent: 'space-between', width: vw(75)}}>
            <Text style={{alignItems: 'center', justifyContent: 'center'}}>Don't have an account yet? 
            </Text>
            <TouchableOpacity onPress={() => nav.navigate('Registration')}>
              <Text>Register</Text>  
            </TouchableOpacity>
          </View>
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
    marginLeft: 30,
    marginRight: 30,
    marginTop: vh(10),
    // width: vw(85)
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

export default Login
