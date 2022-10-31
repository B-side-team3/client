import type { ReactNode } from "react";
import styled from "styled-components";
import Atoms from "@components/Atoms";

interface IError {
  children: ReactNode;
}

const ErrorForm = ({ children }: IError) => {
  return (
    <>
      {children ? (
        <Atoms.Div fontSize="xs" color="status-100">
          {children}
        </Atoms.Div>
      ) : (
        <FakeBox>&nbsp;</FakeBox>
      )}
    </>
  );
};

export default ErrorForm;

const FakeBox = styled.div`
  height: 12px;
`;
