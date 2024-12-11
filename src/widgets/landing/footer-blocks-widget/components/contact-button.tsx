import ContactArrowIcon from "@vectors/contact-arrow-icon.svg?react";
import { ContactButtonStyled } from "@widgets/landing/footer-blocks-widget/styled-components/contact-button.styled.ts";

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
