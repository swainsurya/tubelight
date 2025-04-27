import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

export default function SplashScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/(auth)');
    }, 2000); // 2 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#eef6f9' />
      {/* Tubelight Logo Text */}
      <Text style={styles.logo}>Tubelight</Text>

      {/* Tagline */}
      <Text style={styles.tagline}>Go social and connect to next</Text>

      {/* Loader */}
      <ActivityIndicator size="large" color="#0db4b9" style={{ marginTop: 30 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#eef6f9', // soft background
    padding: 20,
  },
  logo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#0db4b9',
    marginBottom: 15,
    letterSpacing: 1,
  },
  tagline: {
    fontSize: 16,
    color: '#555',
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 20,
  },
});
