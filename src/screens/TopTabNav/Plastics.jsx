import React, { useEffect, useState } from 'react';
import { 
  View, 
  Text,
  StyleSheet,
  TextInput,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator
  } from 'react-native'
import Colors from '../../constants/colors'
import { useNavigation } from '@react-navigation/native'
import { vw, vh } from 'react-native-expo-viewport-units';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js'
import CustomModal from '../../components/CustomModal'
import SecondaryButton from '../../components/SecondaryButton';
import * as Application from 'expo-application';

import NetInfo from '@react-native-community/netinfo';
import { RefreshControl } from 'react-native-gesture-handler';

const supabaseUrl = 'https://fooiwhusdtnbmbizrgog.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZvb2l3aHVzZHRuYm1iaXpyZ29nIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM1NTA5MjUsImV4cCI6MTk5OTEyNjkyNX0.SnbibjqI0h0O6cc9FUdiSa-A4ASEhhOLrUZilOjniAM'
const supabase = createClient(supabaseUrl, supabaseKey)

const Card = ({code, title, start, end}) => {
  return(
    <View>
      <View style={styles.card}>
        <View style={styles.time}>
          <Text style={{color: '#fff', fontSize: 22, fontWeight: 700, marginTop: vh(1)}}>
          {code}
          {/* CEF 201 */}
          </Text>
          <Text style={{color: '#fff', fontSize: 22, fontWeight: 700, marginTop: vh(1)}}>
          {title}
          {/* Analysis */}
          </Text>
          <Text style={{color: '#fff', marginTop: vh(1), fontSize: 22}}>
          {start} - {end}
          {/* 8:00 - 10: 00 */}
          </Text>
        </View>
      </View>
    </View>
  );
}

const Plastics = () => {

  const [ssid, setSsid] = useState(null);

  const navigation = useNavigation();

  const [start, setStart] = useState('')
  const [end, setEnd] = useState('');
  const [c_code, setC_code] = useState('')
  const [c_title, setC_title] = useState('')
  const [session_ssid, setSession_ssid] = useState('')
  const [session_code, setSession_code] = useState('')
  const [sessionId, setSessionId] = useState('')
  const [sessionDate, setSessionDate] = useState('')
  const [user_id, setUser_id] = useState('')
  const [courseId, setCourseId] = useState('')
  const [device_id, setDevice_id] = useState('')
  const [isWifiEnabled, setIsWifiEnable] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [message, setMessage] = useState('')
  const [remark, setRemark] = useState('')

  useEffect(() => {
    getUserData()
    getSessions()
    // checkDeviceId()
    getCoordLocation()
    getNetworkSsid()
  }, [])

  const getSessions = async () => {
     
    let { data: session, error } = await supabase
    .from('session')
    .select(
      `code, start, end, course_id, ssid, id, date`,
    )
     
    console.log('session: ', session[0]);
    setStart(session[0].start);
    setEnd(session[0].end)
    setSession_code(session[0].code)
    setSessionId(session[0].id)
    setCourseId(session[0].course_id)
    setSessionDate(session[0].date)

    getCourse(session[0].course_id)
    setSession_ssid(session[0].ssid)
    console.log('error: ', error);
  }

  const getCourse = async (id) => {
    let { data: courses, error } = await supabase
    .from('courses')
    .select('*')
    .eq('id', id)
    console.log('courses: ', courses[0])
    setC_code(courses[0].code)
    setC_title(courses[0].title)
  }

  const checkDeviceId = () => {
    const device_id = Application.androidId;
    if (device_id === device_id) {
      alert('Match')
    } else {
      alert('Device id do not match! please use your phone')
    }
  }

  const getUserData = async () => {
     try {
      const value = await AsyncStorage.getItem('user_att');
      if(value !== null) {
        const val = JSON.parse(value);
        setUser_id(val.id)
        setDevice_id(val.device_id)
        console.log('Device id: ', device_id);
        console.log('User id: ', user_id);
      }
     } catch (error) {
      
     }
  }


  const [location, setLocation] = useState(null)

  const getCoordLocation = async () => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        // handle permission not granted
        return;
      }

      const { coords } = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.BestForNavigation
      })
      const { latitude, longitude } = coords;
      // console.log(latitude, longitude);
      setLocation({ latitude, longitude });

      // const distance = getDistance(location.latitude, location.longitude, 4.1559658, 9.2632243);
      // console.log(distance);

    })();
  }

  const getNetworkSsid = async () => {
    

    return () => {
      unsubscribe();
    };
  }

  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = () => {
    setLoading(true); // Set refreshing flag to true
    // fetchData(); // Fetch new data
    getSessions()
    setLoading(false); // Set refreshing flag back to false
  };

  const recordAttendance = () => {
    const device_id = Application.androidId;
    if (device_id === device_id) {
      // GO TO WIFI VALIDATION

      NetInfo.addEventListener(state => {
        console.log('session ssid', session_ssid);
        console.log('Network ssid', state.details.ssid);
        if (state.type === 'wifi' && state.isConnected) {
          setSsid(state.details.ssid);
          setIsWifiEnable(true)

          if ('Xenun_Makuzi' === state.details.ssid) {
            // GO TO SESSION CODE VALIDATION
            setShowModal(true)
          } else {
            alert('You are not connected to the class network. Connect to class network to track attendance')
          }
        } else {
          setSsid(null);
          // alert('You are not connected to any network. Connect to class network to track attendance')
        }
      });
    } else {
      alert('Device id do not match! please use your phone')
    }
  }

  const [inputs, setInputs] = useState({
    class_code: ''
  })

  const handleOnchange = (text, input) => {
     setInputs(prev => ({...prev, [input]: text}))
  }



  const [loading, setLoading] = useState(false);

  // define a function to render the button text based on loading state
  const getButtonText = (text) => {
    return loading ? <ActivityIndicator size="large" color={Colors.white} /> : <Text>{text}</Text>
  };

  const track = async () => {
    console.log("Session code: ", session_code);
    console.log("Input value: ", inputs.class_code);

    if (session_code === inputs.class_code) {
      // RECORD ATTENDANCE TO DATABASEconst currentDate = new Date();
  
      const currentDate = new Date();
      const options = { day: 'numeric', month: 'long', year: 'numeric' };
      const formattedDate = currentDate.toLocaleDateString('en-US', options);


      const currentTime = new Date();

      const hour = currentTime.getHours();
      const minute = currentTime.getMinutes();

      const formattedHour = hour % 12 || 12; // Convert to 12-hour format
      const formattedMinute = minute < 10 ? `0${minute}` : minute; // Add leading zero to minute if necessary
      const ampm = hour < 12 ? 'AM' : 'PM'; // Determine if it's AM or PM

      const formattedTime = `${formattedHour}:${formattedMinute} ${ampm}`;


      const time1 = new Date(sessionDate + 'T' + start);
      const time2 = new Date(currentDate);
      const diffMilliseconds = Math.abs(time2 - time1); // Get absolute value of difference
      const diffMinutes = Math.floor(diffMilliseconds / (1000 * 60));

      const object = {
        session_id: sessionId,
        student_id: user_id,
        course_id: courseId,
        date: formattedDate,
        time: formattedTime,
        remark: ''
      };
      
      if (diffMinutes > 30) {
        setRemark('Late');
      } else {
        setRemark('Early');
      }
      
      object.remark = remark;
      setLoading(true)

      try {
        const { data, error } = await supabase
        .from('attendance')
        .insert([
          object
        ])
        .select()
        if (error === null) {
          setLoading(false)
           alert('Attendance recorded')
           setShowModal(false)
        } else {
          setLoading(false)
          alert(error.message)
        }
      } catch (error) {
        setLoading(false)
        console.log("error");
      }

    } else {
      alert('Session code is not correct!')
    }
  }

  function getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in km
    return distance;
  }
  
  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

  return (
       <>
        <StatusBar hidden={true} />
     <>
        <View style={styles.header}>
          <View style={{width: vw(95), marginLeft: 'auto', marginRight: 'auto'}}>
            <Text style={{color: '#cfcfcf', fontWeight: 900, fontSize: 24, textAlign: 'center'}}>Active session</Text>
          </View>
        </View> 
          {c_title !== '' && <Card start = {start} end = {end} code = {c_code} title = {c_title} />}
          {c_title !== '' && <TouchableOpacity onPress={recordAttendance} style={{backgroundColor: '#000', marginTop: vh(10), width: vw(95), marginLeft: 'auto', marginRight: 'auto', borderRadius: 20, alignItems: 'center', padding: 10}}>
            <Text style={{color: Colors.white}}>Record attendance</Text>
          </TouchableOpacity>}
        </>

        {c_title !== '' && 
          <View style={{alignItems: 'center', justifyContent: 'center', marginTop: vh(10)}}>
            <SecondaryButton color={'#fff'}
                title={getButtonText('Refresh')} 
                borderRadius={20}
                padding={10}
                bgColor={Colors.primary}
                onPress={onRefresh} />
          </View>
        }

      {c_title === '' && <View>
        <View style ={{alignItems: 'center', justifyContent: 'center', marginTop: vh(40)}}>
          <Text style = {{fontSize: 18}}>No active session</Text>
        </View>
      </View>}

          <CustomModal visible={showModal} >
            <View style={styles.inputField}>
              <TextInput
                  style={styles.input}
                  onChangeText={text => handleOnchange(text, 'class_code')}
                  autoComplete='username'
                  value={inputs.class_code}
                  borderRadius={20}
                  borderColor = {Colors.primary}
                  textAlign= 'center'
                  placeholder={'Enter the Class code'}
                />
            </View>
            <View style={{display: 'flex', flexDirection: 'row', marginTop: vh(5), justifyContent: 'space-between' }}>
              <SecondaryButton 
                color={'#fff'}
                title={'Close'} 
                borderRadius={20}
                padding={10}
                bgColor={Colors.primary}
                onPress={() => {
                  setShowModal(false);
                }}
              />
              <SecondaryButton 
                color={'#fff'}
                title={getButtonText('Record')} 
                borderRadius={20}
                padding={10}
                bgColor={Colors.primary}
                onPress={track}
              />
            </View>
          </CustomModal>
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
    },
    input: {
      height: 40,
      margin: 12,
      width: vw(65),
      borderWidth: 1,
      padding: 10,
    },
    inputField: {
      marginTop: vh(3),
      width: vw(65)
    }
})

export default Plastics