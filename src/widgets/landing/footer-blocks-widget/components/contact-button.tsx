import ContactArrowIcon from "@vectors/contact-arrow-icon.svg?react";
import { ContactButtonStyled } from "@widgets/landing/footer-blocks-widget/styled-components/contact-button.styled.ts";
import { useAppContext } from "@entities/app/contexts/app-context.tsx";

export const ContactButton = () => {
  const { setIsSoonModalOpened } = useAppContext();

  return (
    <ContactButtonStyled onClick={() => setIsSoonModalOpened(true)}>
      <div>Связаться</div>
      <span>
        <ContactArrowIcon/>
      </span>
    </ContactButtonStyled>
  );
};
