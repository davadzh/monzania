import { styled } from "goober";
import { Breakpoints } from "@shared/constants/breakpoints.ts";

export const FooterBlocksWidgetStyled = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  flex-grow: 1;
  
  & > div {
    display: flex;
    flex-direction: row;
    column-gap: 8px;
    
    &:first-child {
      flex-grow: 1;
    }
  }

  @media (max-width: ${Breakpoints.MOBILE}px) {
    & > div {
      display: flex;
      flex-direction: column;
    }
  }
`;