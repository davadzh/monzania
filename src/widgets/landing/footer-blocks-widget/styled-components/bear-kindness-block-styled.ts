import { Breakpoints } from "@shared/constants/breakpoints";
import { styled } from "goober";

export const BearKindnessBlockStyled = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(232, 249, 244, 1);
  width: 100%;
  height: 100%;
  padding: 24px 0;
  
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

  @media (max-width: ${Breakpoints.MOBILE}px) {
    padding: 57px 10px 24px 10px;
    
    & > svg {
      width: 98px;
      height: 98px;
    }

    & > div {
      &:nth-child(2) {
        margin-top: 18px;
        font-size: 14px;
        font-weight: 500;
        line-height: 16px;
        color: rgba(0, 0, 0, 0.6);
      }

      &:nth-child(3) {
        margin-top: 8px;
        margin-bottom: 24px;
        font-size: 32px;
        font-weight: 600;
        line-height: 32px;
        color: rgba(0, 0, 0, 1);
      }
    }
  }
`;