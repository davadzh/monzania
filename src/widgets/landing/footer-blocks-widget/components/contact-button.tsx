import ContactArrowIcon from "@vectors/contact-arrow-icon.svg?react";
import { ContactButtonStyled } from "@widgets/landing/footer-blocks-widget/styled-components/contact-button.styled.ts";
import { useAppContext } from "@entities/app/contexts/app-context.tsx";
import { ModalNameEnum } from "@entities/modal/enums/modal-name.enum.ts";

export const ContactButton = () => {
  const { setModal } = useAppContext();

  return (
    <ContactButtonStyled onClick={() => setModal(ModalNameEnum.SOON)}>
      <div>Связаться</div>
      <span>
        <ContactArrowIcon/>
      </span>
    </ContactButtonStyled>
  );
};
