import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView } from 'react-native';
import React, { useState,useContext } from 'react';
import { navigate } from 'expo-router/build/global-state/routing';
import { useRouter,Link } from 'expo-router';
import {useAuthStore} from "../../store/authStore"
import Header from '../components/Header';


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
          onPress: () => router.replace('/(seeker_tabs)/Seeker_Home'), // Navigate after pressing OK
        },
      ]);  
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="p-6 bg-white">
      <Header/>
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


<Text className="mb-2 text-base font-semibold">Phone</Text>
      <TextInput
        className="border border-gray-300 rounded-xl px-4 py-3 mb-4"
        placeholder="Enter your location"
        keyboardType="phone-pad"
        value={number}
        onChangeText={setNumber}
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

      <View className="mb-2 text-darkText font-semibold">
                        <Text className="text-darkText" >Already have an account ?</Text>
                        <Link href="/" asChild>
                        <TouchableOpacity>
                            <Text className="text-darkText">Log In</Text>
                            </TouchableOpacity></Link>
                        </View>
    </ScrollView>
  );
};

export default SeekerRegister;
