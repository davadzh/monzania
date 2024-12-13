import { LandingSection } from "@entities/landing/components/landing-section.tsx";
import { LandingSectionCard } from "@entities/landing/components/landing-section-card.tsx";
import {
  ClosedAccessWidgetStyled
} from "@widgets/landing/closed-access-widget/styled-components/closed-access-widget.styled.ts";
import { Button } from "@shared/ui/button";

import GameCardsImageSrc from "/images/game-cards.png";
import GameCardsMobileImageSrc from "/images/game-cards-mobile.png";
import { LandingSectionHeightTypeEnum } from "@entities/landing";
import { useIsMobile } from "@shared/lib/hooks/use-is-mobile.ts";
import { useAppContext } from "@entities/app/contexts/app-context.tsx";

export const ClosedAccessWidget = () => {
  const {setIsSoonModalOpened} = useAppContext();

  const {isMobile} = useIsMobile();
  const sectionHeightType = isMobile ? LandingSectionHeightTypeEnum.MAX_CONTENT : LandingSectionHeightTypeEnum.FULL;
  const imageSrc = isMobile ? GameCardsMobileImageSrc : GameCardsImageSrc;

  return (
    <LandingSection heightType={sectionHeightType}>
      <LandingSectionCard>
        <ClosedAccessWidgetStyled>
          <div>Для покупателей</div>
          <div>Закрытый<br/>доступ</div>

          <Button variant={'dark'} onClick={() => setIsSoonModalOpened(true)}>Войти</Button>

          <img src={imageSrc} alt="Игровые карточки"/>
        </ClosedAccessWidgetStyled>
      </LandingSectionCard>
    </LandingSection>
  );
};
