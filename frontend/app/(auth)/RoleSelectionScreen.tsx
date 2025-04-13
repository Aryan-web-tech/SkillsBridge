import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import React, { useState,useContext } from 'react';
import { navigate } from 'expo-router/build/global-state/routing';
import { useRouter,Link } from 'expo-router';
import {useAuthStore} from "../../store/authStore"


const SeekerRegister = () => {

  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');

  const {newSeeker,isLoading,registerSeeker} = useAuthStore()

  const handleRegister = async() => {
    if (!name || !email || !number || !password) {
      Alert.alert('Please fill all fields');
      return;
    }

    const result = await registerSeeker(name,email,number,password)

    if(!result.success) Alert.alert("Error",result.error)
    // Submit logic here
    Alert.alert('Registered successfully!', '', [
      {
        text: 'OK',
        onPress: () => router.replace('/screens/SeekerHome'), // Navigate after pressing OK
      },
    ]);
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="p-6 bg-neutralLight">
      <View className="items-center mb-6">
        <Text className="text-2xl font-bold text-primary">Seeker Registration</Text>
      </View>

      <Text className="mb-2 text-base font-semibold text-neutralDark">Full Name</Text>
      <TextInput
        className="border border-gray-300 rounded-md px-4 py-3 mb-4"
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />

      <Text className="mb-2 text-base font-semibold text-neutralDark">Email</Text>
      <TextInput
        className="border border-gray-300 rounded-md px-4 py-3 mb-4"
        placeholder="Enter your email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />


<Text className="mb-2 text-base font-semibold text-neutralDark">Phone</Text>
      <TextInput
        className="border border-gray-300 rounded-md px-4 py-3 mb-4"
        placeholder="Enter your location"
        keyboardType="phone-pad"
        value={number}
        onChangeText={setNumber}
      />

      <Text className="mb-2 text-base font-semibold text-neutralDark">Password</Text>
      <TextInput
        className="border border-gray-300 rounded-md px-4 py-3 mb-6"
        placeholder="Enter your password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        onPress={handleRegister}
        className="bg-secondary py-3 rounded-md items-center shadow-subtle"
      >
        <Text className="text-neutralLight text-base font-bold">Register</Text>
      </TouchableOpacity>

      <View className="mt-4 flex-row justify-center">
        <Text className="text-base text-neutralDark">Already have an account? </Text>
        <Link href="/" asChild>
          <TouchableOpacity>
            <Text className="text-primary text-base font-semibold">Log In</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ScrollView>
  );
};

export default SeekerRegister;