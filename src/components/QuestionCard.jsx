import React, { Children } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { vw } from 'react-native-expo-viewport-units'
import Colors from '../constants/colors'

const QuestionCard = ({rotate, children}) => {
  return (
    <View style={[
        styles.container,
        {
          transform: [{rotate: rotate}],
        },
      ]}>
        {children}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
       borderWidth: vw(1.6),
       borderColor: '#fff',
       borderRadius: 20,
       width: vw(35),
       alignItems: 'center',
       justifyContent: 'center',
       height: vw(35),
       backgroundColor: Colors.primary
    }
})

export default QuestionCard
