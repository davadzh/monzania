import { GiftBoxBlockStyled } from "@widgets/landing/footer-blocks-widget/styled-components/gift-box-block-styled.ts";
import GiftBoxImageSrc from "/images/gift-box.png";
import { Button } from "@shared/ui/button";

export const GiftBoxBlock = () => {
  return (
    <GiftBoxBlockStyled>
      <div>
        Монзания входит в <br/>подарочный набор
      </div>
      <img src={GiftBoxImageSrc} alt="Подарочный набор"/>
      <Button variant={'dark'}>Подробнее</Button>
    </GiftBoxBlockStyled>
  );
};
