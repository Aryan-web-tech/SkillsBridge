import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Header from '../components/Header';

const RoleSelectionScreen = () => {
  const router = useRouter()
  return (
    <View style={styles.container}>
      <Header />
      <Text style={[styles.title]}>Select Your Role</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace('/SeekerRegister')}
      >
        <Text style={styles.buttonText}>Service Seeker</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.replace('/ProviderRegister')}
      >
        <Text style={styles.buttonText}>Service Provider</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RoleSelectionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f9fc',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 40,
    color:"#0D0672"
  },
  button: {
    backgroundColor: '#3A86FF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});
