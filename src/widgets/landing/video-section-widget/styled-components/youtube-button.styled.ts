import { styled } from "goober";
import { Breakpoints } from "@shared/constants/breakpoints.ts";

export const YoutubeButtonStyled = styled('button')`
  cursor: pointer;
  border: none;
  outline: none;
  
  position: absolute;
  right: 40px;
  bottom: 40px;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 10px;
  
  background: rgba(0, 0, 0, 1);
  padding: 14px 20px;
  box-sizing: border-box;
  border-radius: 1000px;

  font-size: 14px;
  font-weight: 600;
  line-height: 15px;
  letter-spacing: -0.5px;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: rgba(255, 255, 255, 1);
  transition: opacity 0.2s ease;
  white-space: nowrap;
  
  &:hover {
    opacity: 0.8;
  }
  
  @media (max-width: ${Breakpoints.MOBILE}px) {
    right: 50%;
    transform: translateX(50%);
  }
`;