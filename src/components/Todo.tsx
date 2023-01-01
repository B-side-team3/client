import styled from "styled-components";
import Timer from "./Timer";

const Todo = () => {
  const test = () => {};

  return (
    <S.Container>
      <Timer mm={"10"} ss={"20"} callback={test} />
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    /* position: sticky;
    bottom: 0; */
    /* height: 20px; */
    border: 1px solid red;
    border-radius: 0.625rem;
  `,
  Play: styled.div`
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background-color: #ececec;
    cursor: pointer;
    .inner {
      box-sizing: border-box;
      width: 0.625rem;
      height: 0.625rem;
      border-style: solid;
      border-width: 0.3rem 0px 0.3rem 0.6rem;
      border-color: transparent transparent transparent #aaaaaa;
    }
    .check {
      display: inline-block;
      transform: rotate(45deg);
      height: 24px;
      width: 12px;
      border-bottom: 7px solid black;
      border-right: 7px solid black;
    }
  `,
};

export default Todo;
