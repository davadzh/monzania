import { styled } from "goober";
import { Breakpoints } from "@shared/constants/breakpoints.ts";

export const CarouselStyled = styled('div')`
  display: flex;
  flex-direction: column;
  row-gap: 8px;

  @media (max-width: ${Breakpoints.MOBILE}px) {
    flex-direction: row;
    column-gap: 8px;
  }
`;