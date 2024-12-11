import { styled } from "goober";

export const ExpandingMenuItemStyled = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 4px;
  cursor: not-allowed;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }
  
  & > button {
    padding: 0;
    background: none;
    outline: none;
    border: none;
    font-size: 12px;
    font-weight: 500;
    line-height: 12px;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: rgba(255, 255, 255, 1);
    text-align: center;
    cursor: not-allowed;
  }
`;