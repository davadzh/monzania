import { styled } from "goober";
import { Breakpoints } from "@shared/constants/breakpoints.ts";

export const ContactButtonStyled = styled('button')`
  display: flex;
  flex-direction: row;
  background: rgba(0, 0, 0, 1);
  padding: 6px 0;
  border-radius: 1000px;
  border: none;
  align-items: center;
  cursor: not-allowed;
  transition: opacity 0.2s ease;
  
  & > div {
    flex-grow: 1;
    padding: 0 24px;
    font-size: 16px;
    font-weight: 600;
    line-height: 17px;
    letter-spacing: -0.5px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: rgba(255, 255, 255, 1);
  }
  
  & > span {
    width: 52px;
    height: 52px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 1);
    margin-left: auto;
    margin-right: 6px;
    border-radius: 1000px;
  }
  
  &:hover {
    opacity: 0.7;
  }

  @media (max-width: ${Breakpoints.MOBILE}px) {
    padding: 2px 0;
    width: 100%;

    & > div {
      flex-grow: 0;
      padding: 0 16px;
    }
    
    & > span {
      width: 39px;
      height: 39px;
      margin-right: 2px;
      border-radius: 1000px;
    }
  }
`;