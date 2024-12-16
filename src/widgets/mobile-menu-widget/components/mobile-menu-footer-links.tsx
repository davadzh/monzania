import {
  MobileMenuFooterLinksStyled
} from "@widgets/mobile-menu-widget/styled-components/mobile-menu-footer-links.styled.ts";

import BearBlackIcon from "@vectors/bear-black-icon.svg?react";
import InstagramBlackIcon from "@vectors/instagram-black-icon.svg?react";
import { useAppContext } from "@entities/app/contexts/app-context.tsx";
import { ModalNameEnum } from "@entities/modal/enums/modal-name.enum.ts";

export const MobileMenuFooterLinks = () => {
  const { setModal } = useAppContext();

  const onInstagramOpenClick = () => {
    window.open("https://instagram.com/mishka.anastasia?igshid=MTNiYzNiMzkwZA==", "_blank");
  }

  return (
    <MobileMenuFooterLinksStyled>
      <BearBlackIcon onClick={() => setModal(ModalNameEnum.SOON)} />
      <InstagramBlackIcon onClick={onInstagramOpenClick} />
    </MobileMenuFooterLinksStyled>
  );
};
