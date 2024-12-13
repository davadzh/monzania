import { keyframes, styled } from "goober";
import { forwardRef } from "react";

const appearance = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const MiniCartWidgetStyled = styled('div', forwardRef)`
  position: absolute;
  right: 24px;
  top: 56px;
  background: rgba(255, 255, 255, 1);
  border-radius: 13px;
  padding: 16px 16px 24px 16px;
  box-sizing: border-box;
  width: 100%;
  max-width: 318px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${appearance} 0.2s ease;
  z-index: 10000;

  & > span {
    & > svg {
      position: absolute;
      right: 16px;
      top: 16px;
      cursor: pointer;
    }
  }

  & > svg {
    width: 56px;
    height: 56px;
    margin: 40px 0 16px 0;
  }

  & > h3 {
    margin: 0;
    width: 100%;
    font-size: 20px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: -0.5px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: rgba(0, 0, 0, 1);
  }

  & > div {
    font-size: 12px;
    font-weight: 500;
    line-height: 12px;
    letter-spacing: -0.5px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: rgba(102, 102, 102, 1);
  }
`;