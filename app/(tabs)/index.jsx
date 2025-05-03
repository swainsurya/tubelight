import { Link, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Dummy Data
const posts = [
  {
    id: '1',
    username: 'john_doe',
    userImage: 'https://randomuser.me/api/portraits/men/1.jpg',
    postImage: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d',
    caption: 'Exploring the mountains! 🏔️✨',
    likes: 120,
    dislikes: 10,
    comments: 34,
  },
  {
    id: '2',
    username: 'jane_smith',
    userImage: 'https://randomuser.me/api/portraits/women/2.jpg',
    postImage: 'https://images.unsplash.com/photo-1499696010181-0a524b7b3e76',
    caption: 'Sunsets are magical 🌅',
    likes: 200,
    dislikes: 15,
    comments: 45,
  },
  {
    id: '3',
    username: 'alex_23',
    userImage: 'https://randomuser.me/api/portraits/men/3.jpg',
    postImage: 'https://images.unsplash.com/photo-1531256379411-40655f04d1b4',
    caption: 'City lights at night 🏙️💡',
    likes: 89,
    dislikes: 5,
    comments: 12,
  },
];

const stories = [
  {
    id: '1',
    username: 'john_doe',
    userImage: 'https://randomuser.me/api/portraits/men/1.jpg',
    isActive: true,
  },
  {
    id: '2',
    username: 'jane_smith',
    userImage: 'https://randomuser.me/api/portraits/women/2.jpg',
    isActive: false,
  },
  {
    id: '3',
    username: 'alex_23',
    userImage: 'https://randomuser.me/api/portraits/men/3.jpg',
    isActive: true,
  },
  {
    id: '4',
    username: 'john_doe',
    userImage: 'https://randomuser.me/api/portraits/men/1.jpg',
    isActive: true,
  },
  {
    id: '5',
    username: 'jane_smith',
    userImage: 'https://randomuser.me/api/portraits/women/2.jpg',
    isActive: false,
  },
  {
    id: '6',
    username: 'alex_23',
    userImage: 'https://randomuser.me/api/portraits/men/3.jpg',
    isActive: true,
  },
];

export default function HomeFeedScreen() {
  const [likes, setLikes] = useState(posts.map(post => post.likes));
  const [dislikes, setDislikes] = useState(posts.map(post => post.dislikes));

  const handleLike = (index) => {
    const updatedLikes = [...likes];
    updatedLikes[index] += 1;
    setLikes(updatedLikes);
  };

  const handleDislike = (index) => {
    const updatedDislikes = [...dislikes];
    updatedDislikes[index] += 1;
    setDislikes(updatedDislikes);
  };

  const renderPost = ({ item, index }) => (
    <View style={styles.postContainer}>
      {/* Post Header */}
      <Link href={{
        pathname: "/account",
        params: {id: index+1}
      }} style={styles.header}>
        <Image source={{ uri: item.userImage }} style={styles.userImage} />
        <Text style={styles.username}>{item.username}</Text>
      </Link>

      {/* Post Image */}
      <Image source={{ uri: item.postImage }} style={styles.postImage} />

      {/* Post Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.caption}>
          <Text style={styles.boldUsername}>{item.username} </Text>{item.caption}
        </Text>

        {/* Like, Dislike, and Comment Section */}
        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionButton} onPress={() => handleLike(index)}>
            <Text style={styles.likeComment}>❤️ {likes[index]}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={() => handleDislike(index)}>
            <Text style={styles.likeComment}>👎 {dislikes[index]}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.likeComment}>💬 {item.comments}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  const renderStory = ({ item }) => (
    <TouchableOpacity style={styles.storyContainer}>
      <View style={[styles.storyImageContainer, item.isActive && styles.activeStory]}>
        <Image source={{ uri: item.userImage }} style={styles.storyImage} />
      </View>
      <Text style={styles.storyUsername}>{item.username}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#eef6f9' />
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Text style={styles.topBarTitle}>TubeLight</Text>
        <TouchableOpacity>
          <Text style={styles.addPostButton}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Stories Section */}
      <FlatList
        data={stories}
        renderItem={renderStory}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.storiesSection}
      />

      {/* Feed */}
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef6f9',
    padding: 10,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginBottom: 10,
  },
  topBarTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0db4b9',
  },
  addPostButton: {
    fontSize: 30,
    color: '#0db4b9',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  storiesSection: {
    marginBottom: 20,
  },
  storyContainer: {
    alignItems: 'center',
    marginRight: 15,
  },
  storyImageContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    overflow: 'hidden',
    marginBottom: 5,
    borderWidth: 3,
    borderColor: '#fff',
  },
  activeStory: {
    borderColor: '#0db4b9',
  },
  storyImage: {
    width: '100%',
    height: '100%',
    borderRadius: 35,
  },
  storyUsername: {
    fontSize: 12,
    color: '#333',
  },
  postContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 6,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  userImage: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    marginRight: 12,
  },
  username: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#333',
  },
  postImage: {
    width: '100%',
    height: 250,
    borderRadius: 15,
  },
  infoContainer: {
    padding: 12,
  },
  caption: {
    fontSize: 14,
    color: '#555',
    marginBottom: 12,
  },
  boldUsername: {
    fontWeight: 'bold',
    color: '#0db4b9',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeComment: {
    fontSize: 14,
    color: '#333',
    fontWeight: '600',
  },
});
