import { styled } from "goober";
import { Breakpoints } from "@shared/constants/breakpoints.ts";

export const FromAuthorWidgetStyled = styled('div')`
  display: flex;
  flex-direction: row;
  column-gap: 16px;
  padding: 40px;
  min-height: calc(100vh - 8px);
  box-sizing: border-box;
  background: rgba(240, 240, 240, 1);

  & > img {
    width: 50%;
    object-fit: cover;
    border-radius: 20px;
  }

  & > div {
    display: flex;
    flex-direction: column;
    width: 50%;
    background: rgba(255, 255, 255, 1);
    border-radius: 20px;
    padding: 40px 40px 12px 40px;
    
    & > p {
      margin: 0;
      font-size: 14px;
      font-weight: 500;
      line-height: 21px;
      text-align: left;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
      color: rgba(0, 0, 0, 0.4);
      
      &:first-child {
        margin-top: 0;
      }

      &:not(:first-child) {
        margin-top: 12px;
      }

      &:last-child {
        margin-bottom: 24px;
      }
    }
    
    & > div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-top: auto;
      padding-top: 8px;
      box-sizing: border-box;
      
      & > span {
        font-size: 14px;
        font-weight: 500;
        line-height: 21px;
        text-align: left;
        text-underline-position: from-font;
        text-decoration-skip-ink: none;
        color: rgba(0, 0, 0, 0.4);
      }
      
      & > img {
        width: 90px;
      }
    }
  }

  @media (max-width: ${Breakpoints.MOBILE}px) {
    flex-direction: column;
    row-gap: 8px;
    padding: 10px;

    & > img {
      width: 100%;
      object-fit: contain;
    }

    & > div {
      width: auto;
      padding: 16px 10px 24px 10px;
      
      & > div {
        padding-top: 16px;
      }
    }
  }
`;