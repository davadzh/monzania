import { styled } from "goober";
import { Breakpoints } from "@shared/constants/breakpoints.ts";

export const FullscreenModalCloseButtonStyled = styled('button')`
  position: fixed;
  top: 32px;
  right: 32px;
  background: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
  padding: 0;

  & > svg {
    width: 20px;
    height: 20px;
  }
  
  @media (max-width: ${Breakpoints.MOBILE}px) {
    top: 16px;
    right: 16px;
  }
`;