import { LandingSection } from "@entities/landing/components/landing-section.tsx";
import { ShowcaseTitleStyled } from "@widgets/landing/showcase-widget/styled-components/showcase-title.styled.ts";
import { ShowcaseWidgetStyled } from "@widgets/landing/showcase-widget/styled-components/showcase-widget.styled.ts";
import { ShowcaseBackgroundShadows } from "@widgets/landing/showcase-widget/components/showcase-background-shadows.tsx";
import { ShowcaseFooter } from "@widgets/landing/showcase-widget/components/showcase-footer.tsx";
import { ShowcaseBuyAndScroll } from "@widgets/landing/showcase-widget/components/showcase-buy-and-scroll.tsx";
import { LandingSectionHeightTypeEnum } from "@entities/landing";

export const ShowcaseWidget = () => {
  return (
    <LandingSection heightType={LandingSectionHeightTypeEnum.FULL}>
      <ShowcaseWidgetStyled>
        <ShowcaseBackgroundShadows />

        <ShowcaseTitleStyled>
          <div>Настольная карточная игра</div>
          <div>Монзания</div>
        </ShowcaseTitleStyled>

        <ShowcaseBuyAndScroll />
        <ShowcaseFooter />
      </ShowcaseWidgetStyled>
    </LandingSection>
  );
};
