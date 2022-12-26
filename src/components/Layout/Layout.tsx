import styled from "styled-components";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Wrap>
      <NavContainer />
      {children}
      <Footer />
    </Wrap>
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
