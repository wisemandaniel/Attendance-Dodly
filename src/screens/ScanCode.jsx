import React, { useEffect, useState } from 'react'
import { useRoute } from "@react-navigation/native"
import { 
  View, 
  Text, 
  SafeAreaView, 
  StyleSheet, 
  FlatList, 
  Image, 
  TouchableOpacity
  } from 'react-native'
import Colors from '../constants/colors'
import { useNavigation } from '@react-navigation/native'
import WelcomeCard from '../components/WelcomeCard'
import { ScrollView } from 'react-native-gesture-handler'
import { Button, color } from '@rneui/base'
import QRCode from 'react-native-qrcode-svg';
import { vh, vw } from 'react-native-expo-viewport-units'

const LocationCard = ({ item, onPress }) => (
   <View
   style={{
    paddingLeft: vw(4),
    paddingRight: vw(4),
    paddingTop: vh(3),
    paddingBottom: vh(3),
    width: vw(90), 
    backgroundColor: '#fff', 
    marginLeft: 'auto', 
    marginRight: 'auto', 
    marginTop: vh(1.5),
    marginBottom: vh(1.5),
    elevation: 30,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
    shadowOpacity: 0.3,
    shadowColor:'#333', borderRadius: 7
    }}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: vw(3)
      }}>
         <View>
           <View style={{
             marginBottom: vh(2)
           }}> 
            <Text style={{fontSize: 18}}>Check Point</Text>
            <Text style={{fontSize: 14, color: 'gray'}}>Buea</Text>
           </View>
           <Text style={{fontSize: 12, fontSize: 12, color: '#ccc'}}>Open from 2pm to 5pm</Text>
         </View>
           <View> 
            <View style={{flexDirection: 'row', justifyContent: 'space-between', width: vw(22), marginBottom: vh(5)}}>
              <Text style={{color: '#30C04F'}}>Open</Text>
              <Text style={{color: '#30C04F'}}>now</Text>
            </View>
            <Text style={{fontSize: 12, color: '#ccc'}}>Monday - Friday</Text>
           </View>
      </View>
   </View>
  );

const Dashboard = () => {

   const route = useRoute()
   const data = route.params?.data
   const selectedlocation = route.params?.selectedLocation

   const finalData = JSON.stringify(data)

  const navigation = useNavigation();

  useEffect(() => {
   console.log(finalData);
  }, [])

  const [location, setLocation] = useState(
    [
      {
        id: 1,
        place: selectedlocation,
        status: 'Open'
      }
    ]
)

  return (
   <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: '#fff', marginLeft: 'auto', marginRight: 'auto', width: vw(100)}}>
          <View style={{marginTop: vh(4)}}>
            <LocationCard />
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingLeft: vw(5), paddingRight: vw(5)}}>
            <TouchableOpacity><Text></Text></TouchableOpacity>
            <TouchableOpacity><Text style={{fontSize: 12}}>Change</Text></TouchableOpacity>
          </View>
          <View style={{marginTop: vh(10)}}>
            <Text style={{textAlign: 'center', fontSize: 12}}>Present your QR code at drop off location</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('PlasticsConfirmation')} style={{ marginTop: vh(3), marginLeft: 'auto', marginRight: 'auto', width: vw(100) }}>
            <Image style={{width: vw(90), height: vh(40), marginLeft: 'auto', marginRight: 'auto' }} source={require('../../assets/qrcode.png')} />
          </TouchableOpacity>
      </ScrollView>
   </SafeAreaView>
    )
   }

const styles = StyleSheet.create({
 container: {
        width: '95%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 0,
    },
    text1: {
        textAlign: 'center',
        fontSize: 18,
        paddingLeft: 17, 
        paddingRight: 17, 
        paddingTop: 2, 
        paddingBottom: 2,
        color: '#30C04F' 
      },
      text2: {
        textAlign: 'center',
        fontSize: 18,
        paddingLeft: 17, 
        paddingRight: 17, 
        paddingTop: 2, 
        paddingBottom: 2,
        color: '#FF0000' 
      },
      table_head :{
         flexDirection: 'row',
         padding: 10
      },
      table_body: {
         flexDirection: 'row',
         padding: 5
      },
      table_caption: {
        //  fontWeight:'bold'
      },
      table_data: {
        fontSize: 12,
        padding: 5
      }
})

export default Dashboard
