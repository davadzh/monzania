import { styled } from "goober";

export const HeaderPagesStyled = styled('div')`
  margin-left: 72px;
  display: flex;
  flex-direction: row;
  column-gap: 16px;
  align-items: center;
  
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
    cursor: pointer;
    transition: opacity 0.2s ease;
    
    &:hover {
      opacity: 0.7;
    }
  }
`;