// /components/Footer.tsx
import { View, Text } from 'react-native';
import { Link } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet } from 'react-native';

export default function Footer() {
  return (
    <View className="bg-gray-200 h-20 rounded-t-xl justify-center">
      <View className="flex-row justify-around items-center h-10">
        <Link href="/" className="items-center">
          <FontAwesome name="home" size={24} color="black" />
          <Text className="text-xs text-black">Home</Text>
        </Link>
        <Link href="/bookings" className="items-center">
          <FontAwesome name="file" size={24} color="black" />
          <Text className="text-xs text-black">Bookings</Text>
        </Link>
        <Link href="/quotes" className="items-center">
          <FontAwesome name="file-text" size={24} color="black" />
          <Text className="text-xs text-black">Quotes</Text>
        </Link>
        <Link href="/logout" className="items-center">
          <FontAwesome name="sign-out" size={24} color="black" />
          <Text className="text-xs text-black">Logout</Text>
        </Link>
      </View>
    </View>
  );
}
