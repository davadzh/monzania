import { styled } from "goober";
import { Breakpoints } from "@shared/constants/breakpoints.ts";

export const AnalyticsModalStyled = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h2 {
    font-size: 37px;
    font-weight: 600;
    line-height: 43px;
    letter-spacing: -0.5px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: rgba(0, 0, 0, 1);
    margin: 108px 0 40px 0;
  }
  
  @media (max-width: ${Breakpoints.MOBILE}px) {
    & > h2 {
      font-size: 27px;
      line-height: 28px;
      margin: 60px 0 32px 0;
    }
  }
`;