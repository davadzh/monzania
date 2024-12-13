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