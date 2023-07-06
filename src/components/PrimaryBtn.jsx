import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native"; 
import { vh, vw } from 'react-native-expo-viewport-units';

const PrimaryBtn = ({text, onPress}) => {
    return(
        <TouchableOpacity onPress={onPress} style={styles.innerBtn}>
            <Text style={styles.textBtn}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    innerBtn: {
        backgroundColor: '#000', 
        width: '95%', 
        borderRadius: 50,
        borderWidth: vw(1.5),
        borderColor: '#fff'
    },
    textBtn: {
        color: '#fff', 
        textAlign: 'center', 
        padding: vw(3)
    }
})

export default PrimaryBtn