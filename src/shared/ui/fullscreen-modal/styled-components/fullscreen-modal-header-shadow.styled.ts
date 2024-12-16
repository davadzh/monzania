import { styled } from "goober";
import { Breakpoints } from "@shared/constants/breakpoints.ts";

export const FullscreenModalHeaderShadowStyled = styled('div')`
  position: fixed;
  width: 100vw;
  height: 110px;
  background: linear-gradient(180deg, #FFFFFF 25.08%, rgba(255, 255, 255, 0) 100%);
  
  @media (max-width: ${Breakpoints.MOBILE}px) {
    height: 68px;
  }
`;