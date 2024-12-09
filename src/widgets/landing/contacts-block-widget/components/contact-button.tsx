import { ContactButtonStyled } from "@widgets/landing/contacts-block-widget/styled-components/contact-button.styled.ts";
import ContactArrowIcon from "@vectors/contact-arrow-icon.svg?react";

export const ContactButton = () => {
  return (
    <ContactButtonStyled>
      <div>Связаться</div>
      <span>
        <ContactArrowIcon />
      </span>
    </ContactButtonStyled>
  );
};
