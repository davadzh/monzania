import { HeaderWidgetStyled } from "@widgets/header-widget/styled-components/header-widget.styled.ts";
import Logo from "@vectors/logo.svg?react";
import CartIcon from "@vectors/cart-icon.svg?react";
import BurgerIcon from "@vectors/burger-icon.svg?react";
import { HeaderPages } from "@widgets/header-widget/components/header-pages.tsx";
import { useIsMobile } from "@shared/lib/hooks/use-is-mobile.ts";
import { useMobileMenu } from "@widgets/mobile-menu-widget";

export const HeaderWidget = () => {
  const {isMobile} = useIsMobile();
  const { setIsMobileMenuOpened } = useMobileMenu();

  return (
    <HeaderWidgetStyled>
      <Logo />

      {!isMobile && <HeaderPages />}

      <span>
        <CartIcon />
        {isMobile && <BurgerIcon onClick={() => setIsMobileMenuOpened(true)} />}
      </span>
    </HeaderWidgetStyled>
  );
};
