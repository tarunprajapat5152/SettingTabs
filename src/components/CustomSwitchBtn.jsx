import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

const CustomSwithBtn = ({ active, setActiveSwitch, setShowModal }) => {
  console.log("activeValue", active)
  return (
    <TouchableOpacity
      style={[
        styles.switchBtn,
        { backgroundColor: active ? '#43C5C2' : '#00000033' },
      ]}
      className="justify-center"
      onPress={() => {setActiveSwitch(active && false), setShowModal(active ? false : true)}}
    >
      <View
        style={{
          transform: [{ translateX: active ? 19 : -3 }],
          backgroundColor: active ? '#268F8C' : '#7A7A7A',
        }}
        className="h-[28px] w-[28px] rounded-full"
      />
    </TouchableOpacity>
  );
};

export default CustomSwithBtn;

const styles = StyleSheet.create({
  switchBtn: {
    width: 50,
    height: 25,
    padding: 3,
    borderRadius: 25,
    backgroundColor: '#43C5C2',
  },
});
