import { LandingSectionStyled } from "@entities/landing/styled-components/landing-section.styled.ts";
import { ReactNode } from "react";
import { LandingSectionHeightTypeEnum } from "@entities/landing";

interface LandingSectionProps {
  children: ReactNode;
  heightType: LandingSectionHeightTypeEnum;
}

export const LandingSection = (props: LandingSectionProps) => {
  const { children, heightType  } = props;

  return (
    <LandingSectionStyled _heightType={heightType}>
      {children}
    </LandingSectionStyled>
  );
};
