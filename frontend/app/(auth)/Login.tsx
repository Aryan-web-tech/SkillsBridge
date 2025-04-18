import { View, Text, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { ScrollView, TextInput, TouchableOpacity } from 'react-native'
import { Link, useRouter } from 'expo-router'
import { useAuthStore } from '@/store/authStore'

export default function Index() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [selectedRole, setSelectedRole] = useState<'seeker' | 'provider'>('seeker') // Role toggle
  const router = useRouter()
  const { user, token, role, loginSeeker } = useAuthStore()

  const handleLogin = async () => {
    // Call the correct function based on selectedRole
    const result = await loginSeeker(email, password, selectedRole)

    if (!result.success) Alert.alert('Error:', result.error)

    if(selectedRole=="seeker") router.replace('/screens/SeekerHome')
    else router.replace('/screens/ProviderHome')
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="p-6 bg-neutralLight">
      <View className="items-center mb-6">
        <Text className="text-2xl font-bold text-primary">Log In</Text>
      </View>

      {/* Role Toggle */}
      <View className="flex-row justify-center mb-6 space-x-4 ">
        <TouchableOpacity
          onPress={() => setSelectedRole('seeker')}
          className={`px-4 py-2 rounded-full  ${
            selectedRole === 'seeker' ? 'bg-primary ' : 'bg-white '
          }`}
        >
          <Text className={`font-semibold ${selectedRole === 'seeker' ? 'text-white' : 'text-primary'}`}>
            Seeker
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setSelectedRole('provider')}
          className={`px-4 py-2 rounded-full  ${
            selectedRole === 'provider' ? 'bg-primary' : 'bg-white'
          }`}
        >
          <Text className={`font-semibold ${selectedRole === 'provider' ? 'text-white' : 'text-primary'}`}>
            Provider
          </Text>
        </TouchableOpacity>
      </View>

      <Text className="mb-2 text-base font-semibold text-darkText">Email</Text>
      <TextInput
        className="border border-gray-300 rounded-md px-4 py-3 mb-4"
        placeholder="Enter your email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <Text className="mb-2 text-base font-semibold text-darkText">Password</Text>
      <TextInput
        className="border border-gray-300 rounded-md px-4 py-3 mb-6"
        placeholder="Enter your password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        onPress={handleLogin}
        className="bg-primary py-3 rounded-md items-center shadow-subtle"
      >
        <Text className="text-white text-base font-bold">Log In</Text>
      </TouchableOpacity>

      <View className="mt-4 flex-row justify-center">
        <Text className="text-base text-neutralDark">Don't have an account yet? </Text>
        <Link href="/RoleSelectionScreen" asChild>
          <TouchableOpacity>
            <Text className="text-primary text-base font-semibold">Sign Up</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ScrollView>
  )
}
