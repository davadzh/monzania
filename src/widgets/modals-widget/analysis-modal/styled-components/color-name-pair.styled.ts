import { styled } from "goober";

export const ColorNamePairStyled = styled('div')<{_color: string}>`
  display: flex;
  flex-direction: row;
  column-gap: 8px;
  align-items: center;
  
  & > span {
    width: 16px;
    height: 16px;
    background: ${props => props._color};
    border-radius: 2px;
  }
  
  & > div {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: rgba(0, 0, 0, 0.6);
    max-width: 700px;
  }
`;