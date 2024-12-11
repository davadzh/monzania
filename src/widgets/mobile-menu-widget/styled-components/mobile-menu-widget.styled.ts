import { keyframes, styled } from "goober";

const slideInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const MobileMenuWidgetStyled = styled('div')`
  position: fixed;
  display: flex;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 1);
  z-index: 999;
  animation: ${slideInAnimation} 0.3s ease;
`;