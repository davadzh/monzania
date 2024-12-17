import { styled } from "goober";
import { Breakpoints } from "@shared/constants/breakpoints.ts";

export const AnalysisTextStyled = styled('div')`
  padding: 56px 0 248px 0;
  box-sizing: border-box;
  width: 700px;

  & > h3 {
    font-size: 37px;
    font-weight: 600;
    line-height: 43px;
    letter-spacing: -0.5px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: rgba(0, 0, 0, 1);
    margin-top: 56px;
    margin-bottom: 16px;
  }

  & > h4 {
    margin: 24px 0 16px 0;
    font-size: 20px;
    font-weight: 600;
    line-height: 26px;
    letter-spacing: -0.5px;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: rgba(0, 0, 0, 1);
  }

  & > p {
    margin: 0 !important;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: rgba(0, 0, 0, 0.6);
    max-width: 700px;
  }

  & > img {
    width: 275px;
    margin-top: 48px;
  }

  & > ul {
    margin: 24px 0 16px 0;
    padding: 0;
    list-style-type: disc;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;

    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;

    & > li {
      margin-left: 20px;
      color: rgba(0, 0, 0, 1);
    }
  }

  @media (max-width: ${Breakpoints.MOBILE}px) {
    padding: 60px 26px 128px 26px;
    width: 100%;

    & > h2 {
      font-size: 27px;
      line-height: 28px;
      margin: 0 0 32px 0;
    }

    & > h3 {
      font-size: 27px;
      line-height: 28px;
      margin-top: 48px;
      margin-bottom: 16px;
    }

    & > h4 {
      margin: 24px 0 16px 0;
      font-size: 17px;
      line-height: 22px;
    }

    & > img {
      margin-top: 32px;
    }
  }
`;