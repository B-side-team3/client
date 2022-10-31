import styled from "styled-components";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavContainer></NavContainer>
      {children}
      <Footer />
    </>
  );
};

export default Layout;

const NavContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 99;
`;
