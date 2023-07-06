import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const SecondaryButton = ({ onPress, title, bgColor, color, borderRadius }) => {
    return (
      <TouchableOpacity 
        onPress={onPress} 
        style={{
           backgroundColor: bgColor,
           borderRadius: borderRadius,
           width: '45%',
        }}>
         <Text style={{...styles.appButtonText, color: color, textAlign: 'center', padding: 4}}>{title}</Text>
      </TouchableOpacity>
    )
  }

  const styles = StyleSheet.create({
    // ...
    appButtonContainer: {
      elevation: 8,
      paddingVertical: 10,
      paddingHorizontal: 12
    },
    appButtonText: {
      fontSize: 16,
      fontWeight: 'bold'
    }
  });

export default SecondaryButton

