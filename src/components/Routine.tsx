import styled from "styled-components";

interface IRoutine {
  isDone: boolean;
  text: string;
  isCountinue: boolean;
}

const Routine = ({ isDone, text, isCountinue }: IRoutine) => {
  return (
    <Style.Container>
      <Style.Info>
        <div className="isDone" />
        <div>{text}</div>
      </Style.Info>
      <Style.Loading></Style.Loading>
    </Style.Container>
  );
};

const Style = {
  Container: styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 48px;
    border: 2px dotted black;
    border-radius: 1rem;
  `,
  Info: styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    height: 1.5rem;
    padding: 0.75rem 1rem;

    .isDone {
      height: 0.625rem;
      width: 0.625rem;
      background-color: red;
      border-radius: 50%;
      display: inline-block;
    }
  `,
  Loading: styled.div``,
};

export default Routine;
