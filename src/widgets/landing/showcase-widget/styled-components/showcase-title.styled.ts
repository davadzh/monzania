import { styled } from "goober";
import { Breakpoints } from "@shared/constants/breakpoints.ts";

export const ShowcaseTitleStyled = styled('div')`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  margin-top: 128px;
  justify-content: center;
  width: 100%;
  position: relative;

  & > div {
    &:nth-child(1) {
      font-size: 16px;
      font-weight: 600;
      line-height: 19px;
      letter-spacing: -0.5px;
      text-align: center;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
      color: rgba(255, 255, 255, 0.6);
    }

    &:nth-child(2) {
      font-size: 37px;
      font-weight: 600;
      line-height: 43px;
      letter-spacing: -0.5px;
      text-align: center;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
      color: rgba(255, 255, 255, 1);
    }
  }

  @media (max-width: ${Breakpoints.MOBILE}px) {
    margin-top: 90px;

    & > div {
      &:nth-child(1) {
        font-size: 14px;
        line-height: 18px;
      }

      &:nth-child(2) {
        font-size: 32px;
        line-height: 37px;
      }
    }
  }
`;