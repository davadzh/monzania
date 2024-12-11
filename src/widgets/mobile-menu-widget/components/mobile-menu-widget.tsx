import { MobileMenuWidgetStyled } from "@widgets/mobile-menu-widget/styled-components/mobile-menu-widget.styled.ts";
import { useMobileMenu } from "@widgets/mobile-menu-widget";

import LogoBlackIcon from "@vectors/logo-black.svg?react";
import CartBlackIcon from "@vectors/cart-black.svg?react";
import BurgerBlackIcon from "@vectors/burger-black.svg?react";
import { MobileMenuHeaderStyled } from "@widgets/mobile-menu-widget/styled-components/mobile-menu-header.styled.ts";
import { MobilePageLinks } from "@widgets/mobile-menu-widget/components/mobile-page-links.tsx";
import { MobileMenuFooterLinks } from "@widgets/mobile-menu-widget/components/mobile-menu-footer-links.tsx";

export const MobileMenuWidget = () => {
  const { isMobileMenuOpened, setIsMobileMenuOpened } = useMobileMenu();

  if (!isMobileMenuOpened) {
    return null;
  }

  return (
    <MobileMenuWidgetStyled>
      <MobileMenuHeaderStyled>
        <LogoBlackIcon/>

        <div>
          <CartBlackIcon/>
          <BurgerBlackIcon onClick={() => setIsMobileMenuOpened(false)}/>
        </div>
      </MobileMenuHeaderStyled>

      <MobilePageLinks />

      <MobileMenuFooterLinks />
    </MobileMenuWidgetStyled>
  );
};
