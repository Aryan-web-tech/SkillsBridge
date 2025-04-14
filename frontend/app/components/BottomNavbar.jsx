import { View, Text, TouchableOpacity } from 'react-native';
import { router, usePathname } from 'expo-router';
import {
  HomeIcon,
  CalendarDaysIcon,
  ChatBubbleBottomCenterIcon,
  UserCircleIcon,
} from 'react-native-heroicons/outline';

export default function BottomNavbar() {
  const pathname = usePathname();

  return (
    <View className="flex-row justify-around items-center bg-white py-3 border-t border-gray-200">
      {/* Home */}
      <TouchableOpacity className="flex-1 items-center" onPress={() => router.push('/')}>
        <HomeIcon size={24} color={pathname === '/' ? '#2563EB' : 'black'} />
        <Text className={`text-xs ${pathname === '/' ? 'text-blue-600 font-semibold' : ''}`}>Home</Text>
      </TouchableOpacity>

      {/* Bookings */}
      <TouchableOpacity className="flex-1 items-center" onPress={() => router.push('/screens/bookings_2')}>
        <CalendarDaysIcon size={24} color={pathname === '/provider/bookings' ? '#2563EB' : 'black'} />
        <Text className={`text-xs ${pathname === '/provider/bookings' ? 'text-blue-600 font-semibold' : ''}`}>Bookings</Text>
      </TouchableOpacity>

      {/* Messages */}
      <TouchableOpacity className="flex-1 items-center" onPress={() => router.push('/messages')}>
        <ChatBubbleBottomCenterIcon size={24} color={pathname === '/messages' ? '#2563EB' : 'black'} />
        <Text className={`text-xs ${pathname === '/messages' ? 'text-blue-600 font-semibold' : ''}`}>Messages</Text>
      </TouchableOpacity>

      {/* Profile */}
      <TouchableOpacity className="flex-1 items-center" onPress={() => router.push('/screens/ProviderProfile')}>
        <UserCircleIcon size={24} color={pathname === '/profile' ? '#2563EB' : 'black'} />
        <Text className={`text-xs ${pathname === '/profile' ? 'text-blue-600 font-semibold' : ''}`}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}
