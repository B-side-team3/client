import styled from "styled-components";

interface IRoutine {
  isDone: boolean;
  text: string;
  isCountinue: boolean;
}

const Routine = ({ isDone, text, isCountinue }: IRoutine) => {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <Style.Container>
      <Style.Info>
        <div className="isDone" />
        <div>{text}</div>
      </Style.Info>
      <Style.Loading>
        <Style.Play onClick={handleClick}>
          <div className="check" />
        </Style.Play>
        <Style.Play onClick={handleClick}>
          <div className="inner" />
        </Style.Play>
      </Style.Loading>
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
    padding: 0.75rem 1rem;
  `,
  Info: styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    height: 1.5rem;

    .isDone {
      height: 0.625rem;
      width: 0.625rem;
      background-color: red;
      border-radius: 50%;
      display: inline-block;
    }
  `,
  Loading: styled.div``,
  Play: styled.div`
    position: relative;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background-color: #ececec;
    cursor: pointer;

    .inner {
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: 0.1rem;
      transform: translate(-50%, -50%);
      width: 0.625rem;
      height: 0.625rem;
      border-color: transparent;
      box-sizing: border-box;
      border-style: solid;
      border-width: 0.3rem 0px 0.3rem 0.6rem;
      border-color: transparent transparent transparent #aaaaaa;
    }
    .check {
      display: inline-block;
      position: absolute;
      left: calc(50% - 10px / 2);
      top: calc(50% - 2px / 2);
      transform: rotate(45deg) translate(-50%, -50%);
      height: 12px;
      width: 7px;
      border-bottom: 2px solid #aaaaaa;
      border-right: 2px solid #aaaaaa;
    }
  `,
};

export default Routine;
