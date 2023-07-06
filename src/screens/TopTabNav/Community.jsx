import React, { useEffect, useState, useMemo, memo } from 'react'
import { View, ImageBackground, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import Data from '../../../assets/data'
import { Dimensions } from 'react-native'
import CommunityCard from '../../components/CommunityCard'
import { vw, vh, vmin, vmax } from 'react-native-expo-viewport-units';

const d2 = Data

const height2 = Dimensions.get('window').height;

const height1 = height2 - ((16/100) * height2);

const Community = () => {

  const [data, setData] = useState()

  useEffect(() => {
    setData(d2)
  }, [])

  return (
       <FlatList
        data={data}
        pagingEnabled
        windowSize={1000}
        removeClippedSubviews={true}
        snapToAlignment={'center'}
        decelerationRate={'fast'}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <CommunityCard item={item} /> }
        keyExtractor={item => item.id}
      />
  )
}

export default Community
