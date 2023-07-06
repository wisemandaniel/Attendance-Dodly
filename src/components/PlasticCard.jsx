import React from 'react'
import { View, Text, Button, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import Colors from '../constants/colors'
import CustomOutlineButton from '../components/CustomOutlineButton'

const PlasticCard = ({item}) => {
    const {image} = item
  return (
        <View style={styles.container}>
            <View style={styles.upper}>
                <Image style={{width: 100, height: 200, marginLeft: 'auto', marginRight: 'auto', marginTop: 10}} source={{uri: image}} />
            </View>
            <View style={styles.lower}>
            <View style={styles.value}>
                <Text style={{textAlign: 'center', fontSize: 32, color: Colors.white}}>0</Text>
            </View>
            <View style={styles.action}>
                <TouchableOpacity style={styles.left}>
                    <Text style={{textAlign: 'center', 
                                fontSize: 48,
                                color: Colors.black}}>-</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.right}><Text style={{textAlign: 'center', 
                        fontSize: 48,
                        color: Colors.black}}>+</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
  )
}

const styles = StyleSheet.create({
   container: {
      borderRadius: 42,
      overflow: 'hidden'
   },

   upper: {
    backgroundColor: Colors.primary
   },
   value: {
      borderRadius: 15,
      overflow: 'hidden',
      borderWidth: 2,
      borderColor: Colors.tertiary,
      width: 50,
      height: 50,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 20,
      marginBottom: 30
   },

   lower: {
    backgroundColor: Colors.primary
   },

   action: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
   },

   left: {
    backgroundColor: '#F9AE2B',
    width: '49.6%'
   },

   right: {
    backgroundColor: '#F9AE2B',
    width: '49.6%'
   }
})
export default PlasticCard
