import { View, Text, TextInput, Animated, StyleSheet } from 'react-native';
import React, { useRef, useState } from 'react';
import { getIn } from 'formik';

const FlotingLableTextInput = ({
  formik,
  id,
  lable,
  isTextArea = false,
  numberOfLines = undefined,
  contextMenuHidden = false,
}) => {
  const [isFocue, setIsFocus] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const translateY = useRef(new Animated.Value(0)).current;
  const borderWidth = useRef(new Animated.Value(1)).current;

  Animated.spring(translateY, {
    toValue: isFocue ? 1 : 0,
    useNativeDriver: false,
  }).start();

  const transY = translateY.interpolate({
    inputRange: [0, 1],
    outputRange: [14, -11],
  });

  console.log('Formik Value', formik);

  return (
    <Animated.View
      style={[
        styles.conatiner,
        { borderWidth: 1, borderColor: isFocue ? '#268F8C' : '#000' },
      ]}
    >
      <Animated.View
        style={[styles.animatedStyle, { transform: [{ translateY: transY }] }]}
      >
        <Text
          className={`bg-[#f2f2f2] px-2 font-montserrat-regular ${
            isFocue ? 'text-[#268F8C]' : 'text-black'
          }`}
        >
          {lable}
        </Text>
      </Animated.View>
      <TextInput
        className='px-4'
        value={getIn(formik?.values, id)}
        onChangeText={formik.handleChange(id)}
        onFocus={() => setIsFocus(true)}
        onBlur={() => {setIsFocus(getIn(formik?.values, id) ? true : false)}}
        multiline={isTextArea}
        numberOfLines={numberOfLines}
        contextMenuHidden={contextMenuHidden}
      />
    </Animated.View>
  );
};

export default FlotingLableTextInput;

const styles = StyleSheet.create({
  conatiner: {
    marginTop: 30,
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  animatedStyle: {
    position: 'absolute',
    left: 15,
    borderRadius: 90,
  },
});
