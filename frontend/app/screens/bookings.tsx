import React, { useState } from 'react';
import {
  View, Text, FlatList, Image, TouchableOpacity, SafeAreaView, Pressable, StyleSheet
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Router, useRouter } from 'expo-router';
import { useAuthStore } from '@/store/authStore'
const inProgress = [
  {
    id: '1',
    status: 'In progress',
    provider: 'Bright Spark Electricians',
    category: 'Electrical Services',
    date: 'Mar 1, 2025',
    price: '$200.00',
    image: 'https://cdn.pixabay.com/photo/2016/11/29/07/55/electrician-1864713_1280.jpg',
  },
  {
         id: '2',
        status: 'In progress',
        provider: 'Neat & Tidy Pro',
        category: 'Cleaning Services',
        bookingDate: 'Mar 1, 2025 2:04 PM',
        totalPaid: '$840.00',
        image: 'https://cdn.pixabay.com/photo/2017/06/06/22/44/cleaning-2370243_1280.jpg', // Cleaning
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
    image: 'https://cdn.pixabay.com/photo/2016/03/27/21/58/cleaning-1281632_1280.jpg',
  },
];

export default function QuotesScreen() {
    const router = useRouter()
    const {logout} = useAuthStore()
      const handleLogout = () => {
        logout() // call the function
        router.replace('/') // redirect to home page (or '/login')
      }
  const [tab, setTab] = useState('inProgress');
  const data = tab === 'inProgress' ? inProgress : history;

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.row}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={{ marginLeft: 12, flex: 1 }}>
          <Text style={styles.status}>{item.status}</Text>
          <Text style={styles.provider}>{item.provider}</Text>
          <Text style={styles.category}>{item.category}</Text>
          <Text style={styles.detail}>Date: {item.date}</Text>
          <Text style={styles.detail}>Price: {item.price}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Quotes Screen Content */}
      <Text style={styles.header}>My Quotes</Text>

      <View style={styles.tabs}>
        <Pressable onPress={() => setTab('inProgress')}>
          <Text style={[styles.tab, tab === 'inProgress' && styles.activeTab]}>
            In Progress
          </Text>
        </Pressable>
        <Pressable onPress={() => setTab('history')}>
          <Text style={[styles.tab, tab === 'history' && styles.activeTab]}>
            History
          </Text>
        </Pressable>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 30 }}
      />

      {/* Bottom Navigation Bar */}
      <View style={styles.navBar}>
        <View style={styles.navIcons}>
          <TouchableOpacity style={styles.navLink} onPress={() => router.replace('/screens/SeekerHome')}>
                      <FontAwesome name="home" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navLink} onPress={() => router.replace('/screens/bookings')}>
                      <FontAwesome name="file" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.navLink} onPress={() => router.replace('/screens/quotes')}>
                      <FontAwesome name="file-text" size={24} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {handleLogout}}>
                      <FontAwesome name="home" size={24} color="black" />
                    </TouchableOpacity>
        </View>
        <View style={styles.navLabels}>
          <Text style={styles.navText}>Home</Text>
          <Text style={styles.navText}>Bookings</Text>
          <Text style={styles.navText}>Quotes</Text>
          <Text style={styles.navText}>Logout</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: 'black',
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  status: {
    color: '#00aa88',
    fontWeight: '600',
  },
  provider: {
    fontWeight: 'bold',
    marginTop: 2,
  },
  category: {
    color: '#666',
    marginBottom: 4,
  },
  detail: {
    fontSize: 13,
    color: '#444',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  tab: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    fontSize: 16,
    color: '#777',
    marginHorizontal: 8,
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: '#e0e0e0',
    color: '#000',
    fontWeight: '600',
  },
  navBar: {
    backgroundColor: '#e0e0e0',
    height: 80,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingTop: 10,
  },
  navIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 40,
  },
  navLabels: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navLink: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: 'black',
  },
});
