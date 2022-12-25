importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyD85ICRtdevvOSYwY26yXvpMJ7PZN9poHc",
  authDomain: "rolebittest.firebaseapp.com",
  projectId: "rolebittest",
  storageBucket: "rolebittest.appspot.com",
  messagingSenderId: "1077273740761",
  appId: "1:1077273740761:web:49395f37a29f28f230c5c8"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});