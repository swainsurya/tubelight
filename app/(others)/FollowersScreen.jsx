import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

const dummyFollowers = [
  {
    id: '1',
    name: 'Alice Johnson',
    username: 'alice_j',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    isFollowing: true,
  },
  {
    id: '2',
    name: 'Bob Smith',
    username: 'bob_smith',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    isFollowing: false,
  },
  {
    id: '3',
    name: 'Clara Rivera',
    username: 'clara.r',
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    isFollowing: true,
  },
];

export default function FollowersScreen() {
  const [followers, setFollowers] = useState(dummyFollowers);

  const toggleFollow = (id) => {
    setFollowers((prev) =>
      prev.map((follower) =>
        follower.id === id
          ? { ...follower, isFollowing: !follower.isFollowing }
          : follower
      )
    );
  };

  const renderFollower = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.username}>@{item.username}</Text>
      </View>
      <TouchableOpacity
        style={[styles.button, item.isFollowing ? styles.unfollow : styles.follow]}
        onPress={() => toggleFollow(item.id)}
      >
        <Text style={styles.buttonText}>
          {item.isFollowing ? 'Unfollow' : 'Follow'}
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Followers</Text>
      <FlatList
        data={followers}
        renderItem={renderFollower}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#0db4b9',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    elevation: 1,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#0db4b9',
  },
  info: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
  },
  username: {
    fontSize: 14,
    color: '#777',
  },
  button: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
  },
  follow: {
    backgroundColor: '#0db4b9',
  },
  unfollow: {
    backgroundColor: '#e74c3c',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
