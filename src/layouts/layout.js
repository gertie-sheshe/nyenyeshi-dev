import Header from "@blog/layouts/Header";
import Footer from "@blog/layouts/Footer";
import Section from "@blog/layouts/Section";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>
        <Section>{children}</Section>
      </Main>
      <Footer />
    </>
  );
};

const Main = styled.main`
  height: 100vh;
  margin-top: 177px;
  overflow: scroll;
`;

export default Layout;
