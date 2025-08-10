import { View, Text, Modal, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { CrossIconSvg } from '../assets/svg';
import CustomBotton from './CustomBotton';
import CustomRadioButton from './CustomRadioButton';

const InvoiceDownloadModal = ({ setShowInvoiceModal }) => {
  const [selectedValue, setSelectedValue] = useState('invoice');

  return (
    <Modal transparent={true} animationType="slide">
      <View className="flex-1 justify-end bg-[#00000080]">
        <View className="rounded-t-3xl bg-white px-5">
          <View className="flex-row items-center justify-between border-b border-[#00000033] py-7">
            <Text className="font-montserrat-bold text-xl">
              Download Statement
            </Text>
            <TouchableOpacity onPress={() => setShowInvoiceModal(false)}>
              <CrossIconSvg />
            </TouchableOpacity>
          </View>

          <View className="flex-row items-center justify-between py-4">
            <Text className="font-proxima-nova-regular text-xl">Invoice</Text>
            <CustomRadioButton
              value={'invoice'}
              selectedValue={selectedValue}
              setSelectedValue={setSelectedValue}
            />
          </View>
          <View className="flex-row items-center justify-between">
            <Text>TCS</Text>
            <CustomRadioButton
              value={'tcs'}
              selectedValue={selectedValue}
              setSelectedValue={setSelectedValue}
            />
          </View>

          <View className="my-5">
            <CustomBotton
              title="Download"
              marginX="mx-0"
              onPress={() => setShowInvoiceModal(false)}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default InvoiceDownloadModal;
