import React, { useEffect, useState } from 'react'
import { useRoute } from "@react-navigation/native"
import { 
  View, 
  Text, 
  SafeAreaView, 
  StyleSheet,
  TouchableOpacity
  } from 'react-native'
import Colors from '../constants/colors'
import { useNavigation } from '@react-navigation/native'
import WelcomeCard from '../components/WelcomeCard'
import { ScrollView } from 'react-native-gesture-handler'

const Confirmation = () => {

   const route = useRoute()
   const data = route.params?.data
   const selectedlocation = route.params?.selectedLocation

  return (
    <SafeAreaView style={{ backgroundColor: '#EFF9FF', flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: '#EFF9FF', marginLeft: 'auto', marginRight: 'auto', width: '95%'}}>
          <View style={{ 
              marginTop: '20%',
              justifyContent: 'center',
              alignItems: 'center',
          }}>
            {/* Table head */}
            <View style={styles.table_head}>
                {/* One single row */}
               <View style={{width: '10%'}}>
                  <Text style={{textAlign: 'center', ...styles.table_caption}}></Text>
               </View>
               <View style={{width: '30%'}}>
                  <Text style={{textAlign: 'center', ...styles.table_caption}}>Type</Text>
               </View>
               <View style={{width: '30%'}}>
                <Text style={{textAlign: 'center', ...styles.table_caption}}>Number</Text>
               </View>
               <View style={{width: '20%'}}>
                <Text style={{textAlign: 'center', ...styles.table_caption}}>Payment</Text>
               </View>
            </View>

            {/* Table Body */}
            <View style={styles.table_body}>
                {/* One single row */}
               <View style={{width: '10%', borderWidth: 0.5}}>
                  <Text style={{textAlign: 'center', ...styles.table_data}}>1</Text>
               </View>
               <View style={{width: '30%', borderWidth: 0.5}}>
                  <Text style={{textAlign: 'center', fontWeight: 'bold', ...styles.table_data}}>- 1.5 Litre</Text>
               </View>
               <View style={{width: '30%', borderWidth: 0.5}}>
                  <Text style={{textAlign: 'center', ...styles.table_data}}>{data.first}</Text>
               </View>
               <View style={{width: '30%', borderWidth: 0.5}}>
                  <Text style={{textAlign: 'center', color: '#30C04F', ...styles.table_data}}>400cfa</Text>
               </View>
            </View>

            {/* Table Body */}
            <View style={styles.table_body}>
                {/* One single row */}
               <View style={{width: '10%', borderWidth: 0.5}}>
                  <Text style={{textAlign: 'center', ...styles.table_data}}>2</Text>
               </View>
               <View style={{width: '30%', borderWidth: 0.5}}>
                  <Text style={{textAlign: 'center', fontWeight: 'bold', ...styles.table_data}}>+ 1.5 Litre</Text>
               </View>
               <View style={{width: '30%', borderWidth: 0.5}}>
                  <Text style={{textAlign: 'center', ...styles.table_data}}>{data.second}</Text>
               </View>
               <View style={{width: '30%', borderWidth: 0.5}}>
                  <Text style={{textAlign: 'center', color: '#6563FF', ...styles.table_data}}>Pending</Text>
               </View>
            </View>

            {/* Table Body */}
            <View style={styles.table_body}>
                {/* One single row */}
               <View style={{width: '10%', borderWidth: 0.5}}>
                  <Text style={{textAlign: 'center', ...styles.table_data}}>3</Text>
               </View>
               <View style={{width: '30%', borderWidth: 0.5}}>
                  <Text style={{textAlign: 'center', fontWeight: 'bold', ...styles.table_data}}>+ 5 Litre</Text>
               </View>
               <View style={{width: '30%', borderWidth: 0.5}}>
                  <Text style={{textAlign: 'center', ...styles.table_data}}>{data.third}</Text>
               </View>
               <View style={{width: '30%', borderWidth: 0.5}}>
                  <Text style={{textAlign: 'center', color: '#6563FF', ...styles.table_data}}>Pending</Text>
               </View>
            </View>

             {/* Table Body */}
             <View style={styles.table_body}>
                {/* One single row */}
               <View style={{width: '10%', borderWidth: 0}}>

               </View>
               <View style={{width: '30%', borderWidth: 0}}>
                
               </View>
               <View style={{width: '30%', borderWidth: 0}}>

               </View>
               <View style={{width: '30%', borderWidth: 0.5}}>
                  <Text style={{textAlign: 'center', color: '#30C04F', ...styles.table_data}}>2100cfa</Text>
               </View>
            </View>
            
          </View>
          <View style={{ marginTop: '15%', marginLeft: 'auto', marginRight: 'auto', width: '95%'}}>
            <Text style={{textAlign: 'center', fontSize: 23}}>Total</Text>
          </View>
          <View style={{ marginTop: '10%', marginLeft: 'auto', marginRight: 'auto', width: '95%'}}>
            <Text style={{textAlign: 'center', fontSize: 14}}>You will receive</Text>
          </View>
          <View style={{ marginTop: '10%', marginLeft: 'auto', marginRight: 'auto', width: '95%'}}>
            <Text style={{textAlign: 'center', fontSize: 37, color: '#30C04F', fontWeight: 'bold'}}>2100 Cfa  +  160 CS</Text>
          </View>

          <TouchableOpacity style={styles.fab}>
             <Text style={styles.fabIcon}>Accept</Text>
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
      },
      fab: { 
        // position: 'absolute', 
        width: 300, 
        height: 60, 
        alignItems: 'center', 
        right: '5%', 
        left: '5%',
        justifyContent: 'center', 
        bottom: '2%',
        marginTop: '10%', 
        backgroundColor: '#FF9228', 
        borderRadius: 7, 
        elevation: 20 
        }, 
        fabIcon: { 
          fontSize: 28, 
          color: 'white',
          fontWeight: 400
        },
})

export default Confirmation
