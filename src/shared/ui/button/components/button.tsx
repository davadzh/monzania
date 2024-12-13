import { StyledButton } from "@shared/ui/button/styled-components/styled-button.ts";
import { ButtonVariant } from "@shared/ui/button/types/button-variant.ts";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant: ButtonVariant;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button = (props: ButtonProps) => {
  const { children, variant, onClick, disabled } = props;

  return (
    <StyledButton _variant={variant} onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};
