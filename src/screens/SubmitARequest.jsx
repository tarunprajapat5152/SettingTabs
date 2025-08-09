import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { AttachmentIconSvg, BackArrowOutlinedSvg } from '../assets/svg';
import { useFormik } from 'formik';
import FlotingLableTextInput from '../components/FlotingLableTextInput';
import CustomBotton from '../components/CustomBotton';

const SubmitARequest = ({ navigation }) => {
  const formik = useFormik({
    initialValues: {
      restaurantId: '',
      subject: '',
      description: '',
      attachment: '',
    },
  });

  return (
    <View className="flex-1">
      <View className="mx-5 flex-row items-center border-b border-[#0000001A] py-5">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackArrowOutlinedSvg />
        </TouchableOpacity>
        <Text className="ms-10 font-montserrat-bold text-2xl text-[#3C3A45]">
          Submit A Request
        </Text>
      </View>

      <View className="px-5 pt-7">
        <Text className="font-montserrat-bold text-xl text-[#3C3A45]">
          Fill the Form Below!
        </Text>

        <View>
          <FlotingLableTextInput
            formik={formik}
            id={'restaurantId'}
            lable={'Restaurant Id'}
          />
          <FlotingLableTextInput
            formik={formik}
            id={'subject'}
            lable={'Subject*'}
          />
          <FlotingLableTextInput
            formik={formik}
            id={'description'}
            lable={'Description*'}
            isTextArea
            numberOfLines={5}
          />
          <TouchableOpacity
            activeOpacity={0.8}
            className="mt-10 items-center rounded-lg border-2 border-dashed border-[#268F8C] bg-[#e9f4f3] px-5 py-7"
          >
            <AttachmentIconSvg />
            <Text className="pt-4 font-montserrat-bold text-lg text-[#268F8C]">
              Attachment
            </Text>
            <Text className="mt-2 font-proxima-nova-semibold text-lg text-[#747474]">
              Image, PDF, Xcl, or .Docx formats up-to 5 MB
            </Text>
          </TouchableOpacity>
        </View>

        <View className="mt-14">
          <CustomBotton title={'Submit Response'} />
          <Text className="text-center font-proxima-nova-regular text-lg text-[#268F8C]">
            Expected Reply with in 24 Hours
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SubmitARequest;
