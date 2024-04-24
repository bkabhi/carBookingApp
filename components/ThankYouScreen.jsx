import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ThankYouScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>Thank you for confirming your ride!</Text>
      <Text style={styles.subMessage}>Our rider will call you soon.</Text>
      <View style={styles.imageContainer}>
        {/* Placeholder for an image or icon (e.g., checkmark icon) */}
        {/* Example: <Image source={require('./path/to/checkmark.png')} style={styles.image} /> */}
        <Text style={styles.image}>✔️</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  message: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  subMessage: {
    fontSize: 18,
    textAlign: 'center',
    color: '#666',
    marginBottom: 40,
  },
  imageContainer: {
    width: 100,
    height: 100,
    backgroundColor: '#4caf50',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    fontSize: 60,
    color: '#fff',
  },
});

export default ThankYouScreen;
