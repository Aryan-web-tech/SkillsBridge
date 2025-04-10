import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import RoleSelectionScreen from './screens/RoleSelectionScreen';
import { Link } from 'expo-router';

export default function Index() {

  return (
    <View>
      <RoleSelectionScreen/>
      
    </View>
  );
}

