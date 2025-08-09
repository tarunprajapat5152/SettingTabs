import { View, Text, TouchableOpacity, Animated } from 'react-native';
import React, { useRef, useState } from 'react';
import { DownArrowSvg, RightCircleIconSvg } from '../assets/svg';

const PayoutCard = ({ item }) => {
  const [showBreakup, setShowBreakeup] = useState(false);
  const [expandId, setExpandId] = useState(null);

  const animation = useRef(new Animated.Value(0)).current;
  const animationRotate = useRef(new Animated.Value(0)).current;

  Animated.spring(animation, {
    toValue: showBreakup ? 1 : 0,
    useNativeDriver: false,
  }).start();

  Animated.spring(animationRotate, {
    toValue: expandId ? 1 : 0,
    useNativeDriver: true,
  }).start();

  const contentHight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 400],
  });

  const rotate = animationRotate.interpolate({
    inputRange: [0, 1],
    outputRange: ['-90deg', '0deg'],
  });

  const breakupData = [
    {
      id: 'order',
      title: 'Total Orders',
      value: '4',
      details: [
        { lable: 'Delivered Orders', value: '4' },
        { lable: 'Cancelled/Rejected Orders', value: '0' },
      ],
    },
    {
      id: 'customerPayable',
      title: 'Customer Payable (A)',
      value: '₹352.93',
      details: [
        { lable: 'Subtotal', value: '₹1,440.00' },
        { lable: 'Packaging Charge', value: '₹0.00' },
        {
          lable: 'Delivery charge for \n restaurants on self logistics',
          value: '₹0.00',
        },
        { lable: 'Restaurant discount [Promo]', value: '₹460.00' },
        {
          lable: 'Restaurant discount [Flat offs, \n Freebies, Gold & others]',
          value: '₹0.00',
        },
        { lable: 'Delivery charge discount', value: '₹0.00' },
        { lable: 'GST collected from customers', value: '₹49.00' },
      ],
    },
    {
      id: 'serviceFees',
      title: 'Services Fees & Payment \n Mechanism Fees (B)',
      value: '₹18.92',
      details: [
        { lable: 'Base service fee', value: '₹0.00' },
        { lable: 'Fulfilment fee', value: '₹0.00' },
        { lable: 'Payment mechanism fee', value: '₹18.92' },
      ],
    },
    {
      id: 'governmentCharges',
      title: 'Government Charges (C)',
      value: '₹52.42',
      details: [
        {
          lable: 'Taxes on services fees & \n payment mechanism fees',
          value: '₹3.42',
        },
        { lable: 'Tax collected at source + \n TCS IGST amount', value: '₹0.00' },
        { lable: 'TDS 1940 amount', value: '₹0.00' },
        {
          lable: 'GST paid by Zomato on \n behalf of restaurant',
          value: '₹49.00',
        },
      ],
    },
    {
      id: 'otherOrder',
      title: 'Other Order Level \n Deductions (D)',
      value: '₹404.93',
      details: [
        { lable: 'Other Order Level Deductions', value: '₹0.00' },
        {
          lable: 'Amount received in cash (on \n self delivery orders)',
          value: '₹0.00',
        },
        { lable: 'Adjustments from previous \n weeks', value: '₹404.93' },
        { lable: 'Logistics charge', value: '₹0.00' },
      ],
    },
    {
      id: 'adsHyperpure',
      title: 'Ads, Hyperpure & \n miscellaneous deductions (E)',
      value: '₹199.80',
      details: [
        { lable: 'Ads (including 18% GST)', value: '₹0.00' },
        { lable: 'Hyperpure', value: '₹0.00' },
        { lable: 'Onboarding Fee', value: '₹199.80' },
      ],
    },
    {
      id: 'totalAddition',
      title: 'Total Addition (F)',
      value: '₹0.00',
      details: [
        { lable: 'Cancellation refund', value: '₹0.00' },
        { lable: 'Tip for kitchen staff', value: '₹0.00' },
        { lable: 'TDS 194H and other additions', value: '₹0.00' },
      ],
    },
  ];
  

  const toogleAccordion = (id) => {
    setExpandId(expandId === id ? null : id);
  }

  return (
    <View className="px-5 pt-7">
      <Text className="font-montserrat-bold text-xl text-[#3C3A45]">
        {item.title}
      </Text>

      <View className="mt-5 rounded-xl bg-white px-5 py-5">
        <View className="flex-row items-center justify-between">
          <View>
            <Text className="font-montserrat-semibold text-[#00000080]">
              Estimated payout
            </Text>
            <Text className="py-2 font-proxima-nova-bold text-3xl text-[#268F8C]">
              {item.amount}
            </Text>
          </View>
          <Text className="font-proxima-nova-semibold text-lg">4 Orders</Text>
        </View>
        <Text className="font-montserrat-semibold text-[#00000080]">UTR</Text>
        <Text className="font-proxima-nova-semibold text-xl">{item.utr}</Text>

        <View className="my-4 border-b border-[#00000033]" />

        <View>
          <View className="flex-row justify-between">
            <View>
              <Text className="font-montserrat-semibold text-[#00000080]">
                Time Period
              </Text>
              <Text className="font-proxima-nova-semibold text-xl">
                {item.period}
              </Text>
            </View>
            <View>
              <Text className="font-montserrat-semibold text-[#00000080]">
                Est. Payout Date
              </Text>
              <Text className="flex-1 text-right font-proxima-nova-semibold text-xl">
                {item.payoutDate}
              </Text>
            </View>
          </View>

          {showBreakup && (
            <Animated.View className="mt-5">
              {breakupData.map((item, index) => (
                <View key={index}>
                  <View className="border-b border-[#00000033]" />
                  <View className="flex-row justify-between py-3">
                    <View className="flex-row items-center">
                      <TouchableOpacity
                        style={{ transform: [{ rotate: expandId === item.id ? '0deg' : '-90deg'}] }}
                        onPress={() => toogleAccordion(item.id)}
                      >
                        <DownArrowSvg />
                      </TouchableOpacity>
                      <Text className="ms-2 font-proxima-nova-semibold text-xl">
                        {item.title}
                      </Text>
                    </View>
                    <Text className="ps-2 font-proxima-nova-semibold text-xl">
                      {item.value}
                    </Text>
                  </View>
                  {expandId === item.id && (
                    <View className="pb-3">
                      {item.details.map((item, index) => (
                        <View key={index} className='flex-1 flex-row justify-between py-1'>
                          <Text className='ms-5 font-proxima-nova-regular text-base text-[#00000080]'>{item.lable}</Text>
                          <Text className='font-proxima-nova-regular text-base'>{item.value}</Text>
                        </View>
                      ))}
                    </View>
                  )}
                </View>
              ))}
            </Animated.View>
          )}

          <TouchableOpacity
            className="mt-4 flex-row items-center"
            onPress={() => setShowBreakeup(!showBreakup)}
          >
            <Text className="font-proxima-nova-semibold text-xl text-[#268F8C]">
              {showBreakup ? 'Hide Breakup' : 'Show Breakup'}
            </Text>
            <View className="ps-1">
              <RightCircleIconSvg />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PayoutCard;
