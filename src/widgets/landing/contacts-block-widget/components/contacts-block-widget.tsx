import { LandingSection, LandingSectionCard, LandingSectionHeightTypeEnum } from "@entities/landing";
import {
  ContactsBlockWidgetStyled
} from "@widgets/landing/contacts-block-widget/styled-components/contacts-block-widget.styled.ts";
import { ContactButton } from "@widgets/landing/contacts-block-widget/components/contact-button.tsx";

export const ContactsBlockWidget = () => {
  return (
    <LandingSection heightType={LandingSectionHeightTypeEnum.MAX_CONTENT}>
      <LandingSectionCard>
        <ContactsBlockWidgetStyled>
          <div>
            <span>Будь на связи</span>
            <span>Hello@mishkabooks.com</span>
          </div>

          <ContactButton />
        </ContactsBlockWidgetStyled>
      </LandingSectionCard>
    </LandingSection>
  );
};
