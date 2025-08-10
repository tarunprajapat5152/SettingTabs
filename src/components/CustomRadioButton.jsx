import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const CustomRadioButton = ({ value, selectedValue, setSelectedValue }) => {
  const isChecked = value === selectedValue;

  return (
    <View>
      <TouchableOpacity
        className="h-[25px] w-[25px] items-center justify-center rounded-full border-2 border-[#268F8C]"
        onPress={() => setSelectedValue(value)}
      >
        {isChecked && (
          <View className="h-[15px] w-[15px] rounded-full bg-[#268F8C]" />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default CustomRadioButton;
