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
      <NavContainer>
        {status === "authenticated" && (
          <div onClick={() => signOut()}> signout</div>
        )}
        {children}
      </NavContainer>
    </>
  );
};

export default Layout;

const NavContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 99;
`;
