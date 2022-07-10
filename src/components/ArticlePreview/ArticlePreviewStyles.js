import styled from "styled-components";

export const H2 = styled.h2`
  margin: 10px 0;
`;

export const P = styled.p``;

export const HR = styled.hr`
  background-color: #ccc;
  margin: 20px 0;
  border: none;
  height: 0.5px;
`;

export const ArticleContainer = styled.article`
  /* border-bottom: 1px solid #ccc; */
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
  line-height: 2;
`;
