import { initializeApp } from "firebase/app";
import type { Messaging } from "firebase/messaging";
import { getMessaging, getToken } from "firebase/messaging";

interface IFcmToken {
  messaging: Messaging;
}

const firebaseConfig = {
  apiKey: "AIzaSyD85ICRtdevvOSYwY26yXvpMJ7PZN9poHc",
  authDomain: "rolebittest.firebaseapp.com",
  projectId: "rolebittest",
  storageBucket: "rolebittest.appspot.com",
  messagingSenderId: "1077273740761",
  appId: "1:1077273740761:web:49395f37a29f28f230c5c8",
};

const app = initializeApp(firebaseConfig);

const fcmToken = async (): Promise<string | null> => {
  const messaging = getMessaging(app);

  return Notification
    ? getToken(messaging, {
        vapidKey:
          // process.env.NEXT_PUBLIC_FCM_TOKEN env 설정 불가능. undefined 생성
          "BGxdxvsr0yKikF6mWbzfJYQqDY2HIrkuyP9SX0Z3ffTKNwanO3EbrOGcJXmsVQ9WjY2WUWnOdPLz59U67Y5xv70",
      })
    : null; // TODO: toast 디자인 나오면 toast popup
};

export { fcmToken };
