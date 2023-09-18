import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB56Y6xGtRXJXIJI7zwRkrDHx-DpXMtbDE",
  authDomain: "nwitter-reloaded-38375.firebaseapp.com",
  projectId: "nwitter-reloaded-38375",
  storageBucket: "nwitter-reloaded-38375.appspot.com",
  messagingSenderId: "981193233087",
  appId: "1:981193233087:web:03d0548ff2c8a728b56c0a"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);