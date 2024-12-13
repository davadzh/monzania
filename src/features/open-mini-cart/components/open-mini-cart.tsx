import { useAppContext } from "@entities/app/contexts/app-context.tsx";

import CartIcon from "@vectors/cart-icon.svg?react";
import CartBlackIcon from "@vectors/cart-black.svg?react";

interface OpenMiniCartProps {
  variant: 'light' | 'dark';
  onClick?: () => void;
}

export const OpenMiniCart = (props: OpenMiniCartProps) => {
  const { variant, onClick } = props;

  const {setIsMiniCartOpened} = useAppContext();

  const onButtonClick = () => {
    setIsMiniCartOpened(true);
    onClick?.();
  }

  if (variant === 'dark') {
    return <CartBlackIcon onClick={onButtonClick} />
  }

  return (
    <CartIcon onClick={onButtonClick} />
  );
};
