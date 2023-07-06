import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Screen 1" component={Screen1} />
      <Tab.Screen name="Screen 2" component={Screen2} />
      <Tab.Screen name="Screen 3" component={Screen3} />
    </Tab.Navigator>
  );
}

function Screen1() {
    return (
      <View style={styles.container}>
        <Text>Screen 1</Text>
      </View>
    );
  }
  
  function Screen2() {
    return (
      <View style={styles.container}>
        <Text>Screen 2</Text>
      </View>
    );
  }
  
  function Screen3() {
    return (
      <View style={styles.container}>
        <Text>Screen 3</Text>
      </View>
    );
  }

  function Header() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>My App</Text>
      </View>
    );
  }

  export default function TopTab() {
    return (
      <NavigationContainer >
        <View style={styles.container}>
          <Header />
          <MyTabs />
        </View>
      </NavigationContainer>
    );
  }  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      backgroundColor: '#2196F3',
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
    },
    headerText: {
      color: 'white',
      fontSize: 20,
    },
  });