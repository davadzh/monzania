import { styled } from "goober";

export const LanguageSelectorStyled = styled('button')`
  display: flex;
  flex-direction: row;
  column-gap: 4px;
  align-items: center;
  padding: 0;
  background: none;
  border: 0;
  outline: 0;
  cursor: not-allowed;
  transition: opacity 0.2s ease;
  
  & > div {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: -0.1px;
    text-align: right;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: rgba(255, 255, 255, 0.6);
  }
  
  &:hover {
    opacity: 0.7;
  }
`;