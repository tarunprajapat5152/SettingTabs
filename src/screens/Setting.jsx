import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { BackArrowOutlinedSvg, RightArrowSvg } from '../assets/svg';

const sections = [
  {
    title: 'Settings',
    items: [{ title: 'Scheduling Time' }, { title: 'Notification' }],
  },
  {
    title: 'Orders',
    items: [{ title: 'Order History' }, { title: 'Customer Complaints' }],
  },
  {
    title: 'Business',
    items: [{ title: 'Payouts' }, { title: 'Invoices' }, { title: 'Taxes' }],
  },
  {
    title: 'Analytics',
    items: [],
  },
  {
    title: 'Help Center',
    items: [
      { title: 'FAQ' },
      { title: 'Contact & Support' },
      { title: 'Submit A Request' },
      { title: 'User Guide & Tutorials' },
      { title: 'System Status' },
      { title: 'Feedback & Suggestion' },
    ],
  },
];

const Setting = ({ navigation }) => {
  return (
    <ScrollView className="flex-1 bg-[#FFFFFF] px-4 py-4">
      {/* Header */}
      <View className="flex flex-row items-center border-b-2 border-[#ECECEC] pb-3">
        <TouchableOpacity className="ml-1" onPress={() => navigation.goBack()}>
          <BackArrowOutlinedSvg />
        </TouchableOpacity>
        <Text className="ml-24 font-montserrat-bold text-2xl text-[#3C3A45]">
          Settings
        </Text>
      </View>

      {/* Sections */}
      {sections.map((item, index) => (
        <View key={index} className="border-b border-[#0000001A] pb-5">
          <Text className="mb-3 mt-8 font-montserrat-bold text-xl text-[#3C3A45]">
            {item.title}
          </Text>

          {item.items.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate('Invoice')}
            >
              <View className="flex-row items-center justify-between py-2">
                <Text className="font-proxima-nova-bold text-xl text-[#3C3A45]">
                  {item.title}
                </Text>
                <RightArrowSvg />
              </View>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

export default Setting;
