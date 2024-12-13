import { styled } from "goober";

export const ModalCloseButtonStyled = styled('button')`
  position: absolute;
  top: 16px;
  right: 16px;
  background: transparent;
  border: none;
  font-size: 18px;
  cursor: pointer;
  
  & > svg {
    width: 20px;
    height: 20px;
  }
`;