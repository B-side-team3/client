import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSession, signOut } from "next-auth/react";
import styled from "styled-components";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status !== "authenticated") {
      router.push("/login");
    }
  }, [status]);

  return (
    <>
      <Wrap>
        <NavContainer>{children}</NavContainer>
      </Wrap>
    </>
  );
};

export default Layout;

const Wrap = styled.div`
  width: 100%;
  max-width: 20rem;
  height: 100%;
  border: 2px rgba(0, 0, 0, 0.1) dotted;
`;

const NavContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 99;
`;
