import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native'
import { useRouter } from 'expo-router'
import { FontAwesome } from '@expo/vector-icons'
import Header from '../components/Header'

export default function ProviderProfile() {
  const router = useRouter()
  const [name, setName] = useState('John')
  const [email, setEmail] = useState('john@gmail.com')
  const [phone, setPhone] = useState('9876543210')
  const [rating, setRating] = useState(3)

  return (
    <View className="flex-1 bg-white">
      <Header/>
      

      {/* Title */}
      <View className="bg-accent px-6 py-3">
        <Text className="text-white text-xl font-medium">Provider Profile</Text>
      </View>

      {/* Content */}
      <View className="flex-1 px-6 py-4">
        <View className="flex-row items-center mb-6">
          <Image
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
            }}
            style={{ width: 60, height: 60, marginRight: 12 }}
          />
          <Text className="text-xl font-semibold text-darkText">Welcome{'\n'}{name}</Text>
        </View>

        {/* Input Fields */}
        <Text className="mb-1 text-black">Name</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          className="border border-gray-400 rounded-md px-3 py-2 mb-4"
        />

        <Text className="mb-1 text-black">Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          className="border border-gray-400 rounded-md px-3 py-2 mb-4"
          keyboardType="email-address"
        />

        <Text className="mb-1 text-black">Phone</Text>
        <TextInput
          value={phone}
          onChangeText={setPhone}
          className="border border-gray-400 rounded-md px-3 py-2 mb-4"
          keyboardType="phone-pad"
        />

        {/* Ratings */}
        <Text className="mb-2 text-black">Ratings</Text>
        <View className="flex-row mb-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <TouchableOpacity key={i} onPress={() => setRating(i)}>
              <FontAwesome
                name={i <= rating ? 'star' : 'star-o'}
                size={28}
                color={i <= rating ? '#FFD700' : '#bbb'}
                className="mr-1"
              />
            </TouchableOpacity>
          ))}
        </View>

        {/* Update Button */}
        <TouchableOpacity
          className="bg-primary py-3 rounded-md items-center"
          onPress={() => alert('Profile updated!')}
        >
          <Text className="text-white text-lg font-bold">Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
