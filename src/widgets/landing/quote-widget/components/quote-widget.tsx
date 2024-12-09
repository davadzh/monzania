import { QuoteWidgetStyled } from "@widgets/landing/quote-widget/styled-components/quote-widget.styled.ts";
import Photo from "/images/consultant-photo.png";
import { LandingSection } from "@entities/landing/components/landing-section.tsx";
import { LandingSectionCard } from "@entities/landing/components/landing-section-card.tsx";
import { QuoteInfo } from "@widgets/landing/quote-widget/components/quote-info.tsx";
import { LandingSectionHeightTypeEnum } from "@entities/landing";

export const QuoteWidget = () => {
  return (
    <LandingSection heightType={LandingSectionHeightTypeEnum.ALMOST_FULL}>
      <LandingSectionCard>
        <QuoteWidgetStyled>
          <QuoteInfo/>
          <img src={Photo} alt={'photo'}/>
        </QuoteWidgetStyled>
      </LandingSectionCard>
    </LandingSection>
  );
};
