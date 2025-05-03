import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch, Alert, Image, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SettingsScreen() {
  const [darkMode, setDarkMode] = useState(false);

  const handleEditProfile = () => {
    Alert.alert('Edit Profile', 'Feature under development...');
  };

  const handleNotifications = () => {
    Alert.alert('Notifications', 'Notification preferences coming soon...');
  };

  const handleLogout = () => {
    Alert.alert('Logged out', 'You have been logged out.');
    // navigation.reset({ index: 0, routes: [{ name: 'Login' }] });
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: darkMode ? '#121212' : '#fff' }]}>
      {/* Profile Info */}
      <View style={styles.profileSection}>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/men/2.jpg' }}
          style={styles.profileImage}
        />
        <Text style={[styles.profileName, { color: darkMode ? '#fff' : '#333' }]}>John Doe</Text>
        <Text style={[styles.profileEmail, { color: darkMode ? '#aaa' : '#666' }]}>john@example.com</Text>
      </View>

      {/* Settings Options */}
      <View style={styles.option}>
        <Ionicons name="person-outline" size={24} color={darkMode ? '#fff' : '#333'} />
        <Text style={[styles.optionText, { color: darkMode ? '#fff' : '#333' }]}>Edit Profile</Text>
        <TouchableOpacity onPress={handleEditProfile} style={styles.forwardIcon}>
          <Ionicons name="chevron-forward" size={22} color={darkMode ? '#aaa' : '#666'} />
        </TouchableOpacity>
      </View>

      <View style={styles.option}>
        <Ionicons name="notifications-outline" size={24} color={darkMode ? '#fff' : '#333'} />
        <Text style={[styles.optionText, { color: darkMode ? '#fff' : '#333' }]}>Notifications</Text>
        <TouchableOpacity onPress={handleNotifications} style={styles.forwardIcon}>
          <Ionicons name="chevron-forward" size={22} color={darkMode ? '#aaa' : '#666'} />
        </TouchableOpacity>
      </View>

      <View style={styles.option}>
        <Ionicons name="moon-outline" size={24} color={darkMode ? '#fff' : '#333'} />
        <Text style={[styles.optionText, { color: darkMode ? '#fff' : '#333' }]}>Dark Mode</Text>
        <Switch
          value={darkMode}
          onValueChange={setDarkMode}
          thumbColor={darkMode ? '#0db4b9' : '#f4f3f4'}
          trackColor={{ false: '#ccc', true: '#0db4b9' }}
        />
      </View>

      <View style={styles.option}>
        <Ionicons name="log-out-outline" size={24} color="#e74c3c" />
        <Text style={[styles.optionText, { color: '#e74c3c' }]}>Logout</Text>
        <TouchableOpacity onPress={handleLogout} style={styles.forwardIcon}>
          <Ionicons name="chevron-forward" size={22} color="#e74c3c" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#0db4b9',
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileEmail: {
    fontSize: 14,
    color: '#777',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  optionText: {
    flex: 1,
    marginLeft: 15,
    fontSize: 16,
  },
  forwardIcon: {
    marginLeft: 'auto',
  },
});
