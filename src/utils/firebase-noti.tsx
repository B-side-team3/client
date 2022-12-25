// eslint-disable-next-line import/order
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyD85ICRtdevvOSYwY26yXvpMJ7PZN9poHc",
  authDomain: "rolebittest.firebaseapp.com",
  projectId: "rolebittest",
  storageBucket: "rolebittest.appspot.com",
  messagingSenderId: "1077273740761",
  appId: "1:1077273740761:web:49395f37a29f28f230c5c8",
};

export const requestPermisson = async () => {
  console.log("Requesting permission...");
  let token = "";

  Notification.requestPermission().then(async permission => {
    if (permission === "granted") {
      console.log("Notification permission granted.");

      const app = initializeApp(firebaseConfig);
      const messaging = getMessaging(app);

      return getToken(messaging, {
        vapidKey:
          "BGxdxvsr0yKikF6mWbzfJYQqDY2HIrkuyP9SX0Z3ffTKNwanO3EbrOGcJXmsVQ9WjY2WUWnOdPLz59U67Y5xv70",
      }).then(currentToken => {
        if (currentToken) {
          console.log("currentToken: ", JSON.stringify(currentToken));

          token = currentToken;
        } else {
          return null;
          console.log("Can not get token");
        }
      });
    } else {
      console.log("Do not have permission!");
    }
  });

  return token;
};
