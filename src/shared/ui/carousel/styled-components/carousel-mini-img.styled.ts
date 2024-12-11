import { styled } from "goober";
import { Breakpoints } from "@shared/constants/breakpoints.ts";

export const CarouselMiniImgStyled = styled('img')<{_isActive: boolean}>`
  display: flex;
  height: 101px;
  width: 101px;
  border-radius: 8px;
  object-fit: cover;
  opacity: ${props => props._isActive ? "1" : "0.5"};
  cursor: ${props => props._isActive ? "default" : "pointer"};
  transition: opacity 0.2s ease;
  
  &:hover {
    opacity: ${props => props._isActive ? "1" : "0.7"};
  }

  @media (max-width: ${Breakpoints.MOBILE}px) {
    height: 50px;
    min-height: 50px;
    width: 50px;
    min-width: 50px;
  }
`;