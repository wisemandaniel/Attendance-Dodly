import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import Colors from '../constants/colors';
import ButtonList from '../components/ButtonGroup';
import PrimaryButton from '../components/PrimaryButton'

const TextInputContainer = (
  {
    type,
    bw,
    password,
    placeholder,
    onFocus = () => {},
    ...props
  }
) => {
  const [isFocused, setIsFocused] = React.useState(false);
  return(
    <View style={{}}>
      <View
        style={{
          ...styles.inputContainer,
          borderWidth: bw
        }}>
        <TextInput
          placeholder={placeholder}
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

const Button = ({onPress}) => {
  
      return(
          <TouchableOpacity onPress={onPress} style={styles.btn}>
                   <Text style={styles.btnText}>ASAP</Text>
          </TouchableOpacity>
      );
  }

const JobAddDetail = () => {
    const buttons = ['Today', 'Tomorrow', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Calendar'];
    const [selectedButtons, setSelectedButtons] = useState([]);

    const buttonsTime = ['ASAP'];
    const [selectedButtonsTime, setSelectedButtonsTime] = useState(['ASAP']);

    const buttonsDuration = ['1 hour', '2 hours', '3 hours'];
    const [selectedButtonsDuration, setSelectedButtonsDuration] = useState(['1 hour']);

    const handleSelection = (selection) => {
      setSelectedButtons(selection);
      console.log(selectedButtons);
    };

    const handleSelectionTime = (selection) => {
        setSelectedButtonsTime(selection);
        console.log(selectedButtonsTime);
    };

    const handleSelectionDuration = (selection) => {
        setSelectedButtonsDuration(selection);
        console.log(selectedButtonsDuration);
    };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 15, paddingLeft: '3.4%'}}>Location</Text>
      <View style={{height: 70, padding: 10}}>
        <TextInputContainer bw={0.5} placeholder={' Bonajo, Douala'} />
      </View>
        
        <View style={{padding: '1%'}}>
            <Text style={{padding: 6, fontSize: 14}}>Date</Text>
            <ButtonList buttons={buttons} onSelection={handleSelection} />
        </View>

       <View style={{padding: '2%'}}>
        <Text style={{fontSize: 14, paddingLeft: 7}}>Time</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: '2%'}}>
            <ButtonList buttons={buttonsTime} onSelection={handleSelectionTime} />
            <Text>or</Text>
            <View style={{ width: '60%', height: '75%', alignItems: 'center', padding: '3.4%', margin: '2%', borderWidth: 1.5, borderColor: '#A6A6A6', borderRadius: 11}}>
            <View style={{flexDirection: 'row'}}>
                <View style={{width: '30%'}}>
                    <View style={{height: 25, margin: 2}}>
                        <TextInputContainer bw={2} placeholder={'1'} />
                    </View>
                </View>
                <View style={{width: '30%'}}>
                    <View style={{height: 25, margin: 2}}>
                        <TextInputContainer bw={2} placeholder={'30'} />
                    </View>
                </View>
                <View style={{width: '30%'}}>
                    <View style={{height: 25, margin: 2}}>
                        <TextInputContainer bw={2} placeholder={'30'} />
                    </View>
                </View>
            </View>
            </View>
            </View>
       </View>
        
        <View style={{padding: '2%'}}>
            <Text style={{padding: 5, fontSize: 14, marginTop: '3%'}}>Work Duration</Text>
            <View style={{justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center'}}>
                <ButtonList buttons={buttonsDuration} onSelection={handleSelectionDuration} />
                <View style={{width: '35%'}}>
                    <View style={{height: 53, padding: 8}}>
                        <TextInputContainer bw={0.5} placeholder={'type'} />
                    </View>
                </View>
            </View>
        </View>

        <View style={{width: '100%'}}>
            <Text style={{fontSize: 15, paddingLeft: '3.4%', marginTop: '7%'}}>Payment</Text>
            <View style={{height: 70, padding: 10, marginBottom: '1%'}}>
                <TextInputContainer bw={0.5} placeholder={'e.g 8000cfa'} />
            </View>
        </View>

        <View style={{width: '80%', marginLeft: 'auto', marginRight: 'auto', marginTop: '3%'}}>
            <PrimaryButton 
                title={'Continue'} 
                bgColor={Colors.black} 
                borderRadius={6}
                onPress={() => navigation.navigate('Registration')}
            />
        </View>
    </View>
  )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            padding: '5%',
            backgroundColor: '#fff'
        },
        inputContainer: {
          height: '100%',
          backgroundColor: Colors.white,
          flexDirection: 'row',
          borderColor: '#C2C2C2',
          paddingHorizontal: 15,
          borderRadius: 8
        }
    }
)

export default JobAddDetail
