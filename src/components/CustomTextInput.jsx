import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Colors from '../constants/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomTextInput = ({
  label,
  iconName,
  error,
  bg,
  type,
  password,
  onFocus = () => {},
  ...props
}) => {
  const [hidePassword, setHidePassword] = React.useState(password);
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <View style={{marginBottom: 20}}>
      <Text style={style.label}>{label}</Text>
      <View
        style={[
          style.inputContainer,
          {
            borderColor: error
              ? 'pink'
              : isFocused
              ? Colors.white
              : Colors.white,
            alignItems: 'center',
          },
        ]}>
        <Icon
          name={iconName}
          style={{color: Colors.darkBlue, fontSize: 22, marginRight: 10}}
        />
        <TextInput
          keyboardType={type}
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={hidePassword}
          style={{color: Colors.darkBlue, flex: 1, padding: 10, borderWidth: 0 }}
          {...props}
        />
        {password && (
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
            style={{color: Colors.darkBlue, fontSize: 22}}
          />
        )}
      </View>
      {error && (
        <Text style={{marginTop: 7, color: 'pink', fontSize: 12}}>
          {error}
        </Text>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: Colors.grey,
  },
  inputContainer: {
    height: 55,
    backgroundColor: Colors.primary,
    flexDirection: 'row',
    borderColor: Colors.white,
    paddingHorizontal: 15,
    borderRadius: 50,
    borderWidth: 0.5,
  },
});

export default CustomTextInput;