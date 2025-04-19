import React from 'react';
import { View, Text, Image } from 'react-native';

const Header = () => {
  return (
    <View className="flex-row justify-center items-center px-6 py-5 bg-primary">
      <Image
        source={require('../../assets/icon.png')}
        className="w-12 h-12 mr-4"
        resizeMode="contain"
      />
      <Text className="text-white text-2xl font-extrabold">Fixit Services</Text>
    </View>
  );
};

export default Header;

