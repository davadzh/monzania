import { FooterWidgetStyled } from "@widgets/footer-widget/styled-components/footer-widget-styled.ts";
import { FooterLinks } from "@widgets/footer-widget/components/footer-links.tsx";
import { LanguageSelector } from "@widgets/footer-widget/components/language-selector.tsx";
import { useIsMobile } from "@shared/lib/hooks/use-is-mobile.ts";

export const FooterWidget = () => {
  const {isMobile} = useIsMobile();

  if (isMobile) {
    return (
      <FooterWidgetStyled>
        <FooterLinks/>
        <LanguageSelector/>
        <span>Copyright © 2024 Mishkabooks Ltd.</span>
      </FooterWidgetStyled>
    )
  }

  return (
    <FooterWidgetStyled>
    <span>Copyright © 2024 Mishkabooks Ltd.</span>
      <LanguageSelector />

      <FooterLinks />
    </FooterWidgetStyled>
  );
};
