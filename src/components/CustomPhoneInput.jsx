import React, { useState, useRef } from "react";
import PhoneInput from "react-native-phone-number-input";
import {
  SafeAreaView,
  View,
  StatusBar,
  TouchableOpacity
} from "react-native";

const CusromPhoneInput = ({onch}) => {
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const phoneInput = useRef<PhoneInput>(null);

  return (
    <>
    <StatusBar barStyle="dark-content" />
    <View>
      <SafeAreaView >
        <PhoneInput
          useRef={phoneInput}
          defaultValue={value}
          formattedValue = {formattedValue}
          defaultCode="CM"
          layout="first"
          onChangeText={(text, code) => {
            setValue(text);
          }}
          onChangeFormattedText={ onch }
          withDarkTheme
          withShadow
          autoFocus
        />
        <TouchableOpacity
          onPress={() => {
            const checkValid = phoneInput.current?.isValidNumber(value);
            setShowMessage(true);
            setValid(checkValid ? checkValid : false);
          }}
        >
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  </>
  )
}

export default CusromPhoneInput
