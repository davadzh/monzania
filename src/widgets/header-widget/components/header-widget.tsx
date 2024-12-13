import { HeaderWidgetStyled } from "@widgets/header-widget/styled-components/header-widget.styled.ts";
import Logo from "@vectors/logo.svg?react";
import BurgerIcon from "@vectors/burger-icon.svg?react";
import { HeaderPages } from "@widgets/header-widget/components/header-pages.tsx";
import { useIsMobile } from "@shared/lib/hooks/use-is-mobile.ts";
import { useAppContext } from "@entities/app/contexts/app-context.tsx";
import { OpenMiniCart } from "@features/open-mini-cart";

export const HeaderWidget = () => {
  const {isMobile} = useIsMobile();
  const { setIsMobileMenuOpened } = useAppContext();

  return (
    <HeaderWidgetStyled>
      <Logo />

      {!isMobile && <HeaderPages />}

      <span>
        <OpenMiniCart variant={'light'} />
        {isMobile && <BurgerIcon onClick={() => setIsMobileMenuOpened(true)} />}
      </span>
    </HeaderWidgetStyled>
  );
};
