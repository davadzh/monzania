import { QuoteWidgetStyled } from "@widgets/landing/quote-widget/styled-components/quote-widget.styled.ts";
import Photo from "/images/consultant-photo.png";
import { LandingSection } from "@entities/landing/components/landing-section.tsx";
import { LandingSectionCard } from "@entities/landing/components/landing-section-card.tsx";
import { QuoteInfo } from "@widgets/landing/quote-widget/components/quote-info.tsx";
import { LandingSectionHeightTypeEnum } from "@entities/landing";
import { useIsMobile } from "@shared/lib/hooks/use-is-mobile.ts";

export const QuoteWidget = () => {
  const {isMobile} = useIsMobile();
  const sectionHeightType = isMobile ? LandingSectionHeightTypeEnum.MAX_CONTENT : LandingSectionHeightTypeEnum.FULL;

  return (
    <LandingSection heightType={sectionHeightType}>
      <LandingSectionCard>
        <QuoteWidgetStyled>
          <QuoteInfo/>
          <img src={Photo} alt={'photo'}/>
        </QuoteWidgetStyled>
      </LandingSectionCard>
    </LandingSection>
  );
};
