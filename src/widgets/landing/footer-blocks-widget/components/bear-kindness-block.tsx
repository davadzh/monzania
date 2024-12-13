import {
  BearKindnessBlockStyled
} from "@widgets/landing/footer-blocks-widget/styled-components/bear-kindness-block-styled.ts";

import BearBigIcon from "@vectors/bear-big-icon.svg?react";
import { Button } from "@shared/ui/button";
import { useIsMobile } from "@shared/lib/hooks/use-is-mobile.ts";
import { useAppContext } from "@entities/app/contexts/app-context.tsx";

export const BearKindnessBlock = () => {
  const { setIsSoonModalOpened } = useAppContext();

  const { isMobile } = useIsMobile();
  const texts = isMobile ? (
    <>
      <div>Помощь самым маленьким</div>
      <div>Мишка.Добро</div>
    </>
  ) : (
    <>
      <div>Мишка.Добро</div>
      <div>Помощь самым маленьким</div>
    </>
  )

  return (
    <BearKindnessBlockStyled>
      <BearBigIcon />
      {texts}
      <Button variant={'dark'} onClick={() => setIsSoonModalOpened(true)}>Подробнее</Button>
    </BearKindnessBlockStyled>
  );
};
