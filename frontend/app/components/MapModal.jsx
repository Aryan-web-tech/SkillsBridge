import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { useEffect, useState } from 'react';
import * as Location from 'expo-location';

export default function MapModal({ visible, onClose, jobLocation }) {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    if (visible) {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setCurrentLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
      })();
    }
  }, [visible]);

  const predefinedJobCoordinates = {
    'Baner, Pune': { latitude: 18.559, longitude: 73.786 },
    'Kothrud, Pune': { latitude: 18.507, longitude: 73.807 },
  };

  const jobCoords = predefinedJobCoordinates[jobLocation] || null;

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: currentLocation?.latitude || 18.5204,
            longitude: currentLocation?.longitude || 73.8567,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
        >
          {currentLocation && (
            <Marker coordinate={currentLocation} title="You are here" pinColor="blue" />
          )}
          {jobCoords && (
            <Marker coordinate={jobCoords} title="Job Location" pinColor="red" />
          )}
        </MapView>

        <TouchableOpacity onPress={onClose} style={styles.button}>
          <Text style={styles.buttonText}>Close Map</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  button: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    backgroundColor: '#000',
    padding: 14,
    borderRadius: 12,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
});
