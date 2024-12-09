import { LandingSection } from "@entities/landing/components/landing-section.tsx";
import { LandingSectionCard } from "@entities/landing/components/landing-section-card.tsx";
import { LandingSectionHeightTypeEnum } from "@entities/landing";

export const FromAuthorWidget = () => {
  return (
    <LandingSection heightType={LandingSectionHeightTypeEnum.ALMOST_FULL}>
      <LandingSectionCard>
        From author
      </LandingSectionCard>
    </LandingSection>
  );
};
