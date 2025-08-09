import { View, Text, TouchableOpacity, Animated } from 'react-native';
import React, { useRef, useState } from 'react';
import { RightArrowSvg } from '../assets/svg';

const CustomAcordion = ({ item }) => {
  const [showAcordion, setShowAcordion] = useState(false);

  const animation = useRef(new Animated.Value(0)).current;

  Animated.spring(animation, {
    toValue: showAcordion ? 1 : 0,
    useNativeDriver: false,
  }).start();

  const rotate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['90deg', '-90deg'],
  });

  const contentHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100]
  })

  return (
    <View>
      <TouchableOpacity
        className="flex-row items-center justify-between py-3"
        onPress={() => setShowAcordion(!showAcordion)}
      >
        <Text className="font-proxima-nova-semibold text-xl text-[#3C3A45]">
          {item.title}
        </Text>
        <Animated.View style={{ transform: [{ rotate: rotate }] }}>
          <RightArrowSvg />
        </Animated.View>
      </TouchableOpacity>

      {showAcordion && (
        <Animated.View style={{height: contentHeight}}>
          <Text className="font-proxima-nova-regular text-base text-[#3C3A4580]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </Animated.View>
      )}
    </View>
  );
};

export default CustomAcordion;
