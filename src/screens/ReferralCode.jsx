import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import Colors from '../constants/colors'
import { useNavigation } from '@react-navigation/native';
import WelcomeCard from '../components/WelcomeCard';
import { vh, vw } from 'react-native-expo-viewport-units';
import ReferralBtn from '../components/PrimaryBtn'
import QuestionCard from '../components/QuestionCard';

const ReferralCode = () => {
    const navigation = useNavigation()

  return (
    <SafeAreaView style={{ backgroundColor: Colors.primary, flex: 1 }}>
      <View style={styles.container}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
    </View>
         <View style={styles.subContainer}>
            <QuestionCard rotate={'-20deg'}>
                <Image style={{width: 117, height: 117, borderRadius: 20}} source={require('../../assets/dan.png')} />
            </QuestionCard>
            <View style={{marginLeft: -20}}>
              <QuestionCard rotate={'20deg'}>
                  <Text style={{color: '#fff', fontSize: 42, fontWeight: 600}}>?</Text>
              </QuestionCard>
            </View>
         </View>

         <View style={styles.card}>
            <WelcomeCard borderRadius={50} bgColor={'#fff'}>
               <Text style={{textAlign: 'center', color: Colors.black, fontSize: 14, padding: vw(1)}}>Do you have a referral code?</Text>
            </WelcomeCard>
         </View>

         <View style={{marginTop: 100, justifyContent: 'space-between', flexDirection: 'row' }}>
            <View style={{width: vw(37)}}>
               <ReferralBtn onPress={() => navigation.navigate('EnterReferralCode')} text={'Yes'} />
            </View>
            <View style={{width: vw(37)}}>
               <ReferralBtn onPress={() => navigation.navigate('NoReferralCode')} text={'No'} />
            </View>
         </View>
      </View>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        width: vw(75),
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    subContainer: {
       marginTop: 100,
       marginLeft: 'auto',
       marginRight: 'auto',
       flexDirection: 'row',
    //    justifyContent: 'center', 
       alignItems: 'center', 
    },
    card: {
        marginTop: 100
    }
})

export default ReferralCode
