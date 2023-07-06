import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';

const ButtonList = ({ buttons, onSelection }) => {
  const [selectedButtons, setSelectedButtons] = useState(['Today']);

  const handlePress = (buttonName) => {
    let existingSelection = selectedButtons.slice();
    if (existingSelection.includes(buttonName)) {
      existingSelection = existingSelection.filter((sel) => sel !== buttonName);
    } else {
      existingSelection.push(buttonName);
    }
    setSelectedButtons(existingSelection);
    onSelection(existingSelection);
  };

  const renderItem = ({ item }) => {
    const isSelected = selectedButtons.includes(item);
    return (
      <TouchableOpacity
        style={{
          backgroundColor: isSelected ? 'blue' : 'white',
          padding: 5,
          borderRadius: 4,
          borderWidth: 1.5,
          borderColor: '#0584FA',
          marginHorizontal: 5,
          marginVertical: 10
        }}
        onPress={() => handlePress(item)}
      >
        <Text style={{ color: isSelected ? '#fff' : '#0584FA', textAlign: 'center', fontSize: 12.5 }}>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{
      // flex: 1,
      justifyContent: 'space-between'}}>
      <FlatList
        data={buttons}
        numColumns={4}
        renderItem={renderItem}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default ButtonList;
