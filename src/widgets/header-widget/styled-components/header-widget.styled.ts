import { styled } from "goober";
import { Breakpoints } from "@shared/constants/breakpoints.ts";

export const HeaderWidgetStyled = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: none;
  box-sizing: border-box;
  padding: 16px 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  & > span {
    margin-left: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 8px;
    
    & > svg {
      transition: opacity 0.2s ease;
      cursor: pointer;

      &:hover {
        opacity: 0.7;
      }
    }
  }

  @media (max-width: ${Breakpoints.MOBILE}px) {
    padding: 10px;

    & > svg {
      &:first-child {
        width: 28px;
        height: 28px;
      }
    }
  }
`;