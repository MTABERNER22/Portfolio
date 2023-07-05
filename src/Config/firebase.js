
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD5Vh5xYWCP8NNONJTLh5I2eavrvw7Ft6I",
  authDomain: "portfolio-c958a.firebaseapp.com",
  databaseURL: "https://portfolio-c958a-default-rtdb.firebaseio.com",
  projectId: "portfolio-c958a",
  storageBucket: "portfolio-c958a.appspot.com",
  messagingSenderId: "94656387106",
  appId: "1:94656387106:web:b60820aa96c71cf447527b"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig)

export default appFirebase;