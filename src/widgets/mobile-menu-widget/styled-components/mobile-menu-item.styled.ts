import { styled } from "goober";

export const MobileMenuItemStyled = styled('div')`
  font-size: 22px;
  font-weight: 500;
  line-height: 22px;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: rgba(0, 0, 0, 1);
  text-align: center;
  transition: opacity 0.2s ease;
  
  &:hover {
    opacity: 0.7;
  }
`;