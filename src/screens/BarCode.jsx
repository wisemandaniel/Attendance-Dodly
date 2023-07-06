import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { BarCodeScanner } from 'expo-barcode-scanner';

const BarCodeScannerScreen = () => {
  const nav = useNavigation();

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  // const [finalData, setFinalData] = useState({})

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    };

    getBarCodeScannerPermissions();
  }, []);

  const handleBarCodeScanned = async ({ type, data }) => {
    setScanned(true);
    const dta = await JSON.parse(data)
    nav.navigate('ApproveCollection', {dta})
    alert(`Bar code with type ${type} and data ${dta.first} has been scanned!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{width: '100%'}}>
        <View>
            <Text style={{textAlign: 'center', marginTop: 50, fontSize: 21}}>Scan code</Text>
        </View>
        <View style={styles.container}>
            <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
            />
        </View>
        <View style={{width: '100%', marginTop: 200}}>
            {scanned && <TouchableOpacity onPress={() => setScanned(false)} style={styles.fab}>
               <Text style={styles.fabIcon}>Scan Again</Text>
            </TouchableOpacity>}
        </View>
    </View>
);
}

const styles = StyleSheet.create({
    container: {
      height: 400,
      width: '100%',
      marginTop: 25
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
  });

export default BarCodeScannerScreen
