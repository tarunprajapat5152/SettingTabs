import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import {
  BackArrowOutlinedSvg,
  BikeIconSvg,
  ChatIconSvg,
  OrderIconSvg,
  PhoneIconSvg,
  RatingIconSvg,
  SpeakerIconSvg,
  WhatsappIconSvg,
} from '../assets/svg';
import CustomSwithBtn from '../components/CustomSwitchBtn';
import Slider from '@react-native-community/slider';
import NotificationItem from '../components/NotificationItem';
import NotificationSettingConfromation from '../components/NotificationSettingConfromation';

const NotificationSetting = ({ navigation }) => {
  const [volume, setVolume] = useState(20);

  return (
    <ScrollView className="flex-1 bg-[#ECECEC]">
      <View className="flex-row items-center bg-white px-4 py-4">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackArrowOutlinedSvg />
        </TouchableOpacity>
        <Text className="ms-10 font-montserrat-bold text-2xl text-[#3C3A45]">
          Notification Settings
        </Text>
      </View>

      {/* WhatsApp Section */}
      <NotificationItem
        IconName={WhatsappIconSvg}
        title="WhatsApp Notifications"
        des="Receive updated and other reminders related to your restaurant on WhatsApp"
        style="mt-0 py-6"
      />

      {/* Order Section */}
      <View className="mt-4 bg-white py-6">
        {/* <View className="flex-row">
          <View>
            <OrderIconSvg />
          </View>
          <View className="mx-3 flex-1">
            <Text className="font-montserrat-bold text-lg text-[#000000]">
              Order Notifications
            </Text>
            <View>
              <Text className="text-base text-[#00000080]">
                Receive order notifications on this device
              </Text>
            </View>
          </View>
          <View>
            <CustomSwithBtn
              active={activeSwitch}
              setActiveSwitch={setActiveSwitch}
            />
          </View>
        </View> */}

        <NotificationItem
          IconName={OrderIconSvg}
          title="Order Notifications"
          des="Receive order notifications on this device"
          style='mt-0 py-0'
        />

        <View className="mt-4 px-5 flex-row bg-white">
          <View className="mt-1">
            <SpeakerIconSvg />
          </View>
          <View className="mx-3 flex-1">
            <Text className="font-montserrat-bold text-lg text-[#000000]">
              Ring Volume
            </Text>
            <View className="mb-5 mt-4">
              <Slider
                value={volume}
                minimumValue={0}
                maximumValue={100}
                onValueChange={value => setVolume(value)}
                minimumTrackTintColor="#268F8C"
                maximumTrackTintColor="#D9D9D9"
                thumbTintColor="#028794"
              />
            </View>
          </View>
        </View>

        <NotificationItem
          IconName={PhoneIconSvg}
          title="Ring in silent mode"
          des="Ring for order notifications even when phone is on silent moed"
          style='mt-0 py-0'
        />
        {/* <View className="flex-row">
          <View>
            <PhoneIconSvg />
          </View>
          <View className="mx-3 flex-1">
            <Text className="font-montserrat-bold text-lg text-[#000000]">
              Ring in silent mode
            </Text>
            <View>
              <Text className="text-base text-[#00000080]">
                Ring for order notifications even when phone is on silent moed{' '}
              </Text>
            </View>
          </View>
          <View>
            <CustomSwithBtn
              active={activeSwitch}
              setActiveSwitch={setActiveSwitch}
            />
          </View>
        </View> */}
      </View>

      {/* Rating Section */}
      <NotificationItem
        IconName={RatingIconSvg}
        title="Rating notifications"
        des="Receive notification when a customer submits a rating on an order"
      />

      {/* Review Section */}
      <NotificationItem
        IconName={ChatIconSvg}
        title="Review notifications"
        des="Receive notification when a customer shares a feedback on an order"
      />

      {/* Rider Section */}
      <NotificationItem
        IconName={BikeIconSvg}
        title="Rider Notifications"
        des="Receive notification when the rider arrives at your restaurant to pick an order"
      />
    </ScrollView>
  );
};

export default NotificationSetting;
