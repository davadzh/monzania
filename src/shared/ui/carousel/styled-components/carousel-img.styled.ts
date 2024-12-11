import { styled } from "goober";
import { Breakpoints } from "@shared/constants/breakpoints.ts";

export const CarouselImgStyled = styled('img')`
  display: flex;
  height: 491px;
  width: 646px;
  border-radius: 20px;
  object-fit: cover;

  @media (max-width: ${Breakpoints.MOBILE}px) {
    width: calc(100% - 58px);
    height: auto;
    max-height: 250px;
    max-width: 350px;
  }
`;