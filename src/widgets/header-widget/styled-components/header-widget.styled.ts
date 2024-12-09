import { styled } from "goober";

export const HeaderWidgetStyled = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background: none;
  box-sizing: border-box;
  padding: 16px 32px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  & > svg {
    &:last-child {
      margin-left: auto;
    }
  }
`;