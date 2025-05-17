// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKTBzuDybfMaLsEaq2jNhuJphfSy7RqUI",
  authDomain: "coffee-client-app.firebaseapp.com",
  projectId: "coffee-client-app",
  storageBucket: "coffee-client-app.firebasestorage.app",
  messagingSenderId: "485233704306",
  appId: "1:485233704306:web:7ae10a758b33ca641eb1eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }