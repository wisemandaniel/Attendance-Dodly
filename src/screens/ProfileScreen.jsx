// import { URL } from 'react-native-url-polyfill/auto';
// import React, {useState, useRef, useEffect} from 'react';
// import {
//   View,
//   StyleSheet,
//   Dimensions,
//   Image,
//   StatusBar,
//   ScrollView,
//   SafeAreaView,
//   Animated,
//   TouchableOpacity,
//   ImageBackground,
//   Text,
// } from 'react-native';
// import { vw, vh } from 'react-native-expo-viewport-units';
// import {TabView, TabBar} from 'react-native-tab-view';
// import PrimaryButton from '../components/PrimaryButton';
// import Colors from '../constants/colors';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// import { createClient } from '@supabase/supabase-js'
// const supabaseUrl = 'https://fooiwhusdtnbmbizrgog.supabase.co'
// const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZvb2l3aHVzZHRuYm1iaXpyZ29nIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM1NTA5MjUsImV4cCI6MTk5OTEyNjkyNX0.SnbibjqI0h0O6cc9FUdiSa-A4ASEhhOLrUZilOjniAM'
// const supabase = createClient(supabaseUrl, supabaseKey)

// const CommunityCard = ({item}) => {
  
//    const regCourse = () => {
//     console.log(item);
//    }

//    return(
//     <TouchableOpacity onPress={regCourse} style={[styles.sceneCommunity, {backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center'}]}>
//       <View style={{backgroundColor: '#293B4E', borderRadius: 10, width: vw(98), height: vh(15), marginTop: vh(3), justifyContent:'center'}}>
//          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: vw(4)}}>
//             <View style={{flexDirection: 'row', justifyContent: 'space-between', width: vw(73), paddingLeft: vw(3), alignItems: 'center', width: vw(90)}}>
//                 <View style={{backgroundColor: '#FF9134', borderRadius: 100}}>
//                   <Text style={{color: '#fff', paddingLeft: vw(3), paddingRight: vw(3), paddingTop: vh(0.7), paddingBottom: vh(0.7)}}>{item.code}</Text>
//                 </View>
//                 <View>
//                   <Text style={{color: '#fff', marginBottom: vh(2), fontWeight: 700, fontSize: 18}}>{item.title}</Text>
//                   <Text style={{color: '#91919F',  fontSize: 16}}>Register this course</Text>
//                 </View>
//               </View>
//          </View>
//       </View>
//     </TouchableOpacity>
//    );
// }



// const DATA = [
//   {name: 'Ndzo Daniel'},
//   {name: 'Mr Bayuga'},
//   {name: 'Ndzo Daniel'},
//   {name: 'Mr Bayuga'},
//   {name: 'Ndzo Daniel'},
//   {name: 'Mr Bayuga'},
//   {name: 'Ndzo Daniel'},
//   {name: 'Mr Bayuga'},
//   {name: 'Ndzo Daniel'},
//   {name: 'Mr Bayuga'},
// ];
// const HEADER_HEIGHT = 270;
// const TAB_BAR_HEIGHT = 70;

// const initialLayout = {
//   height: 0,
//   width: Dimensions.get('window').width,
// };

// const SecondRoute = ({
//   position,
//   syncOffset,
//   secondRef,
//   onMomentumScrollBegin,
// }) => {
  
  // const [courses, setCourses] = useState([])
  // const getCourses = async () => {
  //   try {
  //     let { data: courses, error } = await supabase
  //     .from('courses')
  //     .select('*')

  //     setCourses(courses)
  //     console.log(courses);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // const getUserId = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('id');
  //     if (value !== null) {
  //       console.log(value);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

//   useEffect(() => {
//    getCourses()
//    getUserId() 
//   }, [])

//   const regCourse = () => {

//   }

//   return (
//     <Animated.FlatList
//     ref={secondRef}
//     data={courses}
//     keyExtractor={(item, i) => String(i)}
//     showsVerticalScrollIndicator={false}
//     renderItem={CommunityCard}
//     contentContainerStyle={{paddingTop: HEADER_HEIGHT + TAB_BAR_HEIGHT}}
//   />
//   );
// }


// const ThirdRoute = ({
//   position,
//   syncOffset,
//   thirdRef,
//   onMomentumScrollBegin,
// }) => (
//   <Animated.FlatList
//     ref={thirdRef}
//     data={DATA}
//     keyExtractor={(item, i) => String(i)}
//     showsVerticalScrollIndicator={false}
//     renderItem={({item}) => (
//       <View style={[styles.scene, {backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center'}]}>
//         <View>
//         <Text>{item.name}</Text>
//         </View>
//       </View>
//     )}
//     contentContainerStyle={{paddingTop: HEADER_HEIGHT + TAB_BAR_HEIGHT}}
//   />
// );

// const FourthRoute = ({
//   position,
//   syncOffset,
//   fourthRef,
//   onMomentumScrollBegin,
// }) => (
//   <Animated.FlatList
//     ref={fourthRef}
//     scrollEventThrottle={1}
//     data={DATA}
//     keyExtractor={(item, i) => String(i)}
//     showsVerticalScrollIndicator={false}
//     renderItem={({item}) => (
//       <View style={[styles.scene, {backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center'}]}>
//         <View>
//         <Text>{item.name}</Text>
//         </View>
//       </View>
//     )}
//     contentContainerStyle={{paddingTop: HEADER_HEIGHT + TAB_BAR_HEIGHT}}
//   />
// );

// const ProfileScreen = () => {


//   const [index, setIndex] = useState(0);
//   const [routes] = useState([
//     // {key: 'first', title: 'Activity'},
//     {key: 'second', title: 'All Courses'},
//     {key: 'third', title: 'My courses'},
//     {key: 'fourth', title: 'History'},
//   ]);

//   const position = useRef(new Animated.Value(0)).current;
//   const isValidTabPress = useRef(false);

//   // const firstRef = useRef();
//   const secondRef = useRef();
//   const thirdRef = useRef();
//   const fourthRef = useRef();

//   const onMomentumScrollBegin = () => {
//     isValidTabPress.current = true;
//   };

//   const syncOffset = (scene, y) => {
//     console.log(scene, y);
    
//     if (scene === 'second') {
//       thirdRef?.current?.scrollToOffset({
//         offset: y,
//         animated: false,
//       });
//       fourthRef?.current?.scrollToOffset({
//         offset: y,
//         animated: false,
//       });
//     }
//     if (scene === 'third') {
//       secondRef?.current?.scrollToOffset({
//         offset: y,
//         animated: false,
//       });
//       fourthRef?.current?.scrollToOffset({
//         offset: y,
//         animated: false,
//       });
//     }
//     if (scene === 'fourth') {
//       secondRef?.current?.scrollToOffset({
//         offset: y,
//         animated: false,
//       });
//       thirdRef?.current?.scrollToOffset({
//         offset: y,
//         animated: false,
//       });
//     }
//     isValidTabPress.current = false;
//   };


  // const Header = () => {
  //   return(
  //     <View
  //         style={{
  //           height: vh(25),
  //           marginLeft: 'auto',
  //           marginRight: 'auto',
  //           alignItems: 'center',
  //           justifyContent: 'center'
  //         }}>
  //         <ImageBackground style={{width: vw(100), height: vh(25)}} source={require('../../assets/profilePic.png')} >
  //           <View style={{height: vh(25), flexDirection: 'row', justifyContent: 'space-between', width: vw(100), backgroundColor: 'transparent', padding: vw(2)}}>

  //             <View style={{backgroundColor: 'transparent', width: vw(50), alignItems: 'flex-start', justifyContent: 'flex-end'}}>
  //               <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: vw(46), marginBottom: vh(3)}}>
  //                  <Text style={{fontSize: 24, color: '#fff', fontWeight: 900}}>Ndzo Daniel</Text>
  //               </View>
  //               <Text style={{fontSize: 20, color: '#fff'}}>FE18A045</Text>
  //             </View>

  //             <View style={{alignItems: 'center', width: vw(10)}}>
  //                 <PrimaryButton bgColor={Colors.black} title={'Logout'} />
  //             </View>
  //           </View>
  //         </ImageBackground>
  //       </View>
  //   );
  // }

//   const renderScene = ({route}) => {
//     switch (route.key) {
//       case 'second':
//         return (
//           <SecondRoute
//             position={position}
//             syncOffset={syncOffset}
//             secondRef={secondRef}
//             onMomentumScrollBegin={onMomentumScrollBegin}
//           />
//         );
//         case 'third':
//           return (
//             <ThirdRoute
//               position={position}
//               syncOffset={syncOffset}
//               thirdRef={thirdRef}
//               onMomentumScrollBegin={onMomentumScrollBegin}
//             />
//           );
//         case 'fourth':
//           return (
//             <FourthRoute
//               position={position}
//               syncOffset={syncOffset}
//               fourthRef={fourthRef}
//               onMomentumScrollBegin={onMomentumScrollBegin}
//             />
//           );
//       default:
//         return null;
//     }
//   };

//   function renderTabBar(props) {
//     const translateY = position.interpolate({
//       inputRange: [0, vh(25)],
//       outputRange: [0, vh(-25)],
//       extrapolate: 'clamp',
//     });
//     return (
//       <Animated.View
//         style={[
//           {position: 'absolute', top: 0, left: 0, right: 0, zIndex: 1},
//           {transform: [{translateY}]},
//         ]}>
//         <Header />
//         <TabBar
//           {...props}
//           labelStyle={{color: 'gray', fontSize: 14, textTransform: 'capitalize', padding: 0}}
//           activeColor={'#FF9134'}
//           bounces={false}
//           indicatorStyle={{backgroundColor: 'transparent'}}
//           style={{height: TAB_BAR_HEIGHT, backgroundColor: '#fff', justifyContent: 'flex-end'}}
//           onTabPress={({route, preventDefault}) => {
//             if (isValidTabPress.current) {
//               // preventDefault();
//             }
//           }}
//         />
//       </Animated.View>
//     );
//   }

//   return (
//     <>
//       <StatusBar barStyle="light-content" />
//       <SafeAreaView style={{flex: 1}}>
//         <TabView
//           navigationState={{index, routes}}
//           renderScene={renderScene}
//           renderTabBar={renderTabBar}
//           onIndexChange={setIndex}
//           initialLayout={initialLayout}
//         />
//       </SafeAreaView>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   scene: {
//     height: vh(40),
//   },
//   sceneCommunity: {
//     height: vh(20),
//   },
//   sceneActivity: {
//     height: vh(50),
//   },
// });

// export default ProfileScreen;

import { URL } from 'react-native-url-polyfill/auto';
import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { vh, vw } from 'react-native-expo-viewport-units';
import { createClient } from '@supabase/supabase-js'
import AsyncStorage from '@react-native-async-storage/async-storage';

const supabaseUrl = 'https://fooiwhusdtnbmbizrgog.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZvb2l3aHVzZHRuYm1iaXpyZ29nIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM1NTA5MjUsImV4cCI6MTk5OTEyNjkyNX0.SnbibjqI0h0O6cc9FUdiSa-A4ASEhhOLrUZilOjniAM'
const supabase = createClient(supabaseUrl, supabaseKey)

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="All courses" component={Screen1} />
      <Tab.Screen name="My courses" component={Screen2} />
    </Tab.Navigator>
  );
}

function Screen1() {
  const CommunityCard = ({item}) => {
  
    const regCourse = async () => {
      console.log(item);
      const { data, error } = await supabase
      .from('reg_courses')
      .insert([
        { user_id: id, course_id: item.id, code: item.code, title: item.title },
      ]).select('*')
      
      getCourses()
      console.log(data);
      console.log(error);
    }
  
    return(
     <TouchableOpacity onPress={regCourse} style={{marginTop: vh(2), marginBottom: vh(2)}}>
       <View style={{backgroundColor: '#293B4E', borderRadius: 10, width: vw(98), height: vh(15), justifyContent:'center'}}>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: vw(4)}}>
             <View style={{flexDirection: 'row', justifyContent: 'space-between', width: vw(73), paddingLeft: vw(3), alignItems: 'center', width: vw(90)}}>
                 <View style={{backgroundColor: '#FF9134', borderRadius: 100}}>
                   <Text style={{color: '#fff', paddingLeft: vw(3), paddingRight: vw(3), paddingTop: vh(0.7), paddingBottom: vh(0.7)}}>{item.code}</Text>
                 </View>
                 <View>
                   <Text style={{color: '#fff', marginBottom: vh(2), fontWeight: 700, fontSize: 18}}>{item.title}</Text>
                   <Text style={{color: '#91919F',  fontSize: 16}}>Register this course</Text>
                 </View>
               </View>
          </View>
       </View>
     </TouchableOpacity>
    );
  }
  
  const [courses, setCourses] = useState([])
  const [regCourses, setRegCourses] = useState([])
  const [notRegCourses, setNotRegCourses] = useState([])
  const [id, setId] = useState('')

  const getUserId = async () => {
    try {
      const value = await AsyncStorage.getItem('user_att');
      if (value !== null) {
        const valueObj = JSON.parse(value)
        console.log(valueObj.id);
        setId(valueObj.id)
        console.log('id', id);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const getCourses = async () => {
    try {
      let { data: courses, error } = await supabase
      .from('courses')
      .select('*')

      setCourses(courses)
      console.log('all courses', courses);
    } catch (error) {
      console.log(error);
    }

    try {
      let { data: courses, error } = await supabase
      .from('reg_courses')
      .select('*')
      .eq('user_id', id)

      setRegCourses(courses)
      console.log('registered: ', regCourses);
    } catch (error) {
      console.log(error);
    }

    const results = courses.filter(({ code: id1 }) => !regCourses.some(({ code: id2 }) => id2 === id1));

    setNotRegCourses(results)
    console.log('not registered', results);
  }

  React.useEffect(() => {
    getUserId()
    getCourses()
  }, [])

  return (
    <View style={styles.screen}>
      <FlatList
         data={notRegCourses}
         keyExtractor={(item) => item.id}
         renderItem={CommunityCard}
      />
    </View>
  );
}

function Screen2() {

  const CommunityCard = ({item}) => {
  
    return(
     <TouchableOpacity style={{marginTop: vh(2), marginBottom: vh(2)}}>
       <View style={{backgroundColor: '#293B4E', borderRadius: 10, width: vw(98), height: vh(15), justifyContent:'center'}}>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: vw(4)}}>
             <View style={{flexDirection: 'row', justifyContent: 'space-between', width: vw(73), paddingLeft: vw(3), alignItems: 'center', width: vw(90)}}>
                 <View style={{backgroundColor: '#FF9134', borderRadius: 100}}>
                   <Text style={{color: '#fff', paddingLeft: vw(3), paddingRight: vw(3), paddingTop: vh(0.7), paddingBottom: vh(0.7)}}>{item.code}</Text>
                 </View>
                 <View>
                   <Text style={{color: '#fff', marginBottom: vh(2), fontWeight: 700, fontSize: 18}}>{item.title}</Text>
                   <Text style={{color: '#91919F',  fontSize: 16}}>Register this course</Text>
                 </View>
               </View>
          </View>
       </View>
     </TouchableOpacity>
    );
  }

  const [regCourses, setRegCourses] = useState([])

  const getRegCourses = async () => {
    try {
      let { data: courses, error } = await supabase
      .from('reg_courses')
      .select('*')
      .eq('user_id', 7)

      setRegCourses(courses)
      console.log('registered: ', regCourses);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getRegCourses()
  }, [])
  return (
    <View style={styles.screen}>
      {/* <Text>No registered course</Text> */}
        <View style={styles.screen}>
          <FlatList
            data={regCourses}
            keyExtractor={(item) => item.id}
            renderItem={CommunityCard}
          />
      </View>
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

export default function ProfileScreen() {
  return (
    <NavigationContainer independent={true}>
      <Header />
      <MyTabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#2196F3',
    height: vh(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
  },
});