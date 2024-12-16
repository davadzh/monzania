import { Modal } from "@shared/ui/modal/components/modal.tsx";
import { useAppContext } from "@entities/app/contexts/app-context.tsx";
import { SoonModalStyled } from "@widgets/modals-widget/soon-modal/styled-components/soon-modal.styled.ts";

import BearIcon from "@vectors/bear-medium-icon.svg?react";
import { ModalNameEnum } from "@entities/modal/enums/modal-name.enum.ts";

export const SoonModal = () => {
  const {modal, setModal} = useAppContext();

  const closeModal = () => {
    setModal(null);
  }

  return (
    <Modal isOpen={modal === ModalNameEnum.SOON} onClose={closeModal}>
      <SoonModalStyled>
        <h3>Все почти готово...</h3>
        <BearIcon />
        <div>Этот раздел будет доступен позднее в этом месяце!</div>
      </SoonModalStyled>
    </Modal>
  );
};
