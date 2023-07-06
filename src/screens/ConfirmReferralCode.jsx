import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import Colors from '../constants/colors'
import { useNavigation } from '@react-navigation/native';
import WelcomeCard from '../components/WelcomeCard';
import { vh, vw } from 'react-native-expo-viewport-units';
import ReferralBtn from '../components/PrimaryBtn'
import QuestionCard from '../components/QuestionCard';

const Card = ({children}) => {
    return(
        <View style={styles.cardContainer}>
           {children}
        </View>
    );
}

const ConfirmReferralCode = () => {
    const navigation = useNavigation()

  return (
    <SafeAreaView style={{ backgroundColor: Colors.primary, flex: 1 }}>
      <View style={styles.container}>
         <View style={styles.textView}>
            <Text style={styles.doneText}>All Done!</Text>
         </View>
         <View style={styles.subContainer}>
            <QuestionCard rotate={'-20deg'}>
                <Image style={{width: vw(32.2), height: vw(32.2), borderRadius: 20}} source={require('../../assets/dan.png')} />
            </QuestionCard>
            <View style={{marginLeft: -20}}>
              <QuestionCard rotate={'20deg'}>
                  <Image style={{width: vw(32.2), height: vw(32.2), borderRadius: 20}} source={require('../../assets/girl.png')} />
              </QuestionCard>
            </View>
         </View>
         <Card>
               <View style={{width: vw(70), marginLeft: 'auto', marginRight: 'auto', marginTop: vh(2)}}>
                 <Text style={{textAlign: 'center', color: Colors.black, fontSize: 12}}>@username invited you so you both will receive</Text>
               </View>
               <View style={styles.imgAndAmntLeft}>
                <View style={styles.imageView}>
                  <Image style={styles.imageRight} source={require('../../assets/dan.png')} />
                </View>
                <View style={{width: vw(35)}}>
                    <WelcomeCard borderRadius={100} bgColor={'#FFF'}>
                        <Text style={styles.amount}>500cfa</Text>
                    </WelcomeCard>
                </View>
               </View>

               <View style={styles.imgAndAmnt}>
                <View style={{width: vw(35)}}>
                    <WelcomeCard borderRadius={100} bgColor={Colors.green}>
                        <Text style={styles.amount}>500cfa</Text>
                    </WelcomeCard>
                </View>
                <View style={styles.imageView}>
                  <Image style={styles.imageRight} source={require('../../assets/girl.png')} />
                </View>
               </View>
         </Card>

         <View style={styles.refBtn}>
            <ReferralBtn onPress={() => navigation.navigate('Dashboard')} text={'Continue'} />
         </View>
      </View>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        width: vw(95),
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    subContainer: {
        marginTop: vh(9),
        marginBottom: vh(9),
        marginLeft: 'auto',
        marginRight: 'auto',
        flexDirection: 'row',
        alignItems: 'center', 
     },
     cardContainer: {
        width: vw(90),
        padding: vw(3),
        borderRadius: 23.67,
        backgroundColor: '#D7EBF7',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    card: {
        // marginTop: vh(7)
    },
    textView: {
        marginTop: vh(7)
    },
    imageView: {
        backgroundColor: '#fff', 
        borderRadius: 50, 
        width: 50, 
        height: 50, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    refBtn: {
        width: vw(40),
        marginTop: vh(7), 
        justifyContent: 'center', 
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        flexDirection: 'row'
    },
    imageRight: {
        width: 40, 
        height: 40, 
        borderRadius: 50
    },
    amount: {
        textAlign: 'center', 
        color: 'gray', 
        fontSize: 20, 
        fontWeight: 700
    },
    imgAndAmnt: {
        marginTop: vh(1), 
        marginLeft: vw(32), 
        width: vw(52), 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between'
    },
    imgAndAmntLeft: {
        marginTop: vh(2), 
        width: vw(52), 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between' 
    },
    doneText: {
        textAlign: 'center', 
        color: '#D7EBF7', 
        fontSize: 34, 
        fontWeight: 700
    }
})

export default ConfirmReferralCode
