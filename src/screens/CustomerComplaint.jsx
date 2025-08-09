import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React, { useState } from 'react';
import {
  BackArrowOutlinedSvg,
  DownArrowSvg,
  RightArrowSvg,
} from '../assets/svg';
import CustomerComplaintCard from '../components/CustomerComplaintCard';

const CustomerComplaint = ({ navigation }) => {
  const [activeOption, setActiveOption] = useState('All');

  const dropDown = [
    {
      title: 'Last Week',
      icon: RightArrowSvg,
      angle: 'rotate-90',
    },
    {
      title: 'Status',
      icon: RightArrowSvg,
      angle: 'rotate-90',
    },
    {
      title: 'Export History',
      icon: DownArrowSvg,
      angle: 'rotate-0',
    },
  ];

  const options = ['All', 'Closed', 'Pending', 'Not Processed'];

  const complaintData = [
    {
      id: '58796412',
      customerName: 'Satyam Ratnakar',
      date: '16/12/2024',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      status: 'Closed',
    },
    {
      id: '58797412',
      customerName: 'Satyam Ratnakar',
      date: '16/12/2024',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      status: 'Pending',
    },
    {
      id: '58798412',
      customerName: 'Satyam Ratnakar',
      date: '16/12/2024',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      status: 'Not Processed',
    },
    {
      id: '58799412',
      customerName: 'Satyam Ratnakar',
      date: '16/12/2024',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      status: 'Closed',
    },
  ];

  return (
    <ScrollView className="flex-1 bg-[#ECECEC]">
      {/* Header Section */}
      <View className="bg-white">
        <View className="flex-row items-center px-4 py-4">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackArrowOutlinedSvg />
          </TouchableOpacity>
          <Text className="ms-10 font-montserrat-bold text-2xl text-[#3C3A45]">
            Customer Complaint
          </Text>
        </View>

        {/* Filter Button */}
        <View className="flex-row justify-between px-4 py-4">
          {dropDown.map((item, index) => (
            <TouchableOpacity
              key={index}
              className="flex-row items-center rounded-full border border-[#00000033] px-3 py-1"
            >
              <Text className="font-proxima-nova-bold text-base text-black">
                {item.title}
              </Text>
              <View className={`ms-3 ${item.angle}`}>
                <item.icon />
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Status Tabs */}
        <View className="flex-row justify-between px-4 pt-4">
          {options.map((item, index) => (
            <TouchableOpacity
              key={index}
              className={`flex-row ${
                activeOption === item && 'border-b-4 border-[#268F8C]'
              }`}
              onPress={() => setActiveOption(item)}
            >
              <Text
                className={`pb-2 font-montserrat-bold text-base ${
                  activeOption === item ? 'text-[#268F8C]' : 'text-[#3C3A4580]'
                }`}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Complaint Card */}
      {complaintData.map((item, index) => (
        <View key={index}>
          <CustomerComplaintCard item={item} />
        </View>
      ))}
    </ScrollView>
  );
};

export default CustomerComplaint;
