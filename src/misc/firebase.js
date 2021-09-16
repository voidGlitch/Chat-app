import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyAm6oW7R1momz9P9HNgbKCgsi3ZpkcynMM',
  authDomain: 'chat-web-app-9eb34.firebaseapp.com',
  databaseURL: 'https://chat-web-app-9eb34-default-rtdb.firebaseio.com',
  projectId: 'chat-web-app-9eb34',
  storageBucket: 'chat-web-app-9eb34.appspot.com',
  messagingSenderId: '917375924983',
  appId: '1:917375924983:web:916b92645ba03bc64131f2',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
export const storage =app.storage();