import { styled } from "goober";

export const AnalyticsParagraphGroupStyled = styled('div')<{ _gap?: number, _mt?: number, _mb?: number }>`
  display: flex;
  flex-direction: column;
  row-gap: ${props => props._gap ?? 0}px;
  margin-top: ${props => props._mt ?? 0}px;;
  margin-bottom: ${props => props._mb ?? 0}px;;

  & > p {
    margin: 0 !important;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: rgba(0, 0, 0, 0.6);
  }

  & > span {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: rgba(0, 0, 0, 1);
  }
`;