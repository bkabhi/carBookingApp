import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Alert, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RideForm = () => {
  const navigation = useNavigation();
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropLocation, setDropLocation] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);
  
  const handleSubmit = async () => {

    // Prepare data to send
    const data = {
      pickupLocation,
      dropLocation,
      phoneNumber,
    };

    const apiUrl = "https://car-booking-backend-inky.vercel.app/api/bookings";

    try {
      setLoading(true);
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Navigate to ThankYouScreen upon successful submission
        navigation.navigate('ThankYou');
        setPickupLocation('');
        setDropLocation('');
        setPhoneNumber('');
      } else {
        Alert.alert('Error', 'Failed to confirm ride. Please try again.');
      }
      setLoading(false);
    } catch (error) {
      console.error('Error submitting ride:', error);
      Alert.alert('Error', 'Something went wrong. Please try again later.');
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* Car Image */}
      <Image source={require('./../assets/car_image4.png')} style={styles.carImage} />

      {/* Form Inputs */}
      <TextInput
        style={styles.input}
        placeholder="Pickup Location"
        value={pickupLocation}
        onChangeText={text => setPickupLocation(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Drop Location"
        value={dropLocation}
        onChangeText={text => setDropLocation(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={text => setPhoneNumber(text)}
        keyboardType="phone-pad"
      />

      {/* Display loading indicator when loading is true */}
      <TouchableOpacity
        style={[styles.button, { opacity: loading ? 0.7 : 1 }]} // Reduce opacity when loading
        onPress={handleSubmit}
        disabled={loading || !pickupLocation || !dropLocation || !phoneNumber}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Confirm Ride</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 25,
    borderRadius: 10,
    marginTop: 10,
    paddingTop: 0,
  },
  carImage: {
    width: 220,
    height: 150,
    marginBottom: 10,
  },
  input: {
    marginBottom: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
    width: '100%',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RideForm;
