

import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import BottomNavbar from '../components/BottomNavbar';
import MapModal from '../components/MapModal';
import Header from '../components/Header';

const bookingsData = [
  {
    id: '1',
    name: 'William Blake',
    date: 'Mar 1, 2025 2:15 PM',
    paid: '$260.0',
    status: 'In progress',
  },
  {
    id: '2',
    name: 'William Blake',
    date: 'Mar 2, 2025 9:58 AM',
    paid: '$585.0',
    status: 'In progress',
  },
];

const jobRequestsData = [
  {
    id: 'r1',
    requester: 'Sophia Turner',
    requestedAt: 'Apr 12, 2025 5:30 PM',
    jobTitle: 'AC Repair - 1.5 Ton Split',
    location: 'Baner, Pune',
  },
  {
    id: 'r2',
    requester: 'Liam Patel',
    requestedAt: 'Apr 13, 2025 10:00 AM',
    jobTitle: 'Ceiling Fan Installation',
    location: 'Kothrud, Pune',
  },
];

export default function Bookings() {
  const [activeTab, setActiveTab] = useState<'confirmed' | 'requests'>('confirmed');
  const [mapVisible, setMapVisible] = useState(false);
  const [selectedJobLocation, setSelectedJobLocation] = useState('');

  return (
    <View className="flex-1 bg-white pt-12 px-4">
      <Header/>
      <Text className="text-3xl font-semibold mb-4 text-darkText">Bookings</Text>

      {/* Top Tabs */}
      <View className="flex-row bg-gray-100 rounded-xl p-1 mb-4">
        <TouchableOpacity
          className={`flex-1 items-center py-2 rounded-xl ${activeTab === 'confirmed' ? 'bg-accent' : ''}`}
          onPress={() => setActiveTab('confirmed')}
        >
          <Text className={`text-sm ${activeTab === 'confirmed' ? 'font-bold text-darkText' : 'text-darkText'}`}>
            Confirmed Bookings
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`flex-1 items-center py-2 rounded-xl ${activeTab === 'requests' ? 'bg-accent' : ''}`}
          onPress={() => setActiveTab('requests')}
        >
          <Text className={`text-sm ${activeTab === 'requests' ? 'font-bold text-darkText' : 'text-darkText'}`}>
            Job Requests
          </Text>
        </TouchableOpacity>
      </View>

      {/* Cards */}
      <ScrollView className="space-y-3">
        {activeTab === 'confirmed' &&
          bookingsData.map((item) => (
            <View key={item.id} className="bg-gray-50 p-4 rounded-2xl shadow-sm border border-gray-100">
              <View className="flex-row items-center mb-2">
                <Ionicons name="person-circle-outline" size={40} color="#888" />
                <View className="ml-3">
                  <Text className="text-sm text-blue-500 font-medium">{item.status}</Text>
                  <Text className="font-semibold text-lg text-darkText">{item.name}</Text>
                </View>
              </View>
              <Text className="text-sm text-gray-700">Booking date: {item.date}</Text>
              <Text className="text-sm text-gray-700">Total paid: {item.paid}</Text>
              <TouchableOpacity className="mt-3 py-2 px-4 bg-primary rounded-xl self-start">
                <Text className="text-white text-sm font-medium">View booking details</Text>
              </TouchableOpacity>
            </View>
          ))}

        {activeTab === 'requests' &&
          jobRequestsData.map((job) => (
            <View key={job.id} className="bg-gray-50 p-4 rounded-2xl shadow-sm border border-gray-100">
              <View className="flex-row items-center mb-2">
                <Ionicons name="construct-outline" size={40} color="#888" />
                <View className="ml-3">
                  <Text className="text-sm text-green-600 font-medium">New Request</Text>
                  <Text className="font-semibold text-lg text-darkText">{job.requester}</Text>
                </View>
              </View>
              <Text className="text-sm text-gray-700">Job: {job.jobTitle}</Text>
              <Text className="text-sm text-gray-700">Location: {job.location}</Text>
              <Text className="text-sm text-gray-700 mb-3">Requested at: {job.requestedAt}</Text>

              <View className="flex-row space-x-2">
                <TouchableOpacity className="flex-1 bg-blue-500 py-2 rounded-xl">
                  <Text className="text-white text-center text-sm font-medium">Submit Quote</Text>
                </TouchableOpacity>
                <TouchableOpacity className="flex-1 bg-gray-200 py-2 rounded-xl"
                  onPress={() => {
                    setSelectedJobLocation(job.location);
                    setMapVisible(true);
                  }}
                >
                  <Text className="text-center text-sm font-medium text-gray-800">View Job Location</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
      </ScrollView>

     

      {/* MapModal */}
      <MapModal
        visible={mapVisible}
        onClose={() => setMapVisible(false)}
        jobLocation={selectedJobLocation}
      />
    </View>
  );
}
