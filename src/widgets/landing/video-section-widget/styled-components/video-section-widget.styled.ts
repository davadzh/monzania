import { styled } from "goober";

export const VideoSectionWidgetStyled = styled('div')`
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  position: relative;
  
  & > video {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;