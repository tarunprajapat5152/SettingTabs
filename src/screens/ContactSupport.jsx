import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import React from 'react';
import {
  BackArrowOutlinedSvg,
  ChatNormalIConSvg,
  EmailIconSvg,
  PhoneNormalIConSvg,
} from '../assets/svg';
import { MassageChatImage } from '../assets/images';
import CustomBotton from '../components/CustomBotton';

const ContactSupport = ({ navigation }) => {
  const btnDetails = [
    {
      icon: ChatNormalIConSvg,
      title: 'Start Live Chat',
    },
    {
      icon: PhoneNormalIConSvg,
      title: 'Phone Support',
    },
    {
      icon: EmailIconSvg,
      title: 'Email Support',
    },
  ];

  return (
    <ScrollView className="flex-1">
      <View className="flex-row items-center px-5 py-5">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackArrowOutlinedSvg />
        </TouchableOpacity>
        <Text className="ms-10 font-montserrat-bold text-2xl text-[#3C3A45]">
          Contact & Support
        </Text>
      </View>

      <View className="mt-14 items-center">
        <Image height={141} width={169} source={MassageChatImage} />
        <View className="mt-8">
          <Text className="text-center font-montserrat-bold text-xl">
            Need Assistance?
          </Text>
          <Text className="text-center font-montserrat-bold text-xl">
            We’re Here to Help
          </Text>
          <View className="mt-2">
            <Text className="text-center font-proxima-nova-regular text-lg">
              Our team’s here for you. Just reachout,
            </Text>
            <Text className="text-center font-proxima-nova-regular text-lg leading-4">
              and we’ll take care for you!
            </Text>
          </View>
        </View>
      </View>

      <View className="mt-20">
        {btnDetails.map((item, index) => (
          <View key={index}>
            <CustomBotton item={item} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default ContactSupport;
