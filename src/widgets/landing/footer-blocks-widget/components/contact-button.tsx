import ContactArrowIcon from "@vectors/contact-arrow-icon.svg?react";
import { ContactButtonStyled } from "@widgets/landing/footer-blocks-widget/styled-components/contact-button.styled.ts";

export const ContactButton = () => {
  return (
    <ContactButtonStyled onClick={() => window.open("https://www.mishkabooks.com/?contact")}>
      <div>Связаться</div>
      <span>
        <ContactArrowIcon/>
      </span>
    </ContactButtonStyled>
  );
};
