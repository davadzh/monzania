import { ReactNode } from "preact/compat";
import { ModalStyled } from "@shared/ui/modal/styled-components/modal.styled.ts";
import { ModalContentStyled } from "@shared/ui/modal/styled-components/modal-content.styled.ts";
import { ModalCloseButtonStyled } from "@shared/ui/modal/styled-components/modal-close-button.styled.ts";

import CloseIcon from "@vectors/close-modal-icon.svg?react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const Modal = (props: ModalProps) => {
  const { isOpen, onClose, children } = props;

  if (!isOpen) return null;

  return (
    <ModalStyled onClick={onClose}>
      <ModalContentStyled onClick={(e) => e.stopPropagation()}>
        <ModalCloseButtonStyled onClick={onClose}>
          <CloseIcon />
        </ModalCloseButtonStyled>
        {children}
      </ModalContentStyled>
    </ModalStyled>
  );
};