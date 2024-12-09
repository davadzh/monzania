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
`;