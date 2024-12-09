import { styled } from "goober";

export const FooterLinksStyled = styled('div')`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: row;
  column-gap: 8px;
  
  & > a {
    color: rgba(255, 255, 255, 0.6);
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: -0.1px;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    text-decoration: none;
    cursor: not-allowed;
    transition: 0.2s ease;
    
    &:hover {
      opacity: 0.7;
    }
  }
`;