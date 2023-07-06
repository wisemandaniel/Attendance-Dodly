import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import Colors from '../../constants/colors'

const GiveBlood = () => {
  return (
    <SafeAreaView style={{ backgroundColor: Colors.tertiary, flex: 1 }}>
      <View style={styles.subContainer}>
        <Text>Give Blood</Text>
      </View>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '95%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    subContainer: {
       marginTop: 50,
       marginLeft: 'auto',
       marginRight: 'auto'
    }
})

export default GiveBlood
