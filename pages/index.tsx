import type { NextPage } from "next";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import Routine from "@components/Routine";
import Todo from "@components/Todo";
import { TokenStore } from "@store/index";
import { fcmToken } from "lib/fcm";

const Home: NextPage = () => {
  const [userInfo, setUserInfo] = useRecoilState(TokenStore);

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
  const showNoti = async () => {
    const token = await fcmToken();
    if (token) {
      setUserInfo({ ...userInfo, token });
    }
  };

  return (
    <>
      <Style.Container>
        {userInfo.token && <div> token: {userInfo.token}</div>}
        <Routine text="test" isDone={true} isCountinue={true} />
      </Style.Container>
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
