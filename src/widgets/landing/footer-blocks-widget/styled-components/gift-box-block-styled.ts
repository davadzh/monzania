import { styled } from "goober";
import { Breakpoints } from "@shared/constants/breakpoints.ts";

export const GiftBoxBlockStyled = styled('div')`
  position: relative;
  display: flex;
  flex-direction: column;
  background-size: contain;
  width: 100%;
  height: 100%;
  
  & > span {
    z-index: 1;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(360deg, rgba(105, 141, 155, 0) 68.31%, #698D9B 90.56%);
  }

  & > div {
    padding: 40px;
    font-size: 37px;
    font-weight: 600;
    line-height: 43px;
    letter-spacing: -0.5px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: rgba(255, 255, 255, 1);
    z-index: 2;
    text-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }

  & > img {
    object-fit: contain;
    width: 100%;
    position: absolute;
    bottom: 0;
  }
  
  & > button {
    position: absolute;
    left: 40px;
    bottom: 40px;
    z-index: 2;
  }

  @media (max-width: ${Breakpoints.MOBILE}px) {
    min-height: 320px;
    
    & > div {
      padding: 16px 16px 0 16px;
      font-size: 24px;
      line-height: 26px;
    }

    & > button {
      position: absolute;
      left: 16px;
      bottom: 16px;
    }
  }
`;