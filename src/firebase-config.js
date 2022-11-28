import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUR_FObbju7Stn6LqNJi-ttN1Ui8AOipI",
  authDomain: "blog-web-ebe7b.firebaseapp.com",
  projectId: "blog-web-ebe7b",
  storageBucket: "blog-web-ebe7b.appspot.com",
  messagingSenderId: "1059983135366",
  appId: "1:1059983135366:web:4e29942e7415b46f2bb707",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
