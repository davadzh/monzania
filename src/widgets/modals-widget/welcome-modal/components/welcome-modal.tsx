import { useAppContext } from "@entities/app/contexts/app-context.tsx";
import { Modal } from "@shared/ui/modal/components/modal.tsx";
import { ModalNameEnum } from "@entities/modal/enums/modal-name.enum.ts";

import LogoBlackIcon from "@vectors/logo-black.svg?react";
import { WelcomeModalStyled } from "@widgets/modals-widget/welcome-modal/styled-components/welcome-modal.styled.ts";
import { OpenAccess } from "@features/open-access";
import { useIsMobile } from "@shared/lib/hooks/use-is-mobile.ts";

export const WelcomeModal = () => {
  const { modal, setModal } = useAppContext();
  const { isMobile } = useIsMobile();

  const closeModal = () => {
    setModal(null);
  }

  const paragraph = isMobile
    ? (
      <p>Для доступа к данному разделу введите пароль, который вы можете найти в инструкции внутри коробки.</p>)
    : (
      <p>Для доступа к данному разделу введите пароль,<br/> который вы можете найти в инструкции внутри<br/> коробки.</p>)

  return (
    <Modal isOpen={modal === ModalNameEnum.WELCOME} onClose={closeModal}>
      <WelcomeModalStyled>
        <LogoBlackIcon/>
        <h3>Добро пожаловать!</h3>
        {paragraph}

        <OpenAccess/>

        <h6>Нужна помощь? <a href="mailto:hello@mishkabooks.com">Напишите нам</a> на hello@mishkabooks.com</h6>
      </WelcomeModalStyled>
    </Modal>
  );
};