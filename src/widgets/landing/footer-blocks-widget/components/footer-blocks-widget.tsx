import { LandingSection } from "@entities/landing/components/landing-section.tsx";
import { LandingSectionCard } from "@entities/landing/components/landing-section-card.tsx";
import { GiftBoxBlock } from "@widgets/landing/footer-blocks-widget/components/gift-box-block.tsx";
import { BearKindnessBlock } from "@widgets/landing/footer-blocks-widget/components/bear-kindness-block.tsx";
import { LandingSectionHeightTypeEnum } from "@entities/landing";
import { useIsMobile } from "@shared/lib/hooks/use-is-mobile.ts";
import {
  FooterBlocksWidgetStyled
} from "@widgets/landing/footer-blocks-widget/styled-components/footer-blocks-widget.styled.ts";
import { ContactsBlockWidget } from "@widgets/landing/footer-blocks-widget/components/contacts-block-widget.tsx";

export const FooterBlocksWidget = () => {
  const { isMobile } = useIsMobile();
  const sectionHeightType = isMobile ? LandingSectionHeightTypeEnum.MAX_CONTENT : LandingSectionHeightTypeEnum.FULL;

  return (
    <LandingSection heightType={sectionHeightType}>
      <FooterBlocksWidgetStyled>
        <div>
          <LandingSectionCard rightMarginRemoved={!isMobile}>
            <GiftBoxBlock/>
          </LandingSectionCard>
          <LandingSectionCard leftMarginRemoved={!isMobile}>
            <BearKindnessBlock/>
          </LandingSectionCard>
        </div>
        <div>
          <LandingSectionCard>
            <ContactsBlockWidget />
          </LandingSectionCard>
        </div>
      </FooterBlocksWidgetStyled>
    </LandingSection>
  );
};
