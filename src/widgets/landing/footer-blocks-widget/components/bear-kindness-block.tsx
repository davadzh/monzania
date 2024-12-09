import {
  BearKindnessBlockStyled
} from "@widgets/landing/footer-blocks-widget/styled-components/bear-kindness-block-styled.ts";

import BearBigIcon from "@vectors/bear-big-icon.svg?react";
import { Button } from "@shared/ui/button";

export const BearKindnessBlock = () => {
  return (
    <BearKindnessBlockStyled>
      <BearBigIcon />
      <div>Мишка.Добро</div>
      <div>Помощь самым маленьким</div>
      <Button variant={'dark'}>Подробнее</Button>
    </BearKindnessBlockStyled>
  );
};
