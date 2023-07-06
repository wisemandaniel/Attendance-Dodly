import React, { memo } from 'react'
import { View, ImageBackground, Text, Image, StyleSheet, StatusBar, TouchableOpacity } from 'react-native'
import Colors from '../constants/colors'
import { Dimensions } from 'react-native'
import { EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import ScaledSheet from 'react-native-scaled-sheet';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

const CustomButton = ({width, add, title, bgColor, onPress}) => {
  return(
    <TouchableOpacity onPress={onPress} style={{backgroundColor: bgColor, borderRadius: 8, marginLeft: '2.5%', marginRight: '2.5%', marginTop: '2.5%', width: width}}>
      <Text style={{textAlign: 'center', padding: 5,  color: 'white', fontSize: 18, fontWeight: 700}}>{add}  {title}</Text>
    </TouchableOpacity>
  )
}
const height2 = Dimensions.get('window').height;

const height1 = height2 - ((16/100) * height2);

const CommunityCard = ({item}) => {
  const nav = useNavigation();
  const buttonText = item.type == 'activity' ? "Join" : "Accept";
  
  const switchTitleColor = (type) => {
    switch(type) {
      case 'community': 
        return '#30C04F';
      case 'private': 
        return '#0584FA'
      case 'activity': 
        return '#FF9228'
      case 'service': 
        return '#FF9228'    
      default: 
        return ''
    }
  }

  const switchDateColor = (type) => {
    switch(type) {
      case 'community': 
        return '#30C04F';
      case 'private': 
        return '#FF9228'
      case 'activity': 
        return '#FF9228'
      case 'service': 
        return '#FF9228'    
      default: 
        return ''
    }
  }

  const switchButtonColor = (type) => {
    switch(type) {
      case 'community': 
        return '#30C04F';
      case 'private': 
        return '#0584FA'
      case 'activity': 
        return '#FF9228'
      case 'service': 
        return '#FF9228'    
      default: 
        return ''
    }
  }

  const loremIpsum = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s';

  return (
    <View style={styles.containerCard}>
      <ImageBackground source={{uri: item.image}} resizeMode="cover" style={styles.imageBackground}>
        
        {/* Top */}
        <View style={styles.top}>
          <View style={{alignItems: 'center'}}>
            <Image style={{width: '100%', height: '40%'}} source={require('../../assets/plant.png')} />
            <Text style={styles.badge}>520</Text>
          </View>
          <View style={styles.jobTab}>
            <Text style={styles.jobs}>Jobs</Text> 
            <Text style={styles.services}>|</Text> 
            <Text style={styles.services}>Services</Text>
          </View>
          <EvilIcons name="search" size={32} color="white" />
        </View>

        {/* Bottom */}
        <View style={styles.bottom}>
            <Text style={{color: switchTitleColor(item.type), ...styles.title}}>
                {item.title}
            </Text>
            <View style={styles.durationView}>
              <Text style={styles.durationText}>
                  Duration:
              </Text>
              <Text style={styles.durationValue}>
                  {item.duration}
              </Text>
            </View>
            <View style={styles.startTimeLocationTxt}>
              <Text style={{color: switchDateColor(item.type), ...styles.date}}>
                  Start time & location 
              </Text>
            </View>
            <View style={styles.dateLocationView}>
              <Text style={styles.common}>
                {item.date}
              </Text>
              <View style={styles.locationView}>
                <Image style={styles.locationIcon} source={require('../../assets/location_icon.png')} />
                <Text style={styles.common}>
                  {item.location}
                </Text>
              </View>
              <View style={{alignItems: 'center'}}>
                <Text style={styles.common}>
                  Payment
                </Text>
                <Text style={styles.common}>
                  {item.amount}cfa
                </Text>
              </View>
            </View>

            {/* Button */}
            <View style={styles.buttonView}>
                <CustomButton onPress={() => alert(height2 + "      " + height1)} bgColor={switchButtonColor(item.type)} title={buttonText} width={vw(63)} />
                <CustomButton onPress={() => nav.navigate('PostJob')} bgColor={switchButtonColor(item.type)} title={'Post'} add={'+'} width={vw(30)} />
            </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  containerCard: {
    height: vh(82),
    width: vw(100),
    marginLeft: 'auto', 
    marginRight: 'auto',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    backgroundColor: 'black',
  },
  top: {
    flexDirection: 'row', 
    justifyContent: 'space-between',  
    alignItems: 'center', 
    paddingLeft: vw(2), 
    paddingRight: vw(2), 
    height: vh(8), 
    marginTop: vh(1)
  },
  badge: {color: '#09AE2D', fontSize: vw(4.3)},
  jobTab: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: vw(43), 
    alignItems: 'center'
  },
  jobs: {color: '#0584FA', fontSize: vw(5.5), fontWeight: 900},
  services: {fontSize: vw(5.5), fontWeight: 900, color: Colors.white},

  bottom: { 
    width: vw(100),
    position: 'absolute', 
    bottom: 0, 
    padding: vw(2),
    backgroundColor: '#000',  
    justifyContent: 'center'
  },

  imageBackground: {
    opacity: 0.8,
    height: vh(82),
  },
  title: {
    fontSize: vw(8), 
    fontWeight: 800, 
    marginBottom: vh(1)
  },
  durationView: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginBottom: vh(2)
  },
  durationText: {
    color: Colors.white, 
    fontSize: vw(5), 
    fontWeight: 700, 
  },
  durationValue: {
    color: Colors.white, 
    fontSize: vw(5), 
    fontWeight: 700, 
  },
  date: {
    fontSize: vw(5), 
    fontWeight: 700, 
  },
  dateLocationView: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
  },
  locationIcon: {width: vw(3.5), height: vh(2.5)},
  locationView: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-evenly', 
    width: vw(36),
  },
  common: {
    color: '#ffffff', 
    fontSize: vw(3.5), 
    fontWeight: 700
  },
  startTimeLocationTxt: {
    flexDirection: 'row', 
    width: vw(70), 
    justifyContent: 'space-between'
  },
  buttonView: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop: vh(1)
  }
})

export default memo(CommunityCard)

