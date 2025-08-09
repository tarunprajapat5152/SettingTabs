import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { BackArrowOutlinedSvg } from '../assets/svg';
import InvoiceCard from '../components/InvoiceCard';

const Invoice = ({ navigation }) => {
  const invoiceData = [
    {
      month: 'Nov',
      monthR: '09AAACH7409R1ZZ',
    },
    {
      month: 'Oct',
      monthR: '09AAACH7409R1ZZ',
    },
    {
      month: 'Sep',
      monthR: '09AAACH7409R1ZZ',
    },
    {
      month: 'Aug',
      monthR: '09AAACH7409R1ZZ',
    },
    {
      month: 'Jul',
      monthR: '09AAACH7409R1ZZ',
    },
  ];

  return (
    <ScrollView className="flex-1 bg-[#ECECEC]">
      <View className="flex-row items-center bg-white px-5 py-5">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackArrowOutlinedSvg />
        </TouchableOpacity>
        <Text className=" ms-10 font-montserrat-bold text-2xl text-[#3C3A45]">
          Invoices
        </Text>
      </View>

      <View className='mb-10'>
        {invoiceData.map((item, index) => (
          <View key={index}>
            <InvoiceCard item={item} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Invoice;
