import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';

const ProviderRegister = () => {
    const router = useRouter()
  const [orgName, setOrgName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  const [serviceCategory, setServiceCategory] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [experience, setExperience] = useState('');

  const handleRegister = () => {
    if (!orgName || !email || !contact || !password || !serviceCategory || !speciality || !experience) {
      Alert.alert('Please fill all fields');
      return;
    }

    // Submit logic here
    Alert.alert('Registered successfully!', '', [
            {
              text: 'OK',
              onPress: () => router.replace('/screens/ProviderHome'), // Navigate after pressing OK
            },
          ]);
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="p-6 bg-white">
      <View className="items-center mb-6">
        <Text className="text-2xl font-bold text-blue-600">Provider Registration</Text>
      </View>

      <Text className="mb-2 font-semibold">Organization Name</Text>
      <TextInput
        className="border border-gray-300 rounded-xl px-4 py-3 mb-4"
        placeholder="Enter organization name"
        value={orgName}
        onChangeText={setOrgName}
      />

      <Text className="mb-2 font-semibold">Email</Text>
      <TextInput
        className="border border-gray-300 rounded-xl px-4 py-3 mb-4"
        placeholder="Enter email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <Text className="mb-2 font-semibold">Contact Number</Text>
      <TextInput
        className="border border-gray-300 rounded-xl px-4 py-3 mb-4"
        placeholder="Enter contact number"
        keyboardType="phone-pad"
        value={contact}
        onChangeText={setContact}
      />

      <Text className="mb-2 font-semibold">Password</Text>
      <TextInput
        className="border border-gray-300 rounded-xl px-4 py-3 mb-4"
        placeholder="Enter password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Text className="mb-2 font-semibold">Service Category</Text>
      <TextInput
        className="border border-gray-300 rounded-xl px-4 py-3 mb-4"
        placeholder="e.g., Healthcare, Tutoring, Legal, etc."
        value={serviceCategory}
        onChangeText={setServiceCategory}
      />

      <Text className="mb-2 font-semibold">Speciality</Text>
      <TextInput
        className="border border-gray-300 rounded-xl px-4 py-3 mb-4"
        placeholder="e.g., Cardiologist, Math Tutor, Civil Lawyer"
        value={speciality}
        onChangeText={setSpeciality}
      />

      <Text className="mb-2 font-semibold">Years of Experience</Text>
      <TextInput
        className="border border-gray-300 rounded-xl px-4 py-3 mb-6"
        placeholder="e.g., 3"
        keyboardType="numeric"
        value={experience}
        onChangeText={setExperience}
      />

      <TouchableOpacity
        onPress={handleRegister}
        className="bg-blue-500 py-3 rounded-xl items-center"
      >
        <Text className="text-white font-bold text-base">Register</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProviderRegister;


