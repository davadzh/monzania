import { styled } from "goober";
import { Breakpoints } from "@shared/constants/breakpoints.ts";

export const LandingSectionCardStyled = styled('div')<{_leftMarginRemoved?: boolean, _rightMarginRemoved?: boolean}>`
  display: flex;
  box-sizing: border-box;
  margin: 4px ${props => props._rightMarginRemoved ? "0" : "15px"} 4px ${props => props._leftMarginRemoved ? "0" : "15px"};
  background: #FFFFFF;
  border-radius: 20px;
  width: 100%;
  max-width: calc(100vw - 30px);
  justify-content: center;
  align-items: center;
  overflow: hidden;
  flex-grow: 1;

  @media (max-width: ${Breakpoints.MOBILE}px) {
    max-width: calc(100vw - 20px);
    margin: 4px ${props => props._rightMarginRemoved ? "0" : "10px"} 4px ${props => props._leftMarginRemoved ? "0" : "10px"};
  }
`;