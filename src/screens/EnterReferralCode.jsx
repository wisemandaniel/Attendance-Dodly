import React, { useState } from 'react'
import { 
    View, 
    Text, 
    SafeAreaView, 
    StyleSheet, 
    StatusBar, 
    TextInput, 
    TouchableOpacity } from 'react-native'
import Colors from '../constants/colors'
import { useNavigation } from '@react-navigation/native';
import { vh, vw } from 'react-native-expo-viewport-units';
import ReferralBtn from '../components/PrimaryBtn'
import Modal from "react-native-modal";
import CustomModal from '../components/CustomModal';

const Card = ({children}) => {
    return(
        <View style={styles.cardContainer}>
           {children}
        </View>
    );
}

const EnterReferralCode = () => {
    const navigation = useNavigation()
    const [refCode, setRefCode] = useState('')
    const [visibleModal, setVisibleModal] = React.useState(false);
    const [message, setMessage] = React.useState('')

    const handleRef = () => {

      var myHeaders = new Headers();

      myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgzOTc4MDA2LCJpYXQiOjE2ODMzNzMyMDYsImp0aSI6Ijg2ZTJlMTEwZjgyYTQ3YWE4ZmE4YTEyMDdjOTMyNmFmIiwidXNlcl9pZCI6MjV9.bhjVLng929X7bVQIQS1PDWEkDbFkplxnUK7fZ-LrOKU");

      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        "referral_code": "xywgdl"
      });

      // var requestOptions = {
      // method: 'GET',
      // headers: myHeaders,
      // // body: raw,
      // redirect: 'follow'
      // };

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      // fetch('https://iholda.ew.r.appspot.com/api/referrals/', requestOptions).then((res) => {
      //   return res.json()
      // }).then(data => {
      //   console.log(data);
      // })

      if (refCode.length !== 0) {
        fetch("https://iholda.ew.r.appspot.com/api/referrals/", requestOptions)
        .then(response => response.text())
        .then(result => {
          console.log(result)
          setMessage('Incorrect referral code!')
          setVisibleModal(!visibleModal);
        })
        .catch(error => {
          console.log('error', error)
          setMessage(error.message)
          setVisibleModal(!visibleModal);
        });
      } else {
        setMessage('Enter referral code')
        setVisibleModal(!visibleModal);
      }
        // console.log(refCode);
        // setRefCode()
        // if (refCode !== '12345') {
        //     setVisibleModal(!visibleModal);
        // } else {
        //     // navigation.navigate('ConfirmReferralCode')
        // }
    }
    

  return (
    <SafeAreaView style={styles.safeArea}>
         <Card>
               <Text style={styles.refText}>Enter referral code below</Text>
               <TextInput 
                    onChangeText={(refCode) => setRefCode(refCode)}
                    style={styles.searchBox}
                    placeholder='Type here'
                    clearButtonMode='always'
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={refCode}
               />
         </Card>

         <View style={styles.btnView}>
            <ReferralBtn onPress={handleRef} text={'Confirm'} />
         </View>
         <TouchableOpacity onPress={() => navigation.navigate('NoReferralCode')} style={{marginTop: vh(22), width: vw(40), marginLeft: 'auto', marginRight: 'auto'}}>
            <Text style={{textAlign: 'center', color: '#fff'}}>No referral code?</Text>
         </TouchableOpacity>

        <View>
            <CustomModal visible={visibleModal}>
                <Text style={{marginVertical: 10, fontSize: 20, textAlign: 'center'}}>
                    {message}
                </Text>
                <TouchableOpacity onPress={() => setVisibleModal(false)} style={{backgroundColor: '#DADADA', borderRadius: 4, width: vw(25), marginLeft: 'auto', marginRight: 'auto', marginTop: vh(3)}}>
                    <Text style={{textAlign: 'center', padding: vw(1.3), fontSize: 16}}>CLOSE</Text>
                </TouchableOpacity>
            </CustomModal>
        </View>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    cardContainer: {
        width: vw(90),
        borderRadius: 23.67,
        backgroundColor: '#D7EBF7',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: vh(25),
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    searchBox: {
        width: vw(65),
        height: vh(6),
        marginLeft: vw(2),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: vh(6),
        marginRight: vw(1),
        backgroundColor: '#fff',
        marginBottom: vh(5),
        textAlign: 'center',
        borderColor: '#000',
        borderWidth: 0.5,
        borderRadius: 50
    },
    btnView: {
      marginTop: vh(10), 
      justifyContent: 'center', 
      alignItems: 'center', 
      flexDirection: 'row', 
      marginLeft: 'auto', 
      marginRight: 'auto', 
      width: vw(50)
    },
    refText: {
      textAlign: 'center', 
      color: Colors.black, 
      fontSize: 15, 
      marginTop: vh(5)
    },
    safeArea: { 
      backgroundColor: Colors.primary, 
      flex: 1 
    },
    modal: {
      justifyContent: "flex-end",
      margin: 0,
    },
    modalContent: {
      backgroundColor: "#FFF",
      paddingTop: 12,
      paddingHorizontal: 12,
      borderTopRightRadius: 20,
      borderTopLeftRadius: 20,
      minHeight: vh(30),
      paddingBottom: 20,
    },
    center: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    barIcon: {
      width: 60,
      height: 5,
      backgroundColor: "#000",
      borderRadius: 3,
    },
    text: {
      color: "#000",
      fontSize: 24,
      textAlign: 'center',
      marginTop: 30,
    },
    btnContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: vh(10),
    },
    btn: {
      position: 'absolute', 
      width: 300, 
      height: 60, 
      alignItems: 'center', 
      right: 20,
      top: 100,
      justifyContent: 'center', 
      backgroundColor: '#F9AE2B', 
      borderRadius: 7, 
      elevation: 20 
    }, 
    textHeader: { 
      fontSize: 24, 
      color: '#000',
      textAlign: 'center',
      marginTop: 20,
      fontWeight: 700
    }, 
    btnText: { 
      fontSize: 22, 
      color: 'white',
      fontWeight: 700
    }
})

export default EnterReferralCode
