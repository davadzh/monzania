import { styled } from "goober";

export const QuoteInfoStyled = styled('div')`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  background: rgba(232, 249, 244, 1);
  border-radius: 20px;
  padding: 72px 40px 40px 40px;
  
  & > div {
    &:nth-child(1) {
      height: 104px;
      width: 98px;
      overflow: hidden;
      font-family: "Mukta Malar", sans-serif;
      font-size: 300px;
      font-weight: 500;
      line-height: 210px;
      text-align: left;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
      color: rgba(5, 175, 250, 1);
    }
    
    &:nth-child(2) {
      margin-top: 24px;
      font-size: 18px;
      line-height: 24px;
      font-weight: 500;
      text-align: left;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
      color: rgba(0, 0, 0, 1);
    }
    
    &:nth-child(3) {
      margin-top: auto;
      font-size: 24px;
      font-weight: 700;
      line-height: 24px;
      text-align: left;
      text-decoration-line: underline;
      text-decoration-style: solid;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
      color: rgba(0, 0, 0, 1);
    }
    
    &:nth-child(4) {
      margin-top: 8px;
      font-size: 16px;
      font-weight: 400;
      line-height: 21px;
      text-align: left;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
      color: rgba(0, 0, 0, 0.6);
    }
  }
`;