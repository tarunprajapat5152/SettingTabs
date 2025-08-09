import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { TrashIconSvg } from '../assets/svg';

const CustomerComplaintCard = ({ item }) => {
  return (
    <View className="mx-5 mt-5 rounded-xl bg-white px-5 py-4">
      <View className="flex-row justify-between">
        <View>
          <View className="flex-row items-center">
            <Text className="font-proxima-nova-regular text-lg text-[#00000080]">
              Complaint ID:
            </Text>
            <Text className="ml-2 font-proxima-nova-semibold text-xl">
              {item.id}
            </Text>
          </View>
          <View className="flex-row items-center">
            <Text className="font-proxima-nova-regular text-lg text-[#00000080]">
              Customer name:
            </Text>
            <Text className="ml-2 font-proxima-nova-semibold text-xl">
              {item.customerName}
            </Text>
          </View>
        </View>
        <View className="mt-2">
          <TrashIconSvg />
        </View>
      </View>

      <View className="mt-4 flex-row items-center justify-between">
        <View>
          <View className="flex-row items-center">
            <Text className="font-proxima-nova-regular text-lg text-[#00000080]">
              Date:
            </Text>
            <Text className="ml-2 font-proxima-nova-semibold text-xl">
              {item.date}
            </Text>
          </View>
        </View>

        <View className="flex-row items-center">
          <Text className="font-proxima-nova-regular text-lg text-[#00000080]">
            Status:
          </Text>
          <TouchableOpacity className="ml-2 rounded-lg border border-[#006F26] bg-[#ceffdb] px-5 py-1">
            <Text className="font-proxima-nova-semibold text-lg text-[#006F26]">
              {item.status}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="mt-4 flex-row">
        <Text className="font-proxima-nova-regular text-lg text-[#00000080]">
          Description:
        </Text>
        <View className="ml-2 flex-1">
          <Text className="font-proxima-nova-regular text-base leading-5">
            {item.description}
          </Text>
          <TouchableOpacity>
            <Text className="pb-2 font-proxima-nova-semibold text-lg text-[#268F8C]">
              View More
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CustomerComplaintCard;
