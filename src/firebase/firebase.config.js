import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

export const app = initializeApp(firebaseConfig);

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCWSsWJ5Sf_NjBIAkFPtQcznfQMwWjuFX0",
//   authDomain: "warmpaws-petcare-e4bd3.firebaseapp.com",
//   projectId: "warmpaws-petcare-e4bd3",
//   storageBucket: "warmpaws-petcare-e4bd3.firebasestorage.app",
//   messagingSenderId: "30014797666",
//   appId: "1:30014797666:web:f8965bd3aaa435444fde3b",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // Initialize Firebase Authentication and get a reference to the service

// export const auth = getAuth(app);
