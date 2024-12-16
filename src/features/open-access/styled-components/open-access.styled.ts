import { styled } from "goober";
import { Breakpoints } from "@shared/constants/breakpoints.ts";

export const OpenAccessStyled = styled('form')`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  width: 390px;
  
  @media (max-width: ${Breakpoints.MOBILE}px) {
    width: 100%;
  }
`;