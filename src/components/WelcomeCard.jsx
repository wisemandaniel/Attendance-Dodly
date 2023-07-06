import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import Colors from '../constants/colors'

const WelcomeCard = ({bgColor, children, onPress, borderRadius}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{...styles.container, backgroundColor: bgColor,
      borderRadius: borderRadius }}>
      {children}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        top: -18,
        padding: 7,
        marginTop: 30,
        elevation: 20,
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 2,
        shadowOpacity: 0.3,
        shadowColor:'#333'
    }
})

export default WelcomeCard
