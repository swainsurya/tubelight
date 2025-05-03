import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, router } from 'expo-router';
import { useLocalSearchParams, useSearchParams } from 'expo-router/build/hooks';

// Dummy Data for posts
const posts = [
  {
    id: '1',
    postImage: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d',
    caption: 'Exploring the mountains! 🏔️✨',
  },
  {
    id: '2',
    postImage: 'https://images.unsplash.com/photo-1499696010181-0a524b7b3e76',
    caption: 'Sunsets are magical 🌅',
  },
  {
    id: '3',
    postImage: 'https://images.unsplash.com/photo-1531256379411-40655f04d1b4',
    caption: 'City lights at night 🏙️💡',
  },
];

export default function ProfileScreen() {
  const {id} = useLocalSearchParams();
  const [profilePic, setProfilePic] = useState(`https://randomuser.me/api/portraits/men/${id || 1}.jpg`);
  const [followers, setFollowers] = useState(150);
  const [following, setFollowing] = useState(180);
  const [username, setUsername] = useState('john_doe');

  useEffect(()=>{
    setProfilePic(`https://randomuser.me/api/portraits/men/${id}.jpg`);
  },[id])

  // Function to pick profile image
  const pickProfileImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setProfilePic(result.uri);
    }
  };

  const renderPost = ({ item }) => (
    <View style={styles.postContainer}>
      <Image source={{ uri: item.postImage }} style={styles.postImage} />
      <Text style={styles.postCaption}>{item.caption}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Profile Picture */}
      <TouchableOpacity onPress={pickProfileImage}>
        <Image source={{ uri: profilePic }} style={styles.profilePic} />
      </TouchableOpacity>

      {/* Username */}
      <Text style={styles.username}>{username}</Text>

      {/* Followers and Following */}
      <View style={styles.statsContainer}>
        <TouchableOpacity onPress={() => router.push("/(others)/FollowersScreen")} style={styles.statsItem}>
          <Text style={styles.statsNumber}>{followers}</Text>
          <Text style={styles.statsLabel}>Followers</Text>
        </TouchableOpacity>
        <View style={styles.statsItem}>
          <Text style={styles.statsNumber}>{following}</Text>
          <Text style={styles.statsLabel}>Following</Text>
        </View>
      </View>

      {/* Posts */}
      <Text style={styles.postsTitle}>My Posts</Text>
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.postsContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: '#f5f5f5',
  },
  profilePic: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: '#0db4b9',
  },
  username: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  statsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  statsItem: {
    marginHorizontal: 20,
    alignItems: 'center',
  },
  statsNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0db4b9',
  },
  statsLabel: {
    fontSize: 14,
    color: '#777',
  },
  postsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    width: '90%',
    alignSelf: 'flex-start',
    paddingLeft: 10,
    color: '#333',
  },
  postsContainer: {
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
  postContainer: {
    width: '45%',
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  postImage: {
    width: '100%',
    height: 120,
    borderRadius: 15,
  },
  postCaption: {
    padding: 8,
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
});
