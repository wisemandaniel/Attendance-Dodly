import React from 'react'
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Plastics from '../screens/TopTabNav/Plastics'
import Community from '../screens/TopTabNav/Community'
import GiveBlood from '../screens/TopTabNav/GiveBlood'

const Tab = createMaterialTopTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name='Plastics' component={Plastics} />
        <Tab.Screen name='Community' component={Community} />
        <Tab.Screen name='GiveBlood' component={GiveBlood} />
    </Tab.Navigator>
  )
}

export default AppNavigator
