import { LandingSection } from "@entities/landing/components/landing-section.tsx";
import { LandingSectionCard } from "@entities/landing/components/landing-section-card.tsx";
import { GiftBoxBlock } from "@widgets/landing/footer-blocks-widget/components/gift-box-block.tsx";
import { BearKindnessBlock } from "@widgets/landing/footer-blocks-widget/components/bear-kindness-block.tsx";
import { LandingSectionHeightTypeEnum } from "@entities/landing";

export const FooterBlocksWidget = () => {
  return (
    <LandingSection heightType={LandingSectionHeightTypeEnum.ALMOST_FULL}>
      <LandingSectionCard rightMarginRemoved={true}>
        <GiftBoxBlock/>
      </LandingSectionCard>
      <LandingSectionCard leftMarginRemoved={true}>
        <BearKindnessBlock/>
      </LandingSectionCard>
    </LandingSection>
  );
};
