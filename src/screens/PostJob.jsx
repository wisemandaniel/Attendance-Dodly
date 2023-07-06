import React, { useState } from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, FlatList, TextInput } from 'react-native'
import { EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Colors from '../constants/colors';

const TextInputContainer = (
  {
    type,
    password,
    onFocus = () => {},
    ...props
  }
) => {
  const [isFocused, setIsFocused] = React.useState(false);
  return(
    <View style={{}}>
      <View
        style={[
          styles.inputContainer,
        ]}>
        <TextInput
          placeholder='Type the job that you want to post..'
          keyboardType={type}
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          style={{color: Colors.darkBlue, flex: 1, padding: 10, borderWidth: 0 }}
          {...props}
        />
      </View>
    </View>
  );
}

const Template = ({item, index}) => {
  const nav = useNavigation();

    return(
        <TouchableOpacity onPress={() => nav.navigate('JobAddDetail')} style={{height: 230, width: '45%', borderRadius: 19, overflow: 'hidden', backgroundColor: '#000', margin: '2.5%',}}>
            <ImageBackground source={{uri: 'https://www.xtreme-cleaning.co.uk/hidden-wp/wp-content/uploads/2021/10/Cleaning-team.png'}}resizeMode="cover" style={styles.image}>
               <View style={{ position: 'absolute', bottom: 0, width: '100%', height: '20%', alignItems: 'center', justifyContent: 'center'}}>
                 <Text style={{color: 'white', fontSize: 20, fontWeight: 900, paddingLeft: 5}}>{item.title}</Text>
               </View>
            </ImageBackground>
        </TouchableOpacity>
    );
}

const PostJob = () => {
    const [data, setData] = useState([
        {
            id: 1,
            title: 'Hello'
        },
        {
            id: 2,
            title: 'Hi'
        },
        {
            id: 3,
            title: 'Hey'
        },
        {
            id: 4,
            title: 'Hey'
        },
        {
            id: 5,
            title: 'Hey'
        },
        {
            id: 6,
            title: 'Hey'
        }
    ])
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
          <Text style={{color: 'black', fontSize: 16}}>Choose a template</Text> 
          <EvilIcons name="search" size={32} color="black" />
      </View>
      <View style={{padding: 10, flex:1, flexDirection:'row',}}>
        <FlatList 
        style={{width: '100%', padding: 10}}
        data={data}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <Template item={item} />}
        keyExtractor={item => item.id}
         />
      </View>
      <Text style={{textAlign: 'center', fontSize: 18}}>Or</Text>
      <View style={{height: '12%', padding: 10, marginBottom: '8%'}}>
        <TextInputContainer />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
     position: 'relative',
     backgroundColor: '#FBFBFB',
    },
    image: {
      opacity: 0.8,
      height: '100%',
    },
    inputContainer: {
      height: '100%',
      marginBottom: '2%',
      backgroundColor: Colors.white,
      flexDirection: 'row',
      borderColor: '#C2C2C2',
      borderRadius: 20,
      paddingHorizontal: 15,
      borderWidth: 0.5
    }
 })

export default PostJob
