import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';
import { getStorage } from "firebase/storage"; 


const firebaseConfig = {
  apiKey: "AIzaSyC_ArN5ylqq6KS05udY3WtLWBtE5cujelk",
  authDomain: "allynet-com.firebaseapp.com",
  projectId: "allynet-com",
  storageBucket: "allynet-com.firebasestorage.app",
  messagingSenderId: "714221037461",
  appId: "1:714221037461:web:9eb8d91a16800f8a91b89c",
  measurementId: "G-K6DGWHHR5D"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export { auth, db, analytics, storage };