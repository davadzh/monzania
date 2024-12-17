import { keyframes, styled } from "goober";
import { Breakpoints } from "@shared/constants/breakpoints.ts";

const appearance = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const AnalysisVideoStyled = styled('div')<{_loaded: boolean}>`
  height: 680px;
  max-width: 1000px;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  width: 100%;
  background: #FAFAFA;
  
  & > video {
    position: absolute;
    height: 100%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    object-fit: cover;
    border-radius: 20px;
    display: ${({ _loaded }) => _loaded ? 'block' : 'none'};
    animation: ${appearance} 0.3s ease;
  }
  
  @media (max-width: ${Breakpoints.MOBILE}px) {
    height: 560px;
    border-radius: 16px;
    margin: 0 10px;
    max-width: calc(100vw - 20px);

    & > video {
      border-radius: 16px;
    }
  }
`;