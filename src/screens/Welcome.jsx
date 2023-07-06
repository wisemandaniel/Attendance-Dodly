import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, StatusBar, Image } from 'react-native'
import Colors from '../constants/colors'
import PrimaryButton from '../components/PrimaryButton'
import { useNavigation } from '@react-navigation/native'
import { vh, vw } from 'react-native-expo-viewport-units'

const Welcome = () => {
  const navigation = useNavigation();

  const connectDevice = () => {
    navigation.navigate('Registration')
  }

  return (
   <SafeAreaView style={{ backgroundColor: Colors.white, flex: 1 }}>
      <View style={styles.upper}>
        <Text style={{fontSize: 20, fontWeight: 600}}>Hello, Welcome to AAT</Text>
      </View>
      <View style={styles.lower}>
        <View style={styles.textView}>
           <Text style={styles.text1}>Easy way to confirm your attendace</Text>
        </View>
        <Text style={styles.text2}>Recording your attendace with zero stress</Text>
        <PrimaryButton onPress={connectDevice} borderRadius={50} title={'Connect your device'} bgColor={Colors.primary} />
      </View>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 30,
    marginRight: 30,
    justifyContent: 'center',
    marginTop: vh(40),
    // alignItems: 'center'
    // backgroundColor: 'red'
  },
  upper: {
    backgroundColor: '#eceef0',
    height: vh(50),
    alignItems: 'center',
    justifyContent: 'center'
  },
  lower: {
    backgroundColor: '#fff',
    height: vh(50),
    alignItems: 'center',
    marginTop: vh(5)
    // justifyContent: 'center'
  },
  text1: {
    color: '#01000f',
    fontWeight: 900,
    fontSize: 24,
    textAlign: 'center'
  },
  text2: {
    color: '#01000f',
    fontSize: 16,
    textAlign: 'center',
    width: vw(95),
    marginTop: vh(10),
    marginBottom: vh(5)
  },
  textView: {
    width: vw(85)
  }
})

export default Welcome
