import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const CustomBotton = ({
  item,
  title = '',
  textColor = 'text-white',
  style = 'bg-[#268F8C]',
  onPress = () => {}
}) => {
  return (
    <TouchableOpacity
      className={`mx-5 my-3 flex-row items-center justify-center rounded-full ${style} py-5`}
      onPress={onPress}
    >
      {item && <item.icon />}
      <Text className={`ms-4 font-montserrat-bold text-base ${textColor}`}>
        {item?.title || title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomBotton;
