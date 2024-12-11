import {
  ContactsBlockWidgetStyled
} from "@widgets/landing/footer-blocks-widget/styled-components/contacts-block-widget.styled.ts";
import { ContactButton } from "@widgets/landing/footer-blocks-widget/components/contact-button.tsx";

export const ContactsBlockWidget = () => {
  return (
    <ContactsBlockWidgetStyled>
      <div>
        <span>Будь на связи</span>
        <span>Hello@mishkabooks.com</span>
      </div>

      <ContactButton/>
    </ContactsBlockWidgetStyled>
  );
};
