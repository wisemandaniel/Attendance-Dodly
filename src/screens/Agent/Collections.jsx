import React from 'react'
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const List = ({item}) => {
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginTop: '5%', padding: 10}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', width: '50%'}}>
                <Image style={{width: 60, height: 60, borderRadius: 100}} source={{uri: item.img}} />
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>{item.name}</Text>
           </View>
           <View style={{width: '20%', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
                <Image style={{width: 30, height: 80}} source={require('../../../assets/plastic.png')} />
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>{item.bottleNumber}</Text>
           </View>
        </View>
    );
};

const Collections = () => {
  const nav = useNavigation();
  const data = [
    {
        id: 1,
        name: 'Ndzo Daniel',
        img: 'https://media.licdn.com/dms/image/C5603AQG9NWIOOX5-nA/profile-displayphoto-shrink_800_800/0/1650938124731?e=2147483647&v=beta&t=GwCj-_ULboZqprCSXI6WUArHKX9tS7YEueG4jJNJyXE',
        bottleNumber: 10
    },
    {
        id: 2,
        name: 'Amuh Clarita',
        img: 'https://media.licdn.com/dms/image/C5603AQG9NWIOOX5-nA/profile-displayphoto-shrink_800_800/0/1650938124731?e=2147483647&v=beta&t=GwCj-_ULboZqprCSXI6WUArHKX9tS7YEueG4jJNJyXE',
        bottleNumber: 20
    },
    {
        id: 3,
        name: 'Ndzo Ako',
        img: 'https://media.licdn.com/dms/image/C5603AQG9NWIOOX5-nA/profile-displayphoto-shrink_800_800/0/1650938124731?e=2147483647&v=beta&t=GwCj-_ULboZqprCSXI6WUArHKX9tS7YEueG4jJNJyXE',
        bottleNumber: 30
    },
    {
        id: 4,
        name: 'Ndzo Daniel',
        img: 'https://media.licdn.com/dms/image/C5603AQG9NWIOOX5-nA/profile-displayphoto-shrink_800_800/0/1650938124731?e=2147483647&v=beta&t=GwCj-_ULboZqprCSXI6WUArHKX9tS7YEueG4jJNJyXE',
        bottleNumber: 40
    },
    {
        id: 5,
        name: 'Amuh Clarita',
        img: 'https://media.licdn.com/dms/image/C5603AQG9NWIOOX5-nA/profile-displayphoto-shrink_800_800/0/1650938124731?e=2147483647&v=beta&t=GwCj-_ULboZqprCSXI6WUArHKX9tS7YEueG4jJNJyXE',
        bottleNumber: 50
    },
    {
        id: 6,
        name: 'Ndzo Ako',
        img: 'https://media.licdn.com/dms/image/C5603AQG9NWIOOX5-nA/profile-displayphoto-shrink_800_800/0/1650938124731?e=2147483647&v=beta&t=GwCj-_ULboZqprCSXI6WUArHKX9tS7YEueG4jJNJyXE',
        bottleNumber: 60
    },
    {
        id: 7,
        name: 'Amuh Clarita',
        img: 'https://media.licdn.com/dms/image/C5603AQG9NWIOOX5-nA/profile-displayphoto-shrink_800_800/0/1650938124731?e=2147483647&v=beta&t=GwCj-_ULboZqprCSXI6WUArHKX9tS7YEueG4jJNJyXE',
        bottleNumber: 70
    },
    {
        id: 8,
        name: 'Ndzo Ako',
        img: 'https://media.licdn.com/dms/image/C5603AQG9NWIOOX5-nA/profile-displayphoto-shrink_800_800/0/1650938124731?e=2147483647&v=beta&t=GwCj-_ULboZqprCSXI6WUArHKX9tS7YEueG4jJNJyXE',
        bottleNumber: 80
    },
    {
        id: 9,
        name: 'Amuh Clarita',
        img: 'https://media.licdn.com/dms/image/C5603AQG9NWIOOX5-nA/profile-displayphoto-shrink_800_800/0/1650938124731?e=2147483647&v=beta&t=GwCj-_ULboZqprCSXI6WUArHKX9tS7YEueG4jJNJyXE',
        bottleNumber: 90
    },
    {
        id: 10,
        name: 'Ndzo Ako',
        img: 'https://media.licdn.com/dms/image/C5603AQG9NWIOOX5-nA/profile-displayphoto-shrink_800_800/0/1650938124731?e=2147483647&v=beta&t=GwCj-_ULboZqprCSXI6WUArHKX9tS7YEueG4jJNJyXE',
        bottleNumber: 100
    }
  ];
  return (
    <SafeAreaView style={{ backgroundColor: '#52C3FF', flex: 1 }}>
      <View style={styles.container}>
        <Text style={{fontSize: 21, paddingBottom: 40, paddingTop: 30}}>My Collections</Text>
        <View style={{
            width: '95%', 
            flexDirection: 'row', 
            justifyContent : 'space-between'}}>
            <View style={{ 
                borderWidth: 1,
                width: '49%',
                borderRadius: 20}}>
                <Text style={{fontSize: 21, padding: 20, textAlign: 'center'}}> Total </Text>
                <Text style={{
                    fontSize: 25, 
                    paddingBottom: 20,
                    textAlign: 'center',
                    fontWeight: 'bold'}}> 2554 </Text>

            </View>
            <View style={{
                width: '49%',
                borderWidth: 1,
                borderRadius: 20}}>
                <Text style={{fontSize: 20, padding: 20, textAlign: 'center'}}> Today </Text>
                <Text style={{
                    fontSize: 25, 
                    paddingBottom: 20,
                    textAlign: 'center',
                    fontWeight: 'bold'}}> 10 </Text>

            </View>
        </View>
      </View>
        <Text style={{fontSize: 16, padding: 10, marginTop: 10 }}>Upcoming drop offs</Text>
            <FlatList 
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
                <List item={item} />
            )} />
            <TouchableOpacity onPress={() => nav.navigate('BarCodeScannerScreen')} style={styles.fab}>
               <Text style={styles.fabIcon}>Scan Code</Text>
            </TouchableOpacity>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        width: '100%',
        alignItems: 'center'
    },
    fab: { 
        position: 'absolute', 
        width: 300, 
        height: 60, 
        alignItems: 'center', 
        right: 20,
        justifyContent: 'center', 
        bottom: 40, 
        backgroundColor: '#FF9228', 
        borderRadius: 7, 
        elevation: 20 
        }, 
        fabIcon: { 
          fontSize: 28, 
          color: 'white',
          fontWeight: 500
        }
})

export default Collections
