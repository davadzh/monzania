import { keyframes, styled } from "goober";

const appearanceAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ShowcaseBackgroundStyled = styled('div')<{_isImageLoaded: boolean;}>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  
  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    animation: ${appearanceAnimation} 0.5s ease;
    display: ${props => props._isImageLoaded ? "flex" : "none"};
  }
`;