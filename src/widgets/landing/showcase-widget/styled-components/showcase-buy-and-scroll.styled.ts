import { styled } from "goober";

export const ShowcaseBuyAndScrollStyled = styled('div')`
  position: absolute;
  z-index: 2;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 40px;

  & > button {
    border: none;
    outline: none;
    //cursor: pointer;
    cursor: not-allowed;
    padding: 14px 20px;
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    letter-spacing: -0.5px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: rgba(0, 0, 0, 1);
    background: rgba(255, 255, 255, 1);
    border-radius: 1000px;
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 8px;

    & > svg {
      width: 24px;
      height: 24px;
    }

    & > span {
      font-size: 12px;
      font-weight: 500;
      line-height: 14px;
      letter-spacing: -0.5px;
      text-align: center;
      text-underline-position: from-font;
      text-decoration-skip-ink: none;
      color: rgba(255, 255, 255, 0.6);
    }
  }
`;