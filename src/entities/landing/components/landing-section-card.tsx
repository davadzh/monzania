import { LandingSectionCardStyled } from "@entities/landing/styled-components/landing-section-card.styled.ts";
import { ReactNode } from "react";

interface LandingSectionCardProps {
  children: ReactNode;
  leftMarginRemoved?: boolean;
  rightMarginRemoved?: boolean;
}

export const LandingSectionCard = (props: LandingSectionCardProps) => {
  const { children, leftMarginRemoved, rightMarginRemoved } = props;

  return (
    <LandingSectionCardStyled _leftMarginRemoved={leftMarginRemoved} _rightMarginRemoved={rightMarginRemoved}>
      {children}
    </LandingSectionCardStyled>
  );
};
