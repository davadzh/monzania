import { styled } from "goober";
import { Breakpoints } from "@shared/constants/breakpoints.ts";

export const WelcomeModalStyled = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 76px 122px 32px 122px;
  background: rgba(240, 240, 240, 1);
  border-radius: 20px;
  
  & > svg {
    width: 28px;
    height: 28px;
  }
  
  & > h3 {
    margin: 8px 0 0 0;
    font-size: 24px;
    font-weight: 600;
    line-height: 26px;
    letter-spacing: -0.5px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: rgba(0, 0, 0, 1);
  }
  
  & > p {
    margin: 12px 0 24px 0;
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: rgba(0, 0, 0, 0.4);
  }
  
  & > h6 {
    font-size: 12px;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: -0.5px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: rgba(0, 0, 0, 0.4);
    margin: 80px 0 0 0;
    
    & > a {
      text-decoration: underline;
      color: rgba(33, 195, 177, 1);
    }
  }
  
  @media (max-width: ${Breakpoints.MOBILE}px) {
    padding: 40px 16px 24px 16px;
    
    & > svg {
      width: 24px;
      height: 24px;
    }

    & > h3 {
      margin: 12px 0 0 0;
      font-size: 17px;
      line-height: 19px;
    }

    & > p {
      margin: 16px 0 24px 0;
      font-size: 14px;
      line-height: 17px;
    }

    & > h6 {
      font-size: 12px;
      line-height: 13px;
      margin: 64px 0 0 0;
    }
  }
`;