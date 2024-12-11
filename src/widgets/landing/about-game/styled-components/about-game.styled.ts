import { styled } from "goober";
import { Breakpoints } from "@shared/constants/breakpoints.ts";

export const AboutGameStyled = styled('div')`
  display: flex;
  flex-direction: row;
  column-gap: 64px;
  justify-content: center;
  align-items: center;
  //padding: 40px 77px 0 40px;
  padding: 24px 77px 24px 40px;
  height: max-content;

  @media (max-width: ${Breakpoints.MOBILE}px) {
    padding: 10px 10px 25px 10px;
    flex-direction: column;
    row-gap: 24px;
  }
`;