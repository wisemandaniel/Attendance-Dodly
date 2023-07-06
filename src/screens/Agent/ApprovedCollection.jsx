import React, { useState, useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import Colors from '../../constants/colors'
import { useRoute } from "@react-navigation/native"
import { useNavigation } from '@react-navigation/native'

const ApproveCollection = () => {
  const route = useRoute()
  const data = route.params?.dta
  // const totalPlastics = data.first + data.second + data.third
  const nav = useNavigation();

  const [first2, setFirst] = useState(data.first)
  const [second, setSecond] = useState(data.second)
  const [third, setThird] = useState(data.third)

  const totalPlastics = 16

  const addFirst = () => {
    data.first ++;
    setFirst(data.first)
  }

  const subFirst = () => {
    if (first2 > 0) {
      data.first --
      setFirst(data.first)
    }
  }

  const addSecond = () => {
    data.second ++;
    setSecond(data.second)
  }

  const subSecond = () => {
    if (second > 0) {
      data.second --
      setSecond(data.second)
    }
  }
  const addThird = () => {
    data.third ++;
    setThird(data.third)
  }

  const subThird = () => {
    if (third > 0) {
      data.third --
      setThird(data.third)
    }
  }

  return (
    <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginTop: '10%', marginLeft: 40, padding: 10, width: '85%'}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', width: '50%'}}>
                <Image style={{width: 50, height: 50, borderRadius: 100}} source={{uri: 'https://media.licdn.com/dms/image/C5603AQG9NWIOOX5-nA/profile-displayphoto-shrink_800_800/0/1650938124731?e=2147483647&v=beta&t=GwCj-_ULboZqprCSXI6WUArHKX9tS7YEueG4jJNJyXE'}} />
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>ndzo daniel</Text>
           </View>
           <View style={{width: '20%', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
                <Image style={{width: 25, height: 70}} source={require('../../../assets/plastic.png')} />
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>{data.first + data.second + data.third}</Text>
           </View>
        </View>

      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginTop: '1%', elevation: 30, backgroundColor: Colors.white, padding: 10}}>
      <View style={styles.big} >
            <View style={styles.upper}>
              <Image style={{width: 50, height: 115, marginLeft: 'auto', marginRight: 'auto'}} source={require('../../../assets/plastic.png')} />
            </View>

            <View style={styles.lower}>
              <View style={styles.value}>
                <Text style={{textAlign: 'center', fontSize: 32, color: Colors.black}}>{first2}</Text>
              </View>
            </View>

            <View style={styles.action}>
              <TouchableOpacity onPress={addFirst} style={styles.left}>
                  <Text style={{textAlign: 'center', 
                              fontSize: 48,
                              color: Colors.black}}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={subFirst} style={styles.right}><Text style={{textAlign: 'center', 
                      fontSize: 48,
                      color: Colors.black}}>-</Text>
              </TouchableOpacity>
           </View>
        </View>
        <View>
          <Text style={{textAlign: 'center', marginBottom: 20, fontSize: 24}}>{data.first * 100}cfa</Text>
          <View style={{width: 70, height: 40, borderWidth: 1, borderRadius: 5, alignItems: 'center', justifyContent: 'center'}}>
             <Image style={{width: 30, height: 23}} source={require('../../../assets/tick2.png')} />
          </View>
        </View>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginTop: '1%', elevation: 30, backgroundColor: Colors.white, padding: 10}}>
      <View style={styles.big} >
            <View style={styles.upper}>
              <Image style={{width: 50, height: 115, marginLeft: 'auto', marginRight: 'auto'}} source={require('../../../assets/plastic.png')} />
            </View>

            <View style={styles.lower}>
              <View style={styles.value}>
                <Text style={{textAlign: 'center', fontSize: 32, color: Colors.black}}>{second}</Text>
              </View>
            </View>

            <View style={styles.action}>
              <TouchableOpacity onPress={addSecond} style={styles.left}>
                  <Text style={{textAlign: 'center', 
                              fontSize: 48,
                              color: Colors.black}}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={subSecond} style={styles.right}><Text style={{textAlign: 'center', 
                      fontSize: 48,
                      color: Colors.black}}>-</Text>
              </TouchableOpacity>
           </View>
        </View>
        <View>
          <Text style={{textAlign: 'center', marginBottom: 20, fontSize: 24}}>{data.second * 150}cfa</Text>
          <View style={{width: 70, height: 40, borderWidth: 1, borderRadius: 5, alignItems: 'center', justifyContent: 'center'}}>
             <Image style={{width: 30, height: 23}} source={require('../../../assets/tick2.png')} />
          </View>
        </View>
      </View>

      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginTop: '1%', elevation: 30, backgroundColor: Colors.white, padding: 10}}>
      <View style={styles.big} >
            <View style={styles.upper}>
              <Image style={{width: 50, height: 115, marginLeft: 'auto', marginRight: 'auto'}} source={require('../../../assets/plastic.png')} />
            </View>

            <View style={styles.lower}>
              <View style={styles.value}>
                <Text style={{textAlign: 'center', fontSize: 32, color: Colors.black}}>{third}</Text>
              </View>
            </View>

            <View style={styles.action}>
              <TouchableOpacity onPress={addThird} style={styles.left}>
                  <Text style={{textAlign: 'center', 
                              fontSize: 48,
                              color: Colors.black}}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={subThird} style={styles.right}><Text style={{textAlign: 'center', 
                      fontSize: 48,
                      color: Colors.black}}>-</Text>
              </TouchableOpacity>
           </View>
        </View>
        <View>
          <Text style={{textAlign: 'center', marginBottom: 20, fontSize: 24}}>{data.third * 200}cfa</Text>
          <View style={{width: 70, height: 40, borderWidth: 1, borderRadius: 5, alignItems: 'center', justifyContent: 'center'}}>
             <Image style={{width: 30, height: 23}} source={require('../../../assets/tick2.png')} />
          </View>
        </View>
      </View>

      <View style={{marginTop: '5%'}}>
        <Text style={{textAlign: 'center', fontSize: 17
      }}>Total  plastics   {'=>'}   {data.first + data.second + data.third}             <Text style={{color: Colors.green, fontSize: 17, fontWeight: 800}}> = {(data.first * 100) + (data.second * 150) + (data.third * 200)}cfa</Text></Text>
      </View>

      <TouchableOpacity onPress={() => nav.navigate('ApprovedFinalCollection')} style={styles.fab}>
        <Text style={styles.fabIcon}>Approve</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  big: {
    backgroundColor: Colors.primary,
    borderRadius: 15.31,
    overflow: 'hidden',
    width: '65%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 10
  },
  fab: { 
    // position: 'absolute', 
    width: 300, 
    height: 60, 
    alignItems: 'center', 
    left: 27,
    marginRight: 27,
    justifyContent: 'center', 
    marginTop: '7%',
    backgroundColor: '#FF9228', 
    borderRadius: 7, 
    elevation: 20 
    }, 
    fabIcon: { 
      fontSize: 28, 
      color: 'white',
      fontWeight: 700
    },
  upper: {
    backgroundColor: Colors.primary,
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center'
   },
   value: {
      borderRadius: 15.31,
      backgroundColor: Colors.white,
      overflow: 'hidden',
      borderWidth: 0.5,
      borderColor: Colors.black,
      height: 50,
      width: 50,
   },

   lower: {
    backgroundColor: Colors.white,
    width: '35%',
    alignItems: 'center',
    justifyContent: 'center'
   },

   action: {
    display: 'flex',
    flexDirection: 'column',
    width: '25%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.white
   },

   left: {
    backgroundColor: Colors.primary,
    width: '100%'
   },

   right: {
    backgroundColor: Colors.primary,
    width: '100%'
   },
})

export default ApproveCollection
