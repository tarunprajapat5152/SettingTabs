import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { BackArrowOutlinedSvg, RightArrowSvg } from '../assets/svg';
import CustomAcordion from '../components/CustomAcordion';

const FAQ = ({ navigation }) => {
  const sections = [
    {
      title: 'General Questions',
      items: [
        { title: 'Lorem ipsum dolor sit amet,' },
        { title: 'Lorem ipsum dolor sit amet,' },
        { title: 'Lorem ipsum dolor sit amet,' },
      ],
      style: 'mt-0',
    },
    {
      title: 'Order Management',
      items: [
        { title: 'Lorem ipsum dolor sit amet,' },
        { title: 'Lorem ipsum dolor sit amet,' },
        { title: 'Lorem ipsum dolor sit amet,' },
      ],
      style: 'mt-5',
    },
    {
      title: 'Payment & Invoices',
      items: [
        { title: 'Lorem ipsum dolor sit amet,' },
        { title: 'Lorem ipsum dolor sit amet,' },
        { title: 'Lorem ipsum dolor sit amet,' },
      ],
      style: 'mt-5',
    },
    {
      title: 'Promotions & Advertising',
      items: [
        { title: 'Lorem ipsum dolor sit amet,' },
        { title: 'Lorem ipsum dolor sit amet,' },
        { title: 'Lorem ipsum dolor sit amet,' },
      ],
      style: 'mt-5',
    },
  ];

  return (
    <ScrollView className="flex-1 bg-[#ECECEC]">
      {/* Header Section */}
      <View className=" bg-white">
        <View className="mx-5 flex-row items-center border-b border-[#0000001A] bg-white py-5">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackArrowOutlinedSvg />
          </TouchableOpacity>
          <Text className="mr-10 flex-1 text-center font-montserrat-bold text-2xl text-[#3C3A45]">
            FAQ
          </Text>
        </View>
      </View>

      {/* FAQ Section */}
      {sections.map((item, index) => (
        <View key={index} className={`bg-white px-5 py-7 ${item.style}`}>
          <Text className="pb-2 font-montserrat-bold text-xl text-[#3C3A45]">
            {item.title}
          </Text>
          {item.items.map((item, index) => (
            <View key={index}>
              <CustomAcordion item={item} />
            </View>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

export default FAQ;
