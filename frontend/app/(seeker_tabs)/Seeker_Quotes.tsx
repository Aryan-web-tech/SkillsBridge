
import React from 'react';
import {
  View, Text, Image, ScrollView, TouchableOpacity, SafeAreaView
} from 'react-native';
import { StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useAuthStore } from '@/store/authStore';
import Header from '../components/Header';

const services = [
  {
    id: 1,
    title: 'Post Construction Clean',
    date: '5 Dec, 24',
    price: '1500',
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg',
  },
  {
    id: 2,
    title: 'Window Cleaning',
    date: '6 Dec, 24',
    price: '1000',
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg',
  },
  {
    id: 3,
    title: 'Carpet and Rug Cleaning',
    date: '7 Dec, 24',
    price: '1000',
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg',
  },
  {
    id: 4,
    title: 'Kitchen Cleaning',
    date: '8 Dec, 24',
    price: '800',
    image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg',
  },
];

export default function BookingsScreen() {
  const router = useRouter();
  const { logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    router.replace('/');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.header}>Quotes Available</Text>

        <View style={styles.serviceList}>
          {services.map(service => (
            <View key={service.id} style={styles.serviceCard}>
              <Image
                source={{ uri: service.image }}
                style={styles.serviceImage}
                resizeMode="cover"
              />
              <View style={styles.serviceContent}>
  <Text style={styles.serviceTitle}>{service.title}</Text>
  <View style={styles.serviceRow}>
    <Text style={styles.serviceDetails}>{service.date}</Text>
    <Text style={styles.servicePrice}>Rs. {service.price}/-</Text>
  </View>
</View>
              <View style={styles.actionButtons}>
                <TouchableOpacity style={styles.acceptButton}>
                  <Text style={styles.buttonText}>Accept</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.declineButton}>
                  <Text style={styles.declineText}>Decline</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F8FC', // neutralBase
  },
  scrollView: {
    padding: 16,
    paddingTop: 40,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#0D0672',
    textAlign:'center'
  },
  serviceList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  serviceCard: {
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    marginBottom: 16,
    width: '48%',
    padding: 8,
    height: 250,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  serviceImage: {
    height: 100,
    width: '100%',
    borderRadius: 8,
  },
  serviceContent: {
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 8,
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0D0672', // darkText
  },
  serviceDetails: {
    fontSize: 12,
    color: '#0D0672', // darkText
    marginTop: 4,
  },
  serviceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  
  servicePrice: {
    fontSize: 12,
    color: '#0D0672',
    fontWeight: '600',
  },
  
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  acceptButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  declineButton: {
    backgroundColor: '#D72121',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
  declineText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
  navBar: {
    backgroundColor: '#F6F8FC', // neutralBase
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
    color: '#0D0672', // darkText
  },
});

