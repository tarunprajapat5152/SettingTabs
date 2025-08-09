import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import CustomSwithBtn from './CustomSwitchBtn';
import NotificationSettingConfromation from './NotificationSettingConfromation';

const NotificationItem = ({ IconName, title, des, style = 'py-6 mt-4' }) => {
  const [activeSwitch, setActiveSwitch] = useState(false);
  const [showModal, setShowModal] = useState(false);
  return (
    <View className={`flex-row bg-white px-5 ${style}`}>
      <View>
        <IconName />
      </View>
      <View className="mx-3 flex-1">
        <Text className="font-montserrat-bold text-lg text-[#000000]">
          {title}
        </Text>
        <View>
          <Text className="text-base text-[#00000080]">{des}</Text>
        </View>
      </View>
      <View>
        <CustomSwithBtn
          active={activeSwitch}
          setActiveSwitch={setActiveSwitch}
          setShowModal={setShowModal}
        />
      </View>

      {showModal && (
        <NotificationSettingConfromation
          setActiveSwitch={setActiveSwitch}
          setShowModal={setShowModal}
        />
      )}
    </View>
  );
};

export default NotificationItem;
