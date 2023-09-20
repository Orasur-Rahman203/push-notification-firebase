import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";


const firebaseConfig = {
  apiKey: "AIzaSyDR6h2l1g-BCcrSqsS3q8rkU3i_hXMT4Kc",
  authDomain: "push-notification-fireba-2c38d.firebaseapp.com",
  projectId: "push-notification-fireba-2c38d",
  storageBucket: "push-notification-fireba-2c38d.appspot.com",
  messagingSenderId: "1067099599536",
  appId: "1:1067099599536:web:b41fbaa39f47097af40175"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
