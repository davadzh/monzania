import { LandingSection } from "@entities/landing/components/landing-section.tsx";
import { LandingSectionCard } from "@entities/landing/components/landing-section-card.tsx";
import {
  ClosedAccessWidgetStyled
} from "@widgets/landing/closed-access-widget/styled-components/closed-access-widget.styled.ts";
import { Button } from "@shared/ui/button";

import GameCardsImageSrc from "/images/game-cards.png";
import { LandingSectionHeightTypeEnum } from "@entities/landing";

export const ClosedAccessWidget = () => {
  return (
    <LandingSection heightType={LandingSectionHeightTypeEnum.ALMOST_FULL}>
      <LandingSectionCard>
        <ClosedAccessWidgetStyled>
          <div>Для покупателей</div>
          <div>Закрытый<br/>доступ</div>

          <Button variant={'dark'}>Войти</Button>

          <img src={GameCardsImageSrc} alt="Игровые карточки"/>
        </ClosedAccessWidgetStyled>
      </LandingSectionCard>
    </LandingSection>
  );
};
