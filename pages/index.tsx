import { useEffect, useLayoutEffect, useState } from "react";
import type { NextPage } from "next";
// import firebase from "firebase";
// import "firebase/messaging";
import { useRouter } from "next/router";
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
import { signIn, useSession, signOut } from "next-auth/react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { TokenStore } from "@store/index";
import { requestPermisson } from "@utils/firebase-noti";
import api from "@utils/interceptor";
import NotiPermission from "@utils/notification";

const Home: NextPage = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [userInfo, setUserInfo] = useRecoilState(TokenStore);

  const firebaseConfig = {
    apiKey: "AIzaSyD85ICRtdevvOSYwY26yXvpMJ7PZN9poHc",
    authDomain: "rolebittest.firebaseapp.com",
    projectId: "rolebittest",
    storageBucket: "rolebittest.appspot.com",
    messagingSenderId: "1077273740761",
    appId: "1:1077273740761:web:49395f37a29f28f230c5c8",
  };

  const regist = () => {
    // NotiPermission();
  };

  const showNoti = async () => {
    // if (window.navigator.serviceWorker.controller) {
    //   window.navigator.serviceWorker.controller.postMessage({
    //     command: "log",
    //     message: "hello world",
    //   });
    // }
    // Notification.requestPermission().then(async permission => {
    //   if (permission === "granted") {
    //     console.log("Notification permission granted.");
    //   } else {
    //     console.log("Do not have permission!");
    //   }
    // });
    const app = initializeApp(firebaseConfig);
    const messaging = getMessaging(app);

    getToken(messaging, {
      vapidKey:
        "BGxdxvsr0yKikF6mWbzfJYQqDY2HIrkuyP9SX0Z3ffTKNwanO3EbrOGcJXmsVQ9WjY2WUWnOdPLz59U67Y5xv70",
    }).then(currentToken => {
      if (currentToken) {
        console.log("currentToken: ", JSON.stringify(currentToken));

        setUserInfo({ ...userInfo, token: currentToken });
      } else {
        console.log("Can not get token");
      }
    });
  };

  useEffect(() => {
    console.log(userInfo.token);
    if (!userInfo.token) {
      router.push("login");
    }
  }, [userInfo.token]);

  const getNoti = () => {
    api.get("/register").then(res => {
      console.log(res);
    });
  };

  return (
    <>
      <Style.Container>
        <button onClick={() => signIn("kakao")}>Sign in</button>
        <button onClick={() => signOut()}>Sign out</button>
        <button onClick={regist}>regist</button>
        <button onClick={showNoti}> show notification</button>
        <button onClick={getNoti}> get notification</button>
        {userInfo.token && <div> token: {userInfo.token}</div>}
      </Style.Container>
    </>
  );
};

export default Home;

const Style = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
  `,
};
