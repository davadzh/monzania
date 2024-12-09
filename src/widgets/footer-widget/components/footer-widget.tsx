import { FooterWidgetStyled } from "@widgets/footer-widget/styled-components/footer-widget-styled.ts";
import { FooterLinks } from "@widgets/footer-widget/components/footer-links.tsx";

export const FooterWidget = () => {
  return (
    <FooterWidgetStyled>
      <span>Copyright © 2024 Mishkabooks Ltd.</span>
      <span>ОАЭ</span>

      <FooterLinks />
    </FooterWidgetStyled>
  );
};
