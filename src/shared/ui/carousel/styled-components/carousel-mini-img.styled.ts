import { styled } from "goober";

export const CarouselMiniImgStyled = styled('img')<{_isActive: boolean}>`
  display: flex;
  height: 93px;
  width: 93px;
  border-radius: 8px;
  object-fit: cover;
  opacity: ${props => props._isActive ? "1" : "0.5"};
  cursor: ${props => props._isActive ? "default" : "pointer"};
  transition: opacity 0.2s ease;
  
  &:hover {
    opacity: ${props => props._isActive ? "1" : "0.7"};
  }
`;