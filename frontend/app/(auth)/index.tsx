import { View, Text, TouchableOpacity } from 'react-native'
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
    <View className="flex-1 justify-center items-center bg-neutralLight px-6">
      <Text className="text-4xl font-bold text-neutralDark mb-12">Welcome</Text>

      <TouchableOpacity
        className="w-full bg-primary py-4 rounded-md items-center shadow-subtle"
        onPress={() => router.replace('/Login')}
      >
        <Text className="text-neutralLight text-lg font-semibold">Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        className="w-full bg-white py-4 rounded-md items-center mt-6 border border-primary shadow-sm"
        onPress={() => router.push('/RoleSelectionScreen')}
      >
        <Text className="text-primary text-lg font-semibold">Register</Text>
      </TouchableOpacity>
    </View>
  )
}