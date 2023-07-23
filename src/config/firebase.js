import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {
    FIREBASE_API_KEY,
    FIREBASE_AUTH_DOMAIN,
    FIREBASE_PROJECT_ID,
    FIREBASE_STORAGE_BUCKET,
    FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID,
} from "react-native-dotenv";

// ** firebase config
const firebaseConfig = {
    apiKey: String(FIREBASE_API_KEY),
    authDomain: String(FIREBASE_AUTH_DOMAIN),
    projectId: String(FIREBASE_PROJECT_ID),
    storageBucket: String(FIREBASE_STORAGE_BUCKET),
    messagingSenderId: String(FIREBASE_MESSAGING_SENDER_ID),
    appId: String(FIREBASE_APP_ID),
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
