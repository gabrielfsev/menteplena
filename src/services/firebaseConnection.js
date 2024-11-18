import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCPSq8MNUlWi1iwuZlus81vERArH6pC_rY",
  authDomain: "menteplenaapp-1baa4.firebaseapp.com",
  projectId: "menteplenaapp-1baa4",
  storageBucket: "menteplenaapp-1baa4.appspot.com",
  messagingSenderId: "964598615694",
  appId: "1:964598615694:web:81cabb62b0724b1cf9c3df",
  measurementId: "G-7XNWHQBHPG"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);