import { MiniCartWidgetStyled } from "@widgets/mini-cart-widget/styled-components/mini-cart-widget.styled.ts";
import { useAppContext } from "@entities/app/contexts/app-context.tsx";
import { useEffect, useRef } from "preact/hooks";

import CloseIcon from "@vectors/close-mini-cart-icon.svg?react";
import BearIcon from "@vectors/bear-medium-icon.svg?react";

export const MiniCartWidget = () => {
  const { isMiniCartOpened, setIsMiniCartOpened } = useAppContext();

  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: Event) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setIsMiniCartOpened(false); // Закрываем мини-корзину при клике вне ее
    }
  }

  useEffect(() => {
    if (isMiniCartOpened) {
      window.addEventListener('click', handleClickOutside);
    } else {
      window.removeEventListener('click', handleClickOutside);
    }

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isMiniCartOpened]);

  if (!isMiniCartOpened) {
    return null;
  }

  return (
    <MiniCartWidgetStyled ref={ref}>
      <span>
        <CloseIcon onClick={() => setIsMiniCartOpened(false)} />
      </span>

      <h3>Ваши покупки</h3>
      <BearIcon />
      <div>Покупка на сайте будет доступна позднее</div>
    </MiniCartWidgetStyled>
  );
};
