import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
} from "react-native-dotenv";

// ** firebase config
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  // databaseURL: Constants.expoConfig.extra.databaseURL,
};

const myReactNativeLocalPersistence = getReactNativePersistence({
  getItem(...args) {
    // Called inline to avoid deprecation warnings on startup.
    return AsyncStorage.getItem(...args);
  },
  setItem(...args) {
    // Called inline to avoid deprecation warnings on startup.
    return AsyncStorage.setItem(...args);
  },
  removeItem(...args) {
    // Called inline to avoid deprecation warnings on startup.
    return AsyncStorage.removeItem(...args);
  },
});

// ** initialize firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
  persistence: myReactNativeLocalPersistence,
});
export const database = getFirestore(app);
export const storage = getStorage(app);
