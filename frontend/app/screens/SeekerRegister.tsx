import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { navigate } from 'expo-router/build/global-state/routing';
import { useRouter } from 'expo-router';

const SeekerRegister = () => {
    const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (!name || !email || !phone || !password) {
      Alert.alert('Please fill all fields');
      return;
    }

    // Submit logic here
    Alert.alert('Registered successfully!', '', [
        {
          text: 'OK',
          onPress: () => router.replace('/screens/SeekerHome'), // Navigate after pressing OK
        },
      ]);
    
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="p-6 bg-white">
      <View className="items-center mb-6">
        <Text className="text-2xl font-bold text-blue-600">Seeker Registration</Text>
      </View>

      <Text className="mb-2 text-base font-semibold">Full Name</Text>
      <TextInput
        className="border border-gray-300 rounded-xl px-4 py-3 mb-4"
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />

      <Text className="mb-2 text-base font-semibold">Email</Text>
      <TextInput
        className="border border-gray-300 rounded-xl px-4 py-3 mb-4"
        placeholder="Enter your email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <Text className="mb-2 text-base font-semibold">Phone Number</Text>
      <TextInput
        className="border border-gray-300 rounded-xl px-4 py-3 mb-4"
        placeholder="Enter your phone"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      <Text className="mb-2 text-base font-semibold">Password</Text>
      <TextInput
        className="border border-gray-300 rounded-xl px-4 py-3 mb-6"
        placeholder="Enter your password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        onPress={handleRegister}
        className="bg-blue-500 py-3 rounded-xl items-center"
      >
        <Text className="text-white text-base font-bold">Register</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default SeekerRegister;
