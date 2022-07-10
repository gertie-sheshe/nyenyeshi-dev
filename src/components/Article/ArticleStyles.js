import styled from "styled-components";

export const H2 = styled.h2`
  margin: 10px 0;
  line-height: 2;
`;

export const H3 = styled.h3`
  margin: 10px 0;
  line-height: 2;
`;

export const H4 = styled.h4`
  margin: 10px 0;
  line-height: 2;
`;

export const P = styled.p`
  line-height: 2;
  margin: 15px 0px;
`;

export const Link = styled.a`
  text-underline-offset: 1px;
`;

export const BlockQuote = styled.blockquote`
  background: #f9f9f9;
  border-left: 5px solid #ccc;
  margin: 1.5em 10px;
  padding: 0.5em 10px;
  line-height: 2;
`;

export const Pre = styled.pre`
  background-color: black;
  color: wheat;
  padding: 20px;
`;

export const ListItem = styled.li`
  margin: 15px 0px;
  line-height: 2;
`;

export const ArticleContainer = styled.article`
  padding: 20px 0;
  & li {
    margin: 15px 0px;
    line-height: 2;
  }
`;
