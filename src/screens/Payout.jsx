import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { BackArrowOutlinedSvg } from '../assets/svg';
import PayoutCard from '../components/PayoutCard';

const Payout = ({ navigation }) => {
  const payoutDetails = [
    {
      title: 'Current Payout',
      amount: '₹352.93',
      order: '4',
      utr: 'CITIN13361722796',
      period: '18 Dec- 24 Dec, 24',
      payoutDate: '27 Dec, 24',
    },
    {
      title: 'Past Cycles',
      amount: '₹15,146.84',
      order: '4',
      utr: 'CITIN13361722796',
      period: '11 Dec- 17 Dec, 24',
      payoutDate: '20 Dec, 24',
    },
    {
      title: 'Past Cycles',
      amount: '₹15,146.84',
      order: '4',
      utr: 'CITIN13361722796',
      period: '11 Dec- 17 Dec, 24',
      payoutDate: '20 Dec, 24',
    },
  ];

  return (
    <ScrollView className="flex-1 bg-[#ECECEC]">
      <View className="flex-row items-center bg-white px-5 py-5">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackArrowOutlinedSvg />
        </TouchableOpacity>
        <Text className="ms-10 font-montserrat-bold text-2xl text-[#3C3A45]">
          Payouts
        </Text>
      </View>

      <View className='mb-10'>
        {payoutDetails.map((item, index) => (
          <View key={index}>
            <PayoutCard item={item} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Payout;
