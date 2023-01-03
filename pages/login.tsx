import { useEffect } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";
import styled from "styled-components";

const Login: NextPage = () => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/home");
    }
  }, [status]);

  return (
    <LoginWrap>
      <div className="title-wrap">
        <h1>롤 모델의 습관</h1>
        <h2>RoleBit</h2>
        <h3>롤모델의 습관을 통해 성장하세요.</h3>
      </div>

      <div className="button-wrap">
        <button className="login-btn" onClick={() => signIn("kakao")}>
          <p className="kakao-icon" />
          <p className="kakao-label">카카오로 3초만에 시작하기</p>
        </button>
      </div>
    </LoginWrap>
  );
};

const LoginWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding: 16rem 1rem;
  margin: 0 auto;
  width: 100%;
  max-width: 20rem;
  height: 100%;
  border: 2px rgba(0, 0, 0, 0.1) dotted;
  .title-wrap,
  .button-wrap {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    h1 {
      font-size: 1.6rem;
      opacity: 0;
      animation: fadeIn 0.5s forwards;
    }
    h2 {
      font-size: 1.7rem;
      font-weight: 700;
      opacity: 0;
      animation: fadeIn 0.5s 0.5s forwards;
    }
    h3 {
      margin: 2rem 0;
      font-size: 1.3rem;
      opacity: 0;
      animation: fadeIn 0.5s 1s forwards;
    }
  }
  .login-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    max-width: 20rem;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    background-color: #f8e42b;
    opacity: 0;
    animation: fadeIn 0.5s 1.5s forwards;
    .kakao-icon {
      position: relative;
      &::before,
      &::after {
        content: "";
        display: block;
        position: absolute;
        background: #351f1f;
        transform: translate(-50%, -50%);
      }
      &::before {
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 1.2rem;
      }
      &::after {
        top: -0.2rem;
        left: -0.2rem;
        width: 1rem;
        height: 1rem;
        transform: skew(10deg);
      }
    }
    @keyframes fadeIn {
      from {
        transform: translateY(40px);
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;
export default Login;
