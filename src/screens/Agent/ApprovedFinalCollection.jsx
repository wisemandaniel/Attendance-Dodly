import React, { useState } from 'react'
import { View, TouchableOpacity, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import Colors from '../../constants/colors'
import { useNavigation } from '@react-navigation/native'

const ApprovedFinalCollection = () => {
    const nav = useNavigation();

  return (
    <SafeAreaView style={{ backgroundColor: Colors.tertiary, flex: 1 }}>
      <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={{fontSize: 17}}> 60 Plastic drop off for @andy</Text>
      </View>
      <View style={styles.subContainer}>
        <Image source={require('../../../assets/plastic.png')} />
      </View>
      <View style={styles.subContainer}>
        <Text style={{fontSize: 30, color: Colors.green, fontWeight: 700}}>Approved</Text>
      </View>
      <TouchableOpacity onPress={() => console.log('some information')} style={styles.fab}>
        <Text style={styles.fabIcon}>Close</Text>
      </TouchableOpacity>
      </View>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '95%',
        marginTop: '20%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    subContainer: {
       marginTop: 50,
       marginLeft: 'auto',
       marginRight: 'auto'
    },
    fab: { 
      // position: 'absolute', 
      width: 300, 
      height: 60, 
      alignItems: 'center', 
      left: 27,
      marginRight: 27,
      justifyContent: 'center', 
      marginTop: '40%',
      backgroundColor: '#FF9228', 
      borderRadius: 7, 
      elevation: 20 
      }, 
      fabIcon: { 
        fontSize: 28, 
        color: 'white',
        fontWeight: 400
      }
})

export default ApprovedFinalCollection
