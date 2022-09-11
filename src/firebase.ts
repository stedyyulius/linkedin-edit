import { getDatabase, set, ref, onValue } from "firebase/database";
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyAfB5WEXH-jXJ6nN_vlsHwY8JgWkxYKefw",
  authDomain: "linkedin-edit.firebaseapp.com",
  projectId: "linkedin-edit",
  storageBucket: "linkedin-edit.appspot.com",
  messagingSenderId: "200901831085",
  appId: "1:200901831085:web:6b25f4fe8951c0db6b1924",
  measurementId: "G-TTQZFJTEW6",
  databaseURL: "https://linkedin-edit-default-rtdb.asia-southeast1.firebasedatabase.app",
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export const setDb = (path: string, payload: any) => {
    set(ref(db, path), payload);
}

export const getDb = (path: string, callback: (result: any) => any) => {
    const starCountRef = ref(db, path);
    onValue(starCountRef, (snapshot) => {
        callback(snapshot.val());
    });
}