import { styled } from "goober";
import { Breakpoints } from "@shared/constants/breakpoints.ts";

export const SoonModalStyled = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 40px;
  box-sizing: border-box;
  min-width: 780px;
  align-items: center;
  
  & > h3 {
    width: 100%;
    font-size: 40px;
    font-weight: 600;
    line-height: 42px;
    letter-spacing: -0.5px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: rgba(0, 0, 0, 1);
    margin: 0;
  }
  
  & > svg {
    margin-top: 72px;
    margin-bottom: 40px;
  }
  
  & > div {
    font-size: 18px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: -0.5px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: rgba(102, 102, 102, 1);
  }
  
  @media (max-width: ${Breakpoints.MOBILE}px) {
    min-width: 0;

    & > h3 {
      font-size: 24px;
    }

    & > svg {
      margin-top: 40px;
      margin-bottom: 40px;
    }

    & > div {
      font-size: 14px;
    }
  }
`;