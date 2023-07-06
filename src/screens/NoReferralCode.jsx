import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import Colors from '../constants/colors'
import { useNavigation } from '@react-navigation/native';
import WelcomeCard from '../components/WelcomeCard';
import { vh, vw } from 'react-native-expo-viewport-units';
import ReferralBtn from '../components/PrimaryBtn'

const Card = ({children, borderRadius, backgroundColor, width, padding, mt, mb}) => {
    return(
        <View style={{marginBottom: mb, marginTop: mt, padding: padding, width: width, backgroundColor: backgroundColor, borderRadius: borderRadius, ...styles.cardContainer}}>
           {children}
        </View>
    );
}

const NoReferralCode = () => {
    const navigation = useNavigation()

  return (
    <SafeAreaView style={{ backgroundColor: Colors.primary, flex: 1 }}>
      <View style={styles.container}>
        
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
    </View>
         <View style={styles.subContainer}>
            <Image style={{width: 150, height: 140}} source={require('../../assets/question.png')} />
         </View>
         
         <Card padding={3} mt={vh(8)} width={vw(91)} borderRadius={23.67} backgroundColor={'#D7EBF7'}>
               <Text style={{textAlign: 'center', color: Colors.black, fontSize: 12, marginTop: vh(4)}}>This app is cureently in Beta and only users with referral code can gain access</Text>
               <View style={{marginTop: vh(4)}}>
                <Card mb={30} padding={3} mt={vh(4)} width={vw(85)} borderRadius={20} backgroundColor={'#FFF'}>
                    <Text style={{textAlign: 'center', color: Colors.black, fontSize: 10, padding: vw(2.5)}}>
                    Get a referral code from a friend or wait for full launch.
                    </Text>
                </Card>
               </View>
         </Card>

         <View style={{marginTop: vh(9), justifyContent: 'center', flexDirection: 'row', width: vw(45), marginLeft: 'auto', marginRight: 'auto'}}>
            <ReferralBtn text={'Close'} />
         </View>
         <View style={styles.textView}>
            <Text style={{textAlign: 'center', color: '#fff', fontSize: 12}}>Your account name has been reserved for you</Text>
         </View>
      </View>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        width: vw(100),
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    subContainer: {
       marginTop: vh(10),
       marginLeft: 'auto',
       marginRight: 'auto',
       justifyContent: 'center', 
       alignItems: 'center', 
    },
    card: {
        marginTop: vh(7)
    },
    cardContainer: {
       marginLeft: 'auto',
       marginRight: 'auto'
   },
    searchBox: {
        paddingHorizontal: vw(24),
        width: vw(70),
        marginLeft: vw(1),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: vh(6),
        marginRight: vw(1),
        marginBottom: vh(4),
        paddingVertical: vh(1.2),
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 50
    }, 
    textView: {
        marginTop: vh(10),
        width: vw(75),
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: vh(9)
    }
})

export default NoReferralCode
