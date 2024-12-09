import { styled } from "goober";
import { ButtonVariant } from "@shared/ui/button/types/button-variant.ts";

export const StyledButton = styled('button')<{_variant: ButtonVariant}>`
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
  color: ${ props => props._variant === 'light' ? "rgba(0, 0, 0, 1)" : "rgba(255, 255, 255, 1)"};
  background: ${ props => props._variant === 'light' ? "rgba(255, 255, 255, 1)" : "rgba(0, 0, 0, 1)"};
  border-radius: 1000px;
  width: max-content;
  transition: opacity 0.2s ease;
  
  &:hover {
    opacity: 0.7;
  }
`;