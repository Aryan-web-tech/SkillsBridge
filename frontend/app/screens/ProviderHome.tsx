import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'
import { useAuthStore } from '@/store/authStore'

const ProviderHome = () => {
  const router = useRouter()
  const { logout } = useAuthStore()

  const handleLogout = () => {
    logout() // call the function
    router.replace('/') // redirect to home page (or '/login')
  }

  return (
    <View className="flex-1 items-center justify-center px-4 bg-white">
      <Text className="text-xl font-semibold mb-4">Provider Home</Text>

      <TouchableOpacity
        className="bg-red-500 py-3 px-6 rounded-xl items-center mt-4"
        onPress={handleLogout}
      >
        <Text className="text-white text-base font-bold">Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ProviderHome