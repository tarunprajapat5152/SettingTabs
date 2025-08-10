import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { BackArrowOutlinedSvg } from '../assets/svg';
import InvoiceTaxeCard from '../components/InvoiceTaxeCard';

const Taxe = ({ navigation }) => {
  const [activeOption, setActiveOption] = useState('TDS');

  const taxeData = [
    {
      month: 'Nov',
      monthR: '09AAACH7409R1ZZ'
    },
    {
      month: 'Oct',
      monthR: '09AAACH7409R1ZZ'
    },
    {
      month: 'Sep',
      monthR: '09AAACH7409R1ZZ'
    },
    {
      month: 'Aug',
      monthR: '09AAACH7409R1ZZ'
    }
  ]

  return (
    <ScrollView className="flex-1 bg-[#ECECEC]">
      <View className="bg-white px-5">

        {/* Header Section */}
        <View className="flex-row items-center py-5">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackArrowOutlinedSvg />
          </TouchableOpacity>
          <Text className="ms-7 font-montserrat-bold text-2xl text-[#3C3A45]">
            Taxes
          </Text>
        </View>

        {/* Status Tabs */}
        <View className="flex-row">
          <TouchableOpacity
            className={`flex-1 pb-2 ${
              activeOption === 'TDS' && 'border-b-4 border-[#268F8C]'
            }`}
            onPress={() => setActiveOption('TDS')}
          >
            <Text
              className={`text-center font-montserrat-semibold text-lg ${
                activeOption === 'TDS' ? 'text-[#268F8C]' : 'text-[#00000080]'
              }`}
            >
              TDS
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`flex-1 ${
              activeOption === 'TCS' && 'border-b-4 border-[#268F8C]'
            }`}
            onPress={() => setActiveOption('TCS')}
          >
            <Text
              className={`text-center font-montserrat-semibold text-lg ${
                activeOption === 'TCS' ? 'text-[#268F8C]' : 'text-[#00000080]'
              }`}
            >
              TCS
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Taxe Details */}
      <View className='mb-10'>
        <Text className='px-5 pt-7 font-montserrat-bold text-[#3C3A45] text-xl'>Financial Year 2024</Text>
        {taxeData.map((item, index) => (
          <View key={index}>
            <InvoiceTaxeCard item={item} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Taxe;
