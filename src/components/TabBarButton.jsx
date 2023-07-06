import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';

const TabBarButton = ({ onPress, title, bgColor, borderRadius, color }) => {
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
      paddingVertical: 10,
      paddingHorizontal: 12,
    },
    appButtonText: {
      fontSize: 16,
      alignSelf: "center"
    }
  });

export default TabBarButton
