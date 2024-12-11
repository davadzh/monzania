import { Breakpoints } from "@shared/constants/breakpoints";
import { styled } from "goober";

export const FooterWidgetStyled = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 25px 0;
  margin: 48px 16px 0 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  
  & > span {
    color: rgba(255, 255, 255, 0.6);
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: -0.1px;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }

  @media (max-width: ${Breakpoints.MOBILE}px) {
    position: relative;
    margin: 16px 10px 15px 10px;
    align-items: flex-start;
    
    & > span {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      text-align: center;
    }
  }
`;