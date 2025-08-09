import { View, Text, Modal, TouchableOpacity } from 'react-native';
import React from 'react';

const NotificationSettingConfromation = ({ setActiveSwitch, setShowModal }) => {
  return (
    <Modal transparent={true} animationType='fade'>
      <View className="flex-1 items-center justify-center bg-[#00000080] px-5">
        <View
          className="shadow-3xl rounded-3xl bg-white px-5 py-8"
          style={{ elevation: 10 }}
        >
          <Text className="text-center font-montserrat-bold text-xl text-black">
            Are you sure you want to disable order notifications
          </Text>
          <Text className="py-6 text-center font-proxima-nova-regular text-base text-[#00000080]">
            You may miss new order notifications on this device which may lead
            to order cancellations. You can still use the app to check orders.
          </Text>
          <TouchableOpacity onPress={() => {setActiveSwitch(true), setShowModal(false)}}>
            <Text className="border-b border-t border-[#00000033] py-5 text-center font-proxima-nova-bold text-lg text-[#268F8C]">
              Yes, Disable Notofocation
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setShowModal(false)}>
            <Text className="pt-4 text-center font-proxima-nova-bold text-lg text-[#00000080]">
              Cancle
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default NotificationSettingConfromation;
