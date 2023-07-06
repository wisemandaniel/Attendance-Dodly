import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const CustomOutlineButton = ({ onPress, title, bgColor, borderRadius, color }) => {
  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={{
         ...styles.appButtonContainer,
         backgroundColor: bgColor,
         borderRadius: borderRadius
      }}>
       <Text style={{color: color, ...styles.appButtonText}}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    // ...
    appButtonContainer: {
      paddingVertical: 12,
      paddingHorizontal: 12,
      borderWidth: 1
    },
    appButtonText: {
      fontSize: 24,
      alignSelf: "center"
    }
  });

export default CustomOutlineButton
