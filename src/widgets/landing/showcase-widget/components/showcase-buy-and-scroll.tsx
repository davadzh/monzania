import { ShowcaseBuyAndScrollStyled } from "../styled-components/showcase-buy-and-scroll.styled";
import MouseIcon from "@vectors/mouse-icon.svg?react";
import { Button } from "@shared/ui/button";

export const ShowcaseBuyAndScroll = () => {
  const onClick = () => {
    window.open("https://www.ozon.ru/seller/mishka-books-1518827/knigi-16500/?miniapp=seller_1518827", "_blank");
  }

  return (
    <ShowcaseBuyAndScrollStyled>
      <Button variant={'light'} onClick={onClick}>Купить</Button>
      <div>
        <MouseIcon/>
        <span>Листайте вниз</span>
      </div>
    </ShowcaseBuyAndScrollStyled>
  );
};
