import { styled } from "goober";

export const QuoteWidgetStyled = styled('div')`
  display: flex;
  flex-direction: row;
  column-gap: 16px;
  padding: 40px 40px;
  box-sizing: border-box;
  height: 100%;
  min-height: 680px;
  
  & > img {
    width: 50%;
    object-fit: cover;
    border-radius: 20px;
  }
`;