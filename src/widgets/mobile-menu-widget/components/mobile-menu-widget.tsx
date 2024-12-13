import { MobileMenuWidgetStyled } from "@widgets/mobile-menu-widget/styled-components/mobile-menu-widget.styled.ts";

import LogoBlackIcon from "@vectors/logo-black.svg?react";
import BurgerBlackIcon from "@vectors/burger-black.svg?react";
import { MobileMenuHeaderStyled } from "@widgets/mobile-menu-widget/styled-components/mobile-menu-header.styled.ts";
import { MobilePageLinks } from "@widgets/mobile-menu-widget/components/mobile-page-links.tsx";
import { MobileMenuFooterLinks } from "@widgets/mobile-menu-widget/components/mobile-menu-footer-links.tsx";
import { useAppContext } from "@entities/app/contexts/app-context.tsx";
import { OpenMiniCart } from "@features/open-mini-cart";

export const MobileMenuWidget = () => {
  const { isMobileMenuOpened, setIsMobileMenuOpened } = useAppContext();

  if (!isMobileMenuOpened) {
    return null;
  }

  return (
    <MobileMenuWidgetStyled>
      <MobileMenuHeaderStyled>
        <LogoBlackIcon/>

        <div>
          <OpenMiniCart variant={'dark'} onClick={() => setIsMobileMenuOpened(false)} />
          <BurgerBlackIcon onClick={() => setIsMobileMenuOpened(false)}/>
        </div>
      </MobileMenuHeaderStyled>

      <MobilePageLinks />

      <MobileMenuFooterLinks />
    </MobileMenuWidgetStyled>
  );
};
