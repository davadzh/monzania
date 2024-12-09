import { StyledButton } from "@shared/ui/button/styled-components/styled-button.ts";
import { ButtonVariant } from "@shared/ui/button/types/button-variant.ts";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant: ButtonVariant;
}

export const Button = (props: ButtonProps) => {
  const { children, variant } = props;

  return (
    <StyledButton _variant={variant}>
      {children}
    </StyledButton>
  );
};
