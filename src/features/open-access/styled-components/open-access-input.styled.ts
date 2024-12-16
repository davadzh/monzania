import { styled } from "goober";

export const OpenAccessInputStyled = styled('input')<{_hasError: boolean}>`
  height: 48px;
  width: 100%;
  padding: 17px 16px;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 1);
  border-radius: 10px;
  border: ${props => props._hasError ? "1px solid rgba(228, 13, 13, 1)" : "none"};
  outline: none;
  
  font-size: 12px;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: -0.5px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: rgba(0, 0, 0, 1);
`;