import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 32px 0;
  border-bottom: 1px solid #eaeaea;
  position: fixed;
  width: 100%;
  z-index: 999;
  top: 0;
  background-color: ${({ theme }) => `${theme.colors.background.main}`};
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ListItem = styled.li`
  display: inline;
  margin: 0 1rem;
`;

export const H1 = styled.h1`
  text-align: center;
`;
