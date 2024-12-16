import { styled } from "goober";

export const FullscreenModalStyled = styled('div')`
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10000;
`;