import { LandingSection } from "@entities/landing/components/landing-section.tsx";
import { ShowcaseTitleStyled } from "@widgets/landing/showcase-widget/styled-components/showcase-title.styled.ts";
import { ShowcaseWidgetStyled } from "@widgets/landing/showcase-widget/styled-components/showcase-widget.styled.ts";
import { ShowcaseFooter } from "@widgets/landing/showcase-widget/components/showcase-footer.tsx";
import { ShowcaseBuyAndScroll } from "@widgets/landing/showcase-widget/components/showcase-buy-and-scroll.tsx";
import { LandingSectionHeightTypeEnum } from "@entities/landing";
import {
  ShowcaseBackgroundShadowStyled
} from "@widgets/landing/showcase-widget/styled-components/showcase-background-shadow.styled.ts";
import { useIsMobile } from "@shared/lib/hooks/use-is-mobile.ts";
import {
  ShowcaseBackgroundStyled
} from "@widgets/landing/showcase-widget/styled-components/showcase-background.styled.ts";

import BackgroundImageSrc from "/images/showcase-background.jpg";
import { useState } from "preact/hooks";

export const ShowcaseWidget = () => {
  const { isMobile } = useIsMobile();

  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

  const onImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <LandingSection heightType={LandingSectionHeightTypeEnum.FULL}>
      <ShowcaseWidgetStyled>
        <ShowcaseBackgroundStyled _isImageLoaded={isImageLoaded}>
          <img src={BackgroundImageSrc} alt={'Монзания'} onLoad={onImageLoad} />
        </ShowcaseBackgroundStyled>
        <ShowcaseBackgroundShadowStyled/>

        <ShowcaseTitleStyled>
          <div>Настольная карточная игра</div>
          <div>Монзания</div>
        </ShowcaseTitleStyled>

        <ShowcaseBuyAndScroll/>
        {!isMobile && <ShowcaseFooter/>}
      </ShowcaseWidgetStyled>
    </LandingSection>
  );
};
