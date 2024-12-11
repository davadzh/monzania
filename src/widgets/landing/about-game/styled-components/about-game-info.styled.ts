import { styled } from "goober";
import { Breakpoints } from "@shared/constants/breakpoints.ts";

export const AboutGameInfoStyled = styled('div')`
  display: flex;
  flex-direction: column;
  max-width: 570px;

  & > div {
    &:nth-child(1) {
      margin-top: 24px;
      font-size: 12px;
      font-weight: 600;
      line-height: 12px;
      letter-spacing: -0.5px;
      text-align: left;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
      color: rgba(0, 0, 0, 0.6);
    }

    &:nth-child(2) {
      margin-top: 8px;
      font-size: 37px;
      font-weight: 600;
      line-height: 43px;
      letter-spacing: -0.5px;
      text-align: left;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
      color: rgba(0, 0, 0, 1);
    }

    &:nth-child(3) {
      margin-top: 24px;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      text-align: left;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
      color: rgba(0, 0, 0, 0.4);
    }
  }
  
  & > button {
    margin-top: 32px;
  }

  @media (max-width: ${Breakpoints.MOBILE}px) {
    max-width: none;

    & > div {
      &:nth-child(1) {
        margin-top: 0;
        font-size: 10px;
        line-height: 11px;
      }

      &:nth-child(2) {
        margin-top: 8px;
        font-size: 24px;
        line-height: 26px;
      }

      &:nth-child(3) {
        margin-top: 12px;
        font-size: 14px;
        line-height: 21px;
      }
    }

    & > button {
      margin-top: 24px;
    }
  }
`;