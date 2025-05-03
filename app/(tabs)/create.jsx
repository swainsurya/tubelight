import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { router } from 'expo-router';

export default function Create() {
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);

  // Check for permissions on component mount
  useEffect(() => {
    const getPermission = async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasPermission(status === 'granted');
    };
    getPermission();
  }, []);

  // Handle image picking
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result.assets[0].uri); // Debugging: check the result of the image picker
    setImage(result?.assets[0].uri);

  };

  // Handle post submission
  const handlePost = () => {
    if (caption && image) {
      // You can add functionality to send the post data to your backend.
      alert('Post submitted successfully!');
      setImage(null);
      setCaption("");
      router.back(); // Go back to HomeFeed
    } else {
      alert('Please add a caption and an image.');
    }
  };

  // Show error if permission is not granted
  if (hasPermission === false) {
    return <Text>No access to media library</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Create Post</Text>

      {/* Image Picker */}
      <TouchableOpacity onPress={pickImage} style={styles.imagePicker}>
        {image ? (
          <Image source={{ uri: image }} style={styles.image} />
        ) : (
          <Text style={styles.imageText}>Pick an Image</Text>
        )}
      </TouchableOpacity>

      {/* Caption */}
      <TextInput
        value={caption}
        onChangeText={setCaption}
        style={styles.captionInput}
        placeholder="Write a caption..."
        multiline
      />

      {/* Post Button */}
      <TouchableOpacity onPress={handlePost} style={styles.postButton}>
        <Text style={styles.buttonText}>Post</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#0db4b9',
  },
  imagePicker: {
    width: '100%',
    height: 250,
    backgroundColor: '#f0f0f0',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  imageText: {
    color: '#555',
    fontSize: 16,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  captionInput: {
    width: '100%',
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    textAlignVertical: 'top',
  },
  postButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#0db4b9',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
