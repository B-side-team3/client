import type { NextPage } from "next";
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import Routine from "@components/Routine";
import { TokenStore } from "@store/index";
import api from "@utils/interceptor";
import { fcmToken } from "lib/fcm";

const Home: NextPage = () => {
  const [userInfo, setUserInfo] = useRecoilState(TokenStore);

  const regist = () => {
    if ("serviceWorker" in navigator && "PushManager" in window) {
      // service worker installation
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/service-worker.js")
          .then(reg => console.log("reg: ", reg, "\n", "registered"))
          .catch(e => console.log(e));
      });
    }
  };

  const showNoti = async () => {
    const token = await fcmToken();
    if (token) {
      setUserInfo({ ...userInfo, token });
    }
  };

  const getNoti = async () => api.get("/register");

  return (
    <>
      <Style.Container>
        {userInfo.token && <div> token: {userInfo.token}</div>}
        <Routine text="test" isDone={true} isCountinue={true} />
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
