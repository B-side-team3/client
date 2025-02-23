import { useEffect } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import Routine from "@components/Routine";
import Todo from "@components/Todo";
import { TokenStore } from "@store/index";
import api from "@utils/interceptor";
import { fcmToken } from "lib/fcm";

const Home: NextPage = () => {
  const [userInfo, setUserInfo] = useRecoilState(TokenStore);
  const router = useRouter();

  // TODO: Notification 알림 허용 API를 언제 호출시켜야 할지 정하고 설계해야함.
  // TODO: Regist / showNotification 둘다.
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

  // const showNoti = async () => {
  //   const token = await fcmToken();
  //   if (token) {
  //     setUserInfo({ ...userInfo, token });
  //   }
  // };

  const logOut = async () => {
    router.push("/login");
    console.log("/login");
    localStorage.clear();
  };

  return (
    <>
      <Style.Container>
        {userInfo.token && <div> token: {userInfo.token}</div>}
        <Routine text="test" isDone={true} isCountinue={true} />
      </Style.Container>
      <button onClick={logOut}>로그아웃</button>
      <Todo />
    </>
  );
};

export default Home;

const Style = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 20px;
    /* height: 100vh; */
  `,
};
