import { View, Text } from 'react-native';
import React, { useState } from 'react';
import CustomBotton from './CustomBotton';
import InvoiceDownloadModal from './InvoiceDownloadModal';

const InvoiceTaxeCard = ({ item }) => {
  const [showInvoiceModal, setShowInvoiceModal] = useState(false);

  return (
    <View className="mx-5 mt-5 rounded-xl bg-white">
      <View className="flex-row justify-between px-5 py-5">
        <View>
          <Text className="font-montserrat-semibold text-[#00000080]">
            Month
          </Text>
          <Text className="font-proxima-nova-semibold text-xl">
            {item.month}
          </Text>
        </View>
        <View>
          <Text className="text-right font-montserrat-semibold text-[#00000080]">
            Month
          </Text>
          <Text className="text-right font-proxima-nova-semibold text-xl">
            {item.monthR}
          </Text>
        </View>
      </View>

      <View className="mb-2">
        <CustomBotton
          title="Download"
          textColor={'text-[#268F8C]'}
          style="border-[#268F8C] border"
          onPress={() => {console.log("pressed"),setShowInvoiceModal(true)}}
        />
      </View>

      {showInvoiceModal && <View>
        <InvoiceDownloadModal setShowInvoiceModal={setShowInvoiceModal} />
      </View>}
    </View>
  );
};

export default InvoiceTaxeCard;
