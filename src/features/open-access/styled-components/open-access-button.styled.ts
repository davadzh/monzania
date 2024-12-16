import { styled } from "goober";

export const OpenAccessButtonStyled = styled('button')`
  width: 100%;
  background: rgba(33, 195, 177, 1);
  border-radius: 12px;
  height: 56px;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s ease;
  
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  font-weight: 600;
  line-height: 15px;
  letter-spacing: -0.5px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  
  &:disabled {
    opacity: 0.7;
    cursor: default;
  }
  

  &:not(:disabled):hover {
    opacity: 0.8;
  }
`;