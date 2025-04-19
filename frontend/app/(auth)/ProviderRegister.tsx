import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useRouter,Link } from 'expo-router';
import { useAuthStore } from '@/store/authStore';
import Header from '../components/Header';

const ProviderRegister = () => {
  const router = useRouter()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [serviceCategory, setServiceCategory] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [experience, setExperience] = useState('');

  const {registerProvider} = useAuthStore()

  const handleRegister = async () => {
    if (!name || !email || !phone || !password || !serviceCategory || !speciality || !experience) {
      Alert.alert('Please fill all fields');
      return;
    }

    const result = await registerProvider(name,email,phone,password,serviceCategory,speciality,experience)
        
        if(!result.success) Alert.alert("Error",result.error)
        // Submit logic here
        Alert.alert('Registered successfully!', '', [
            {
              text: 'OK',
              onPress: () => router.replace('/(provider_tabs)/Provider_Home'), // Navigate after pressing OK
            },
          ]); 
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="p-6 bg-white">
      <Header />
      <View className="items-center mb-6">
        <Text className="text-2xl font-extrabold text-primary text-primary">Provider Registration</Text>
      </View>

      <Text className="mb-2 font-semibold text-neutralDark">Name</Text>
      <TextInput
        className="border border-gray-300 rounded-md px-4 py-3 mb-4"
        placeholder="Enter organization name"
        value={name}
        onChangeText={setName}
      />

      <Text className="mb-2 font-semibold text-neutralDark">Email</Text>
      <TextInput
        className="border border-gray-300 rounded-md px-4 py-3 mb-4"
        placeholder="Enter email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <Text className="mb-2 font-semibold text-neutralDark">Contact Number</Text>
      <TextInput
        className="border border-gray-300 rounded-md px-4 py-3 mb-4"
        placeholder="Enter contact number"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      <Text className="mb-2 font-semibold text-neutralDark">Password</Text>
      <TextInput
        className="border border-gray-300 rounded-md px-4 py-3 mb-4"
        placeholder="Enter password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Text className="mb-2 font-semibold text-neutralDark">Service Category</Text>
      <TextInput
        className="border border-gray-300 rounded-md px-4 py-3 mb-4"
        placeholder="e.g., Healthcare, Tutoring, Legal, etc."
        value={serviceCategory}
        onChangeText={setServiceCategory}
      />

      <Text className="mb-2 font-semibold text-neutralDark">Speciality</Text>
      <TextInput
        className="border border-gray-300 rounded-md px-4 py-3 mb-4"
        placeholder="e.g., Cardiologist, Math Tutor, Civil Lawyer"
        value={speciality}
        onChangeText={setSpeciality}
      />

      <Text className="mb-2 font-semibold text-neutralDark">Years of Experience</Text>
      <TextInput
        className="border border-gray-300 rounded-md px-4 py-3 mb-6"
        placeholder="e.g., 3"
        keyboardType="numeric"
        value={experience}
        onChangeText={setExperience}
      />

      <TouchableOpacity
        onPress={handleRegister}
        className="bg-primary py-3 rounded-md items-center shadow-subtle"
      >
        <Text className="text-white font-bold text-base">Register</Text>
      </TouchableOpacity>

      <View className="mt-4 flex-row justify-left">
        <Text className="text-base text-darkText">Already have an account ? </Text><Text className="text-accent font-bold text-base">Login</Text>
        <TouchableOpacity className="bg-secondary py-3 rounded-md items-center shadow-subtle" onPress = {() =>router.replace('/(auth)/Login')} >
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProviderRegister;