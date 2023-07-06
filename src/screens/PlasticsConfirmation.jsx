import React from 'react'
import { 
    View, 
    Text, 
    SafeAreaView, 
    StyleSheet,
    TouchableOpacity
    } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { vw, vh } from 'react-native-expo-viewport-units'
import Colors from '../constants/colors'

const Card = ({width, text, textColor}) => {
    return(
        <View style={{...styles.Card, width: width}}>
            <Text style={{textAlign: 'center', fontSize: 12, color: textColor}}>{text}</Text>
        </View>
    );
}

const ButtonCard = ({width, text, onPress}) => {
    return(
        <TouchableOpacity onPress={onPress} style={{width: width, backgroundColor: Colors.black, borderRadius: 50}}>
            <Text style={{textAlign: 'center', fontSize: 18, color: Colors.white, paddingLeft: vw(10), paddingRight: vw(10), paddingTop: vh(1.5), paddingBottom: vh(1.5)}}>{text}</Text>
        </TouchableOpacity>
    );
}

const DoubleCard = ({width, text1, text2, textColor}) => {
    return(
        <View style={{...styles.DoubleCard, width: width, borderWidth: 0.5, borderRadius: 7 }}>
            <View style={{borderWidth: 1, borderColor: Colors.black, padding: vw(3), width: vw(30), borderTopLeftRadius: 7, borderBottomLeftRadius: 7}}>
               <Text style={{textAlign: 'center', fontSize: 12, color: '#30C04F', fontWeight: 700}}>{text1}</Text>
            </View>
            <View style={{borderWidth: 1, borderColor: Colors.black, padding: vw(3), width: vw(40), borderTopRightRadius: 7, borderBottomRightRadius: 7}}>
               <Text style={{textAlign: 'center', fontSize: 12, color: textColor, fontWeight: 700}}>{text2}</Text>
            </View>
        </View>
    );
}

const PlasticsConfirmation = () => {
  return (
    <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
    <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: '#fff', marginLeft: 'auto', marginRight: 'auto', width: vw(100)}}>
        <View style={{marginTop: vh(5)}}>
        <View style={styles.container}>
          <View style={{width: vw(31.5)}}>
            <Text style={{textAlign: 'center', fontSize: 12}}>Type</Text>
          </View>
          <View style={{width: vw(22)}}>
            <Text style={{textAlign: 'center', fontSize: 12}}>Qty</Text>
          </View>
          <View style={{width: vw(31.5)}}>
            <Text style={{textAlign: 'center', fontSize: 12}}>Payment</Text>
          </View>
        </View>
        <View style={styles.container}>
          <Card text={'-1.5Litres'} width={vw(31.5)} />
          <Card text={20} width={vw(22)} />
          <Card text={'Pending'} width={vw(31.5)} />
        </View>
        <View style={styles.container}>
          <Card text={'+1.5Litres'} width={vw(31.5)} />
          <Card text={20} width={vw(22)} />
          <Card text={'4000cfa'} textColor={'#009720'} width={vw(31.5)} />
        </View>
        <View style={styles.container}>
          <Card text={'+5Litres'} width={vw(31.5)} />
          <Card text={20} width={vw(22)} />
          <Card text={'Pending'} width={vw(31.5)} />
        </View>
        </View>

        <View style={styles.container}>
          <View style={{width: vw(31.5), marginLeft: 'auto', marginRight: 'auto', marginTop: vh(5)}}>
            <Text style={{textAlign: 'center', fontSize: 22}}>Total</Text>
          </View>
        </View>

        <View style={styles.container}>
          <View style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: vh(5)}}>
              <DoubleCard text1={'2150'} text2={'+5 points'} width={vw(70)} />
          </View>
        </View>

        <View style={styles.container}>
          <View style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: vh(12)}}>
              <ButtonCard onPress={() => alert('Accepted')} text={'Accept'} />
          </View>
        </View>
    </ScrollView>
 </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    Card: {
        borderWidth: vw(0.3),
        borderColor: Colors.black,
        padding: vw(2.5),
        borderRadius: 7
    },
    DoubleCard: {
        flexDirection: 'row',
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: vw(6),
        marginRight: vw(6),
        marginTop: vh(3)
    }
})

export default PlasticsConfirmation
