import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Pressable
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useAuthStore } from '@/store/authStore';
import 'nativewind';
import Header from '../components/Header';

const inProgress = [
  {
    id: '1',
    status: 'In progress',
    provider: 'Bright Spark Electricians',
    category: 'Electrical Services',
    date: 'Mar 1, 2025',
    price: '$200.00',
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg',
  },
  {
    id: '2',
    status: 'In progress',
    provider: 'Neat & Tidy Pro',
    category: 'Cleaning Services',
    date: 'Mar 1, 2025 2:04 PM',
    price: '$840.00',
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg',
  },
];

const history = [
  {
    id: '2',
    status: 'Completed',
    provider: 'Spark Clean Team',
    category: 'Cleaning',
    date: 'Feb 20, 2025',
    price: '$150.00',
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg',
  },
];

export default function QuotesScreen() {
  const router = useRouter();
  const { logout } = useAuthStore();
  const [tab, setTab] = useState('inProgress');
  const data = tab === 'inProgress' ? inProgress : history;

  const handleLogout = () => {
    logout();
    router.replace('/');
  };

  const renderItem = ({ item }) => (
    <View className="bg-neutralBase rounded-xl p-3 mb-4 mx-4">
      <View className="flex-row">
      <Image
  source={{ uri: item.image }}
  style={{
    width: 64, // same as Tailwind w-16
    height: 64, // same as h-16
    borderRadius: 8,
    backgroundColor: '#eaeaea', // temporary to debug
  }}
/>
<View className="ml-3 flex-1">
  <View className="flex-row justify-between">
  <Text className="text-accent font-semibold">{item.status}</Text>
    <Text className="text-darkText font-bold">{item.price}</Text>
    
  </View>
  <Text className="text-darkText font-bold mt-1">{item.provider}</Text>
  <Text className="text-gray-600">{item.category}</Text>
  <Text className="text-gray-600 text-sm">Date: {item.date}</Text>
</View>

      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-neutralBase">
      <Header/>
      <Text className="text-darkText text-2xl font-bold text-center mb-4">My Bookings</Text>

      <View className="flex-row justify-center mb-4">
        <Pressable onPress={() => setTab('inProgress')}>
          <Text
            className={`px-4 py-2 mx-2 rounded-full text-base ${
              tab === 'inProgress'
                ? 'bg-accent text-darkText font-semibold'
                : 'text-gray-500'
            }`}
          >
            In Progress
          </Text>
        </Pressable>
        <Pressable onPress={() => setTab('history')}>
          <Text
            className={`px-4 py-2 mx-2 rounded-full text-base ${
              tab === 'history'
                ? 'bg-accent text-darkText font-semibold'
                : 'text-darkText-900'
            }`}
          >
            History
          </Text>
        </Pressable>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </SafeAreaView>
  );
}
