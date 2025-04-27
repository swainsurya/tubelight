import { router } from 'expo-router';
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

export default function SplashScreen() {
  useEffect(() => {
    setTimeout(() => {
      router.replace('/(auth)');
    }, 2000); // 2 seconds delay
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Tube Light</Text>
      <Text>Go social and connect to next</Text>
      <ActivityIndicator size="large" color="#0db4b9" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff',
  },
  logo: {
    fontSize: 32, fontWeight: 'bold', color: '#0db4b9', marginBottom: 20,
  },
});
