// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCPZ8XthzEqIEP3JcUz34M3lrxfjjGg4Ik',
  authDomain: 'house-bunny.firebaseapp.com',
  projectId: 'house-bunny',
  storageBucket: 'house-bunny.appspot.com',
  messagingSenderId: '821997662224',
  appId: '1:821997662224:web:83447c00c3c65ede371a95',
  measurementId: 'G-TX8G7440RE',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
