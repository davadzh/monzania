import { styled } from "goober";

export const BearKindnessBlockStyled = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(232, 249, 244, 1);
  width: 100%;
  height: 100%;
  
  & > svg {
    width: 245px;
    height: 245px;
  }
  
  & > div {
    &:nth-child(2) {
      margin-top: 35px;
      font-size: 37px;
      font-weight: 600;
      line-height: 43px;
      letter-spacing: -0.5px;
      text-align: center;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
      color: rgba(0, 0, 0, 1);
    }
    
    &:nth-child(3) {
      margin-top: 8px;
      margin-bottom: 32px;
      font-size: 18px;
      font-weight: 500;
      line-height: 22px;
      text-align: center;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
      color: rgba(0, 0, 0, 0.6);
    }
  }
`;