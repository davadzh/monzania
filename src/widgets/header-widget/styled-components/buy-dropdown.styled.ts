import { styled } from "goober";
import { forwardRef } from "react";

export const BuyDropdownStyled = styled('div', forwardRef)`
  position: absolute;
  top: 23px;
  left: 0;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  padding: 16px;
  box-sizing: border-box;
  border-radius: 13px;
  
  & > button {
    background: none;
    border: 0;
    outline: none;
    padding: 0;
    font-size: 12px;
    font-weight: 500;
    line-height: 12px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    transition: opacity 0.2s ease;
    color: rgba(0, 0, 0, 1);
    white-space: nowrap;
    cursor: pointer;
    
    &:disabled {
      color: rgba(0, 0, 0, 0.35);
      cursor: default;
    }
    
    &:not(:disabled):hover {
      color: rgba(33, 195, 177, 1);
    }
  }
`;