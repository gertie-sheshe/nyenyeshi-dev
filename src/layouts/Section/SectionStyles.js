import styled from "styled-components";
import { devices } from "@blog/theme/theme";

const { xs, sm, md, lg } = devices;

export const SectionContainer = styled.div`
  @media (min-width: ${xs}) and (max-width: ${sm}) {
    padding: 0 20px;
  }

  @media (min-width: ${sm}) and (max-width: ${md}) {
    padding: 0 100px;
  }

  @media (min-width: ${lg}) {
    padding: 0 350px;
  }
`;
