import { View, Text, Modal } from 'react-native';
import React from 'react';
import { CrossIconSvg, RadioCheckIconSvg } from '../assets/svg';

const InvoiceDownloadModal = () => {
  return (
    <Modal transparent={true} animationType="slide">
      <View className="flex-1 justify-end bg-[#00000080]">
        <View className="rounded-t-3xl bg-white px-5 py-5">
          <View>
            <Text className="font-montserrat-bold text-xl">
              Download Statement
            </Text>
            <CrossIconSvg/>
          </View>
          <View className='flex-row items-center justify-between py-4'>
            <Text>Invoice</Text>
            <RadioCheckIconSvg/>
          </View>
          <View className='flex-row items-center justify-between'>
            <Text>TCS</Text>
            <RadioCheckIconSvg/>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default InvoiceDownloadModal;
