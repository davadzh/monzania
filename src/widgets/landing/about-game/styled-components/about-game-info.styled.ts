import { styled } from "goober";

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
      margin-bottom: 32px;
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
    margin-top: ;
  }
`;