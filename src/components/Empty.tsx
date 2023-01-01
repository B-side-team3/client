import Image from "next/image";
import styled from "styled-components";

interface IEmpty {
  text: string;
}

const Empty = ({ text }: IEmpty) => {
  return (
    <Container>
      <Image
        src="/assets/icons/empty.svg"
        width={180}
        height={220}
        alt="empty"
      />
      <h3>{text}</h3>
    </Container>
  );
};

export default Empty;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.675rem;

  h3 {
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 1.875rem;
    text-align: center;
    color: #aaaaaa;
  }
`;
