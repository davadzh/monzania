import { GiftBoxBlockStyled } from "@widgets/landing/footer-blocks-widget/styled-components/gift-box-block-styled.ts";
import GiftBoxImageSrc from "/images/gift-box.png";
import { Button } from "@shared/ui/button";
import { useAppContext } from "@entities/app/contexts/app-context.tsx";
import { ModalNameEnum } from "@entities/modal/enums/modal-name.enum.ts";

export const GiftBoxBlock = () => {
  const { setModal } = useAppContext();

  return (
    <GiftBoxBlockStyled>
      <span/>
      <div>
        Монзания входит в <br/>подарочный набор
      </div>
      <img src={GiftBoxImageSrc} alt="Подарочный набор"/>
      <Button variant={'dark'} onClick={() => setModal(ModalNameEnum.SOON)}>Подробнее</Button>
    </GiftBoxBlockStyled>
  );
};
