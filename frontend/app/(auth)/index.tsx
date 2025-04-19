// Main page of app
import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useRouter } from 'expo-router'
import { useAuthStore } from '@/store/authStore'
import Header from '../components/Header'


export default function Index() {
  const { token, role, checkAuth } = useAuthStore()
  const router = useRouter()

  useEffect(() => {
    checkAuth()
    if (token && role) {
      if (role === 'seeker') router.replace('/(seeker_tabs)/Seeker_Home')
      else router.replace('/(provider_tabs)/Provider_Home')
    }
  }, [])

  return (
    <View className="flex-1 bg-neutralBase">
      <Header />

      {/* Center Card */}
      <View className="flex-1 justify-center items-center px-4">
  <View className="w-full h-[80%] bg-white p-6 rounded-xl border border-gray-300 shadow-subtle justify-center">
    <View style={{ paddingLeft: 5 }} className="items-center mb-4">
  <Image
      source={require('../../assets/Seeker_Provider.jpg')} 
      style={{ width: 270, height: 230, borderRadius: 12 }}
      resizeMode="cover"
    />
    </View>
    <Text className="text-center text-3xl font-extrabold text-accent mb-4">Welcome !!</Text>
    <Text className="text-center text-2sm text-primary mb-5">
      Login to find your nearest service
    </Text>

    <TouchableOpacity
      className="bg-primary py-3 rounded-md items-center mb-4"
      onPress={() => router.replace('/Login')}
    > 
    <Text className="text-white text-base font-bold">Login</Text>
  
    </TouchableOpacity>

    <Text className="text-center text-sm text-darkText mb-2">
      Don’t have an account? <Text className="text-center text-sm font-extrabold text-accent mb-2">Sign up now</Text>
    </Text>
    

    <TouchableOpacity
      className="bg-primary py-3 rounded-md items-center"
      onPress={() => router.push('/RoleSelectionScreen')}
    >
      <Text className="text-white text-base font-bold">Register</Text>
    </TouchableOpacity>
  </View>
</View>

      {/* Footer */}
      <View className="bg-primary py-4 items-center">
        <Text className="text-white font-medium">
          Bridging needs and solutions !!
        </Text>
      </View>
    </View>
  )
}

