import React, { useEffect, useState } from 'react';
import { 
  View, 
  Text,
  StyleSheet,
  FlatList,
  RefreshControl
  } from 'react-native'
import Colors from '../constants/colors'
import { useNavigation } from '@react-navigation/native'
import { vw, vh } from 'react-native-expo-viewport-units';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://fooiwhusdtnbmbizrgog.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZvb2l3aHVzZHRuYm1iaXpyZ29nIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM1NTA5MjUsImV4cCI6MTk5OTEyNjkyNX0.SnbibjqI0h0O6cc9FUdiSa-A4ASEhhOLrUZilOjniAM'
const supabase = createClient(supabaseUrl, supabaseKey)

const Card = ({item}) => {
  return(
    <View>
      <View style={{backgroundColor: '#0e0c23',...styles.card}}>
        <View style={styles.time}>
          <Text style={{color: '#fff', fontSize: 14, marginTop: vh(1)}}>Check-in Time</Text>
          <Text style={{color: '#fff', fontSize: 34, fontWeight: 700, marginTop: vh(1)}}>{item.time}</Text>
          {/* <Text style={{color: '#fff', marginTop: vh(1)}}>Today</Text> */}
          <Text style={{color: '#fff', marginTop: vh(1)}}>{item.date}</Text>
        </View>
        <View style={styles.phone}>
          <Text style={{color: '#fff', fontSize: 18, fontWeight: 600}}>{item.phone_type}</Text>
          <Text style={{color: '#fff', fontSize: 18, fontWeight: 600, marginTop: vh(2)}}>{item.courses.code}</Text>
          <Text style={{color: '#fff', fontSize: 18, fontWeight: 600, marginTop: vh(2)}}>{item.remark}</Text>
        </View>
      </View>
    </View>
  );
}

const Chats = () => {

  useEffect(() => {
    getUserId()
    getMyAttendance()
  }, [])

  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = () => {
    setIsRefreshing(true); // Set refreshing flag to true
    fetchData(); // Fetch new data
    getMyAttendance()
    setIsRefreshing(false); // Set refreshing flag back to false
  };

  const fetchData = async () => {
    // Fetch data from API or other source
    // Update the data state using setData() function
  };


  const [user_id, setUser_id] = useState('')

  const getUserId = async () => {
    try {
      const value = await AsyncStorage.getItem('user_att');
      if (value !== null) {
        const valueObj = JSON.parse(value)
        console.log('user: ', valueObj.id);
        setUser_id(valueObj.id)
      } 
    } catch (error) {
      console.log(error);
    }
  }

  const [historty, setHistory] = useState([])

  const getMyAttendance = async () => {
    console.log(user_id);
    let { data: session, error } = await supabase
    .from('attendance')
    .select(`
      id,
      time,
      date,
      remark,
      courses (
        code
      )
    `).eq('student_id', user_id)

    setHistory(session)
    console.log(historty);
  }

  return (
       <>
        <View style={styles.header}>
           <Text style={{color: '#fff', textAlign: 'center', fontSize: 20, fontWeight: 600}}>All my attendance</Text>
        </View> 
          <FlatList
            data={historty}
            renderItem={({item}) => <Card item={item} />}
            keyExtractor={item => item.id}
            refreshControl={
              <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
            }
         />
       </>
  )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        // marginTop: vh(5),
        height: vh(50),
        backgroundColor: '#fff',
    },
    card: {
      backgroundColor: '#017aff',
      width: vw(95),
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: vh(3),
      padding: vw(3),
      borderRadius: 10,
      elevation: 70,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    }, 
    phone: {
      alignItems: 'center',
      justifyContent: 'center'
    },
    header: {
      backgroundColor: Colors.primary,
      height: vh(10),
      alignItems: 'center',
      justifyContent: 'center'
    }
})

export default Chats