import { useAppContext } from "@entities/app/contexts/app-context.tsx";
import { Modal } from "@shared/ui/modal/components/modal.tsx";
import { ModalNameEnum } from "@entities/modal/enums/modal-name.enum.ts";

import HandIcon from "@vectors/hand-icon.svg?react";
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
      <p>Для доступа к данной секции у каждого покупателя в коробке с игрой лежит пароль, введите его
        и прочитайте детальный разбор Монзании"</p>)
    : (
      <p>Для доступа к данной секции у каждого покупателя<br/>в коробке с игрой лежит пароль, введите его<br/>
        и прочитайте детальный разбор Монзании"</p>)

  const footer = isMobile
    ? (
      <h6>Нужна помощь?{isMobile && <br/>} <a href="mailto:hello@mishkabooks.com">Напишите нам</a> или позвоните 8 (921)
        376 - 46 - 58
      </h6>)
    : (
      <h6>Нужна помощь? <a href="mailto:hello@mishkabooks.com">Напишите нам</a> или позвоните 8 (921)
        376 - 46 - 58
      </h6>)

  return (
    <Modal isOpen={modal === ModalNameEnum.WELCOME} onClose={closeModal}>
      <WelcomeModalStyled>
        <HandIcon/>
        <h3>Добро пожаловать!</h3>
        {paragraph}

        <OpenAccess/>

        {footer}
      </WelcomeModalStyled>
    </Modal>
  );
};