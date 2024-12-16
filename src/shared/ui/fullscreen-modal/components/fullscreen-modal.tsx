import { ReactNode } from "react";

import { FullscreenModalStyled } from "@shared/ui/fullscreen-modal/styled-components/fullscreen-modal.styled.ts";
import {
  FullscreenModalContentStyled
} from "@shared/ui/fullscreen-modal/styled-components/fullscreen-modal-content.styled.ts";
import {
  FullscreenModalCloseButtonStyled
} from "@shared/ui/fullscreen-modal/styled-components/fullscreen-modal-close-button.styled.ts";

import CloseIcon from "@vectors/close-modal-icon.svg?react";
import {
  FullscreenModalHeaderShadowStyled
} from "@shared/ui/fullscreen-modal/styled-components/fullscreen-modal-header-shadow.styled.ts";

interface FullscreenModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

export const FullscreenModal = (props: FullscreenModalProps) => {
  const { isOpen, onClose, children } = props;

  if (!isOpen) return null;

  return (
    <FullscreenModalStyled>
      <FullscreenModalContentStyled>
        <FullscreenModalHeaderShadowStyled />

        <FullscreenModalCloseButtonStyled onClick={onClose}>
          <CloseIcon />
        </FullscreenModalCloseButtonStyled>

        {children}
      </FullscreenModalContentStyled>
    </FullscreenModalStyled>
  );
};
