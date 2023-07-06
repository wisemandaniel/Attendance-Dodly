import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Chats from './Chats';
import ProfileScreen from './ProfileScreen';
import Plastics from './TopTabNav/Plastics';
import { StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';
import { Image } from 'react-native';
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

// const Tab1 = createMaterialTopTabNavigator();
const Tab = createMaterialBottomTabNavigator()

const AppNavigator = () => {
  const theme = useTheme();
  theme.colors.secondaryContainer = "transperent"
  return (
    <Tab.Navigator 
        initialRouteName='Community'
        activeColor="#FF9134"
        inactiveColor="#3e2465"
        barStyle={styles.footer}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size})  => {
              let iconName;
              let rn = route.name
              size = 28

              if (rn === 'Home') {
                iconName = focused ? 'home' : 'home-outline'
              } else if (rn === 'Chats') {
                iconName = focused ? 'list' : 'list-outline'
              } else if (rn === 'Community') {
                iconName = focused ? 'settings' : 'settings-outline'
              } else if (rn === 'Profile') {
                iconName = focused ? 'settings' : 'settings-outline'
              }
              
              return <Ionicons name={iconName} size={size} color={color} />
          }
        })}
    >
      <Tab.Screen name='Chats' 
       component={Chats} 
       options={{
        title: 'History',
        tabBarIcon: () => {
          return (
            <Image
              style={{ width: 25, height: 25 }}
              source={require('../../assets/second.png')}
            />
          );
        },
      }}/>
      <Tab.Screen name='Community' 
       component={Plastics}  
       options={{
        title: 'Home',
        tabBarIcon: () => {
          return (
            <Image
              style={{ width: 25, height: 25 }}
              source={require('../../assets/third.png')}
            />
          );
        },
      }}/>
      <Tab.Screen name='Profile' component={ProfileScreen} 
      options={{
        title: 'Profile',
        tabBarIcon: () => {
          return (
            <Image
              style={{ width: 25, height: 25 }}
              source={require('../../assets/fourth.png')}
            />
          );
        },
      }}/>
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#ffffff', height: vh(10),
  }
})
export default AppNavigator

