import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const LayoutTabs = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      {/* Home Tab */}
      <Tabs.Screen 
        name="index" 
        options={{
          title: 'Home', 
          tabBarIcon: ({ color, size }) => <Ionicons name='home' size={size} color={color} />
        }} 
      />

      {/* Notification Tab */}
      <Tabs.Screen 
        name="notification" 
        options={{
          title: 'Notifications', 
          tabBarIcon: ({ color, size }) => <Ionicons name='notifications' size={size} color={color} />
        }} 
      />

      {/* Create Tab */}
      <Tabs.Screen 
        name="create" 
        options={{
          title: 'Create', 
          tabBarIcon: ({ color, size }) => <Ionicons name='add-circle' size={size} color={color} />
        }} 
      />

      {/* Account Tab */}
      <Tabs.Screen 
        name="account" 
        options={{
          title: 'Account', 
          tabBarIcon: ({ color, size }) => <Ionicons name='person' size={size} color={color} />
        }} 
      />

      {/* Settings Tab */}
      <Tabs.Screen 
        name="settings" 
        options={{
          title: 'Settings', 
          tabBarIcon: ({ color, size }) => <Ionicons name='settings' size={size} color={color} />
        }} 
      />
    </Tabs>
  );
};

export default LayoutTabs;
