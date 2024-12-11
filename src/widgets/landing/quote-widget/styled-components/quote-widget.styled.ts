import { styled } from "goober";
import { Breakpoints } from "@shared/constants/breakpoints.ts";

export const QuoteWidgetStyled = styled('div')`
  display: flex;
  flex-direction: row;
  column-gap: 16px;
  padding: 40px 40px;
  box-sizing: border-box;
  height: 100%;
  min-height: calc(100vh - 8px);
  
  & > img {
    width: 50%;
    object-fit: cover;
    border-radius: 20px;
  }

  @media (max-width: ${Breakpoints.MOBILE}px) {
    flex-direction: column-reverse;
    row-gap: 8px;
    padding: 10px;
    height: auto;
    min-height: 0;

    & > img {
      width: 100%;
      object-fit: cover;
      border-radius: 20px;
    }
  }
`;