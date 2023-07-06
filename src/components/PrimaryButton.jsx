import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { vw } from 'react-native-expo-viewport-units';

const PrimaryButton = ({ onPress, title, bgColor, borderRadius, color }) => {
  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={{
         ...styles.appButtonContainer,
         backgroundColor: bgColor,
         borderRadius: borderRadius
      }}>
       <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    // ...
    appButtonContainer: {
      elevation: 8,
      width: vw(90),
      paddingVertical: 12,
      paddingHorizontal: vw(12)
    },
    appButtonText: {
      fontSize: 20,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center"
    }
  });

export default PrimaryButton
