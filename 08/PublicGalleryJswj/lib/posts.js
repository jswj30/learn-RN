import firestore from '@react-native-firebase/firebase';

const postsCollection = firestore().collection('posts');

export function createPost({user, photoURL, description}) {
  return postsCollection.add({
    user, 
    photoURL, 
    description, 
    createdAt: firestore.FieldValue.serverTimestamp(), 
  });
}