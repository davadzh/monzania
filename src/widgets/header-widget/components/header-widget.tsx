import { HeaderWidgetStyled } from "@widgets/header-widget/styled-components/header-widget.styled.ts";
import Logo from "@vectors/logo.svg?react";
import CartIcon from "@vectors/cart-icon.svg?react";
import { HeaderPages } from "@widgets/header-widget/components/header-pages.tsx";

export const HeaderWidget = () => {
  return (
    <HeaderWidgetStyled>
      <Logo />

      <HeaderPages />

      <CartIcon />
    </HeaderWidgetStyled>
  );
};
