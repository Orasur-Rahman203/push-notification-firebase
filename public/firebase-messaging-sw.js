importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
    apiKey: "AIzaSyDR6h2l1g-BCcrSqsS3q8rkU3i_hXMT4Kc",
    authDomain: "push-notification-fireba-2c38d.firebaseapp.com",
    projectId: "push-notification-fireba-2c38d",
    storageBucket: "push-notification-fireba-2c38d.appspot.com",
    messagingSenderId: "1067099599536",
    appId: "1:1067099599536:web:b41fbaa39f47097af40175"
  };

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});