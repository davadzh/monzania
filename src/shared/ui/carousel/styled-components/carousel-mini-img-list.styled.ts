import { styled } from "goober";
import { Breakpoints } from "@shared/constants/breakpoints.ts";

export const CarouselMiniImgListStyled = styled('div')`
  display: flex;
  flex-direction: row;
  column-gap: 8px;

  @media (max-width: ${Breakpoints.MOBILE}px) {
    flex-direction: column;
    row-gap: 8px;
    overflow-y: auto;
    max-height: 250px;
  }
`;