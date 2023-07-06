import React, { useState, useEffect } from 'react'
import { useRoute } from "@react-navigation/native"
import { 
  View, 
  Text, 
  SafeAreaView, 
  StyleSheet, 
  FlatList, 
  TextInput, 
  StatusBar,
  TouchableOpacity,
  Alert
  } from 'react-native'
import Modal from "react-native-modal";
import { useNavigation } from '@react-navigation/native';
import { vw, vh } from 'react-native-expo-viewport-units';

const LocationCard = ({ item, onPress }) => (
 <TouchableOpacity
 onPress={onPress}
 style={{
  paddingLeft: vw(4),
  paddingRight: vw(4),
  width: vw(90), 
  backgroundColor: '#fff', 
  marginLeft: 'auto', 
  marginRight: 'auto', 
  marginTop: vh(1.5),
  marginBottom: vh(1.5),
  elevation: 30,
  shadowOffset: { width: 1, height: 1 },
  shadowRadius: 2,
  shadowOpacity: 0.3,
  shadowColor:'#333', borderRadius: 7
  }}>
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: vw(3)
    }}>
       <View>
         <View style={{
           marginBottom: vh(2)
         }}> 
          <Text style={{fontSize: 18}}>{item.place}</Text>
          <Text style={{fontSize: 14, color: 'gray'}}>Buea</Text>
         </View>
         <Text style={{fontSize: 12, fontSize: 12, color: '#ccc'}}>Open from 2pm to 5pm</Text>
       </View>
         <View> 
          <View style={{flexDirection: 'row', justifyContent: 'space-between', width: vw(22)}}>
            {<Text style={
               [item.status == 'Open' ? styles.Open : styles.Close]
           }>{item.status}</Text>}
            {item.status === 'Open' && <Text style={{color: '#30C04F'}}>now</Text>}
          </View>
          <Text style={{fontSize: 12, color: '#ccc'}}>Monday - Friday</Text>
         </View>
    </View>
 </TouchableOpacity>
);

const DropOffLocation = () => {

  const alert = (msg) =>
    Alert.alert(null, msg, [
      {text: 'OK'},
    ]);

  const route = useRoute()
  const data = route.params?.myObj

const [isModalVisible, setModalVisible] = useState(false);
const [selectedLocation, setSelectedLocation] = useState('')
const navigation = useNavigation()

const [ location, setLocation ] = useState(
    [
      {
        id: 1,
        place: 'UB Junction1',
        status: 'Open'
      },
      {
        id: 2,
        place: 'Malingo',
        status: 'Open'
      },
      {
        id: 3,
        place: 'Mile 16',
        status: 'Closed'
      },
      {
        id: 4,
        place: 'UB Junction',
        status: 'Open'
      },
      {
        id: 5,
        place: 'Malingo',
        status: 'Open'
      },
      {
        id: 6,
        place: 'Mile 16',
        status: 'Closed'
      },
      {
        id: 7,
        place: 'UB Junction',
        status: 'Closed'
      },
      {
        id: 8,
        place: 'Malingo',
        status: 'Open'
      },
      {
        id: 9,
        place: 'Mile 162',
        status: 'Closed'
      },
    ]
)

// Navigate to scancode screen when user selects location
const chooseLocation = (item, index) => {
    const nextLocation = [...location];
    if (nextLocation[index].status == 'Closed') {
        setModalVisible(!isModalVisible);
    } else {
        setSelectedLocation(item.place)
        navigation.navigate('scan', { data, selectedLocation })
    }
}

const confirmLocation = () => {
  navigation.navigate('scan', { data, selectedLocation });
}

const toggleModal = () => {
    setModalVisible(!isModalVisible);
    console.log("something");
};

  return (
    <SafeAreaView style={{ backgroundColor: '#EFF9FF' }}>
      {/* <View> */}
        <TextInput
          style={{
            height: vh(7),
            paddingHorizontal: vw(2),
            width: vw(80),
            marginTop: vh(3),
            marginBottom: vh(2),
            marginLeft: 'auto',
            marginRight: 'auto',
            borderColor: '#ABABAB',
            borderRadius: 12,
            borderColor: 'gray',
            borderWidth: 1,
          }}
          placeholder='search town'
        />
      {/* </View> */}
        <View style={{ backgroundColor: '#EFF9FF', marginRight: 0, height: vh(80), width: vw(100)}}>
            <FlatList
                data={location}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={({item, index}) => (
                    <LocationCard item={item} onPress={() => chooseLocation(item, index)}/>
                )}
            />
        </View>  
        
        
        <View style={styles.flexView}>
           <StatusBar />

            {/* Modal */}
            <Modal
                onBackdropPress={() => setModalVisible(false)}
                onBackButtonPress={() => setModalVisible(false)}
                isVisible={isModalVisible}
                swipeDirection="down"
                onSwipeComplete={toggleModal}
                animationIn="bounceInUp"
                animationOut="bounceOutDown"
                animationInTiming={900}
                animationOutTiming={500}
                backdropTransitionInTiming={1000}
                backdropTransitionOutTiming={500}
                style={styles.modal}
              >
                <View style={styles.modalContent}>
                  <View style={styles.center}>
                    <View style={styles.barIcon} />
                    <Text style={styles.textHeader}>This Location is currently closed</Text>
                    <Text style={{fontSize: 16, marginTop: 20, textAlign: 'center'}}>Select another location to drop off your plastics</Text>
                    <TouchableOpacity onPress={toggleModal} style={styles.btn}>
                      <Text style={styles.btnText}>FIND ANOTHER</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>

    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    fab: { 
        position: 'absolute', 
        width: 300, 
        height: 60, 
        alignItems: 'center', 
        right: 0,
        justifyContent: 'center', 
        bottom: 8, 
        backgroundColor: '#FF9228', 
        borderRadius: 7, 
        elevation: 20 
        }, 
        fabIcon: { 
          fontSize: 20, 
          color: 'white',
          fontWeight: 700
        },
        text1: {
          textAlign: 'center',
          fontSize: 18,
          paddingLeft: 17, 
          paddingRight: 17, 
          paddingTop: 2, 
          paddingBottom: 2,
          color: '#30C04F' 
        },
        text2: {
          textAlign: 'center',
          fontSize: 18,
          paddingLeft: 17, 
          paddingRight: 17, 
          paddingTop: 2, 
          paddingBottom: 2,
          color: '#FF0000' 
        },
        flexView: {
            flex: 1,
            backgroundColor: "#EFF9FF",
          },
          modal: {
            justifyContent: "flex-end",
            margin: 0,
          },
          modalContent: {
            backgroundColor: "#FFF",
            paddingTop: 12,
            paddingHorizontal: 12,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            minHeight: 300,
            paddingBottom: 20,
          },
          center: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
          barIcon: {
            width: 60,
            height: 5,
            backgroundColor: "#000",
            borderRadius: 3,
          },
          text: {
            color: "#000",
            fontSize: 24,
            textAlign: 'center',
            marginTop: 30,
          },
          btnContainer: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 500,
          },
          btn: {
            position: 'absolute', 
            width: 300, 
            height: 60, 
            alignItems: 'center', 
            right: 20,
            top: 200,
            justifyContent: 'center', 
            backgroundColor: '#F9AE2B', 
            borderRadius: 7, 
            elevation: 20 
          }, 
          textHeader: { 
            fontSize: 24, 
            color: '#000',
            textAlign: 'center',
            marginTop: 20,
            fontWeight: 700
          }, 
          btnText: { 
            fontSize: 22, 
            color: 'white',
            fontWeight: 700
          },
          Open: {
            marginBottom: vh(5),
            color: '#30C04F'
          },
          Close: {
            marginBottom: vh(5),
            color: '#FF0404'
          }
})

export default DropOffLocation
  