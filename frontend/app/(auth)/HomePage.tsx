import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useRouter } from 'expo-router'
import { useAuthStore } from '@/store/authStore'


export default function Index() {
  const { token, role, checkAuth } = useAuthStore()
  const router = useRouter()

  useEffect(() => {
    checkAuth()
    if (token && role) {
      if (role === 'seeker') router.replace('/screens/SeekerHome')
      else router.replace('/screens/ProviderHome')
    }
  }, [])

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="bg-[#00CFE8] p-6 flex-row items-center justify-center shadow-md">
        {/* Replace with your icon image if available */}
        <Image
          source={require('../../assets/icon.png')}          // Adjust path as needed
          style={{ width: 40, height: 40, marginRight: 8 }}
        />
        <Text className="text-black text-2xl font-bold">SeekerPal</Text>
      </View>

      {/* Center Card */}
      <View className="flex-1 justify-center items-center px-6">
        <View className="w-[90%] bg-white p-6 rounded-xl border border-gray-300 shadow-md">
          <Text className="text-center text-xl font-extrabold text-black mb-4">Welcome !!</Text>
          <Text className="text-center text-sm text-black mb-6">
            Login to find your nearest service
          </Text>

          <TouchableOpacity
            className="bg-[#00CFE8] py-2 rounded-md items-center mb-4"
            onPress={() => router.replace('/Login')}
          >
            <Text className="text-white text-base font-bold">Login</Text>
          </TouchableOpacity>

          <Text className="text-center text-sm text-black mb-2">
            Don’t have an account? Sign up now
          </Text>

          <TouchableOpacity
            className="bg-[#00CFE8] py-2 rounded-md items-center"
            onPress={() => router.push('/RoleSelectionScreen')}
          >
            <Text className="text-white text-base font-bold">Register</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer */}
      <View className="bg-[#00CFE8] py-4 items-center">
        <Text className="text-white font-medium">
          Service at your doorstep with SeekerPal !!
        </Text>
      </View>
    </View>
  )
}
