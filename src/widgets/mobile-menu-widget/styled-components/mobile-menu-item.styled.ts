import { styled } from "goober";

export const MobileMenuItemStyled = styled('button')`
  background: none;
  outline: none;
  border: 0;
  font-size: 22px;
  font-weight: 500;
  line-height: 22px;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: rgba(0, 0, 0, 1);
  text-align: center;
  transition: opacity 0.2s ease;
  
  &:disabled {
    color: rgba(0, 0, 0, 0.3);
  }

  &:not(:disabled):hover {
    color: rgba(33, 195, 177, 1);
  }
`;