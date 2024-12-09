import { styled } from "goober";

export const LandingSectionCardStyled = styled('div')<{_leftMarginRemoved?: boolean, _rightMarginRemoved?: boolean}>`
  display: flex;
  margin: 0 ${props => props._rightMarginRemoved ? "0" : "15px"} 0 ${props => props._leftMarginRemoved ? "0" : "15px"};
  background: #FFFFFF;
  border-radius: 20px;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;