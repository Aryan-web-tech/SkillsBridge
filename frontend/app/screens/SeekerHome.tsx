
import { useRouter } from 'expo-router'
import { useAuthStore } from '@/store/authStore'
import React from 'react';
import {
  View, Text, TextInput, ScrollView, Image, TouchableOpacity, SafeAreaView, StyleSheet
} from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function HomeScreen() {
  
  const router = useRouter()
  const {logout} = useAuthStore()
  const handleLogout = () => {
    logout() // call the function
    router.replace('/Login') // redirect to home page (or '/login')
  }

  const services = [
        {
          id: 1,
          title: "Electrical Services",
          image: "https://images.pexels.com/photos/4254168/pexels-photo-4254168.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          bg: "#e0f7fa",
        },
        {
          id: 2,
          title: "Cleaning Services",
          image: "https://images.pexels.com/photos/4239031/pexels-photo-4239031.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          bg: "#f3e5f5",
        },
        {
          id: 3,
          title: "Landscape Design",
          image: "https://images.pexels.com/photos/831082/pexels-photo-831082.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", // 🌿 garden pathway
          bg: "#e8f5e9",
        },
        {
          id: 4,
          title: "Handyman Services",
          image: "https://images.pexels.com/photos/6474463/pexels-photo-6474463.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          bg: "#fff3e0",
        },
        {
          id: 5,
          title: "Painting & Decorating",
          image: "https://images.pexels.com/photos/157382/pexels-photo-157382.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          bg: "#ede7f6",
        },
        {
          id: 6,
          title: "Home Pest Protection",
          image: "https://images.pexels.com/photos/5691550/pexels-photo-5691550.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
          bg: "#fce4ec",
        },
        
      ];
      

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Top bar */}
        <View style={styles.topBar}>
          <View style={styles.addressContainer}>
            <Text style={styles.addressLabel}>Delivery Address</Text>
            <Text style={styles.address}>320 North Los Angeles Street...</Text>
          </View>
          <FontAwesome name="bell-o" size={20} color="black" />
        </View>

        {/* Search */}
        <View style={styles.searchBar}>
          <Feather name="search" size={20} color="gray" />
          <TextInput
            placeholder="Find service..."
            placeholderTextColor="gray"
            style={styles.searchInput}
          />
          <FontAwesome name="sliders" size={18} color="gray" />
        </View>

        {/* Services */}
        <Text style={styles.servicesHeader}>Services</Text>
        <View style={styles.servicesContainer}>
          {services.map(service => (
            <TouchableOpacity
              key={service.id}
              style={[styles.serviceItem, { backgroundColor: service.bg }]}
            >
              <Image
                source={{ uri: service.image }}
                style={styles.serviceImage}
                resizeMode="cover"
              />
              <Text style={styles.serviceTitle}>{service.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

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
  scrollView: {
    padding: 16,
    paddingTop: 40,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  addressContainer: {
    flex: 1,
    marginRight: 8,
  },
  addressLabel: {
    fontSize: 12,
    color: '#888',
  },
  address: {
    fontSize: 14,
    fontWeight: '600',
    color: 'black',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    padding: 8,
    borderRadius: 12,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
    color: 'black',
  },
  servicesHeader: {
    fontWeight: '600',
    fontSize: 18,
    color: 'black',
    marginBottom: 12,
  },
  servicesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  serviceItem: {
    width: '30%',
    height: 120,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    padding: 8,
  },
  serviceImage: {
    width: 40,
    height: 40,
    borderRadius: 8,
  },
  serviceTitle: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 8,
    color: 'black',
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

