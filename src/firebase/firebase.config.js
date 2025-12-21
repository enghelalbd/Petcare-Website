import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCWSsWJ5Sf_NjBIAkFPtQcznfQMwWjuFX0",
  authDomain: "warmpaws-petcare-e4bd3.firebaseapp.com",
  projectId: "warmpaws-petcare-e4bd3",
  storageBucket: "warmpaws-petcare-e4bd3.firebasestorage.app",
  messagingSenderId: "30014797666",
  appId: "1:30014797666:web:f8965bd3aaa435444fde3b",
};

// ✅ EXPORT app
export const app = initializeApp(firebaseConfig);

// ✅ EXPORT auth
export const auth = getAuth(app);
