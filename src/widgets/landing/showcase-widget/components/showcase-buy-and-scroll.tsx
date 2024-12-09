import { ShowcaseBuyAndScrollStyled } from "../styled-components/showcase-buy-and-scroll.styled";
import MouseIcon from "@vectors/mouse-icon.svg?react";
import { Button } from "@shared/ui/button";

export const ShowcaseBuyAndScroll = () => {
  return (
    <ShowcaseBuyAndScrollStyled>
      <Button variant={'light'}>Купить</Button>
      <div>
        <MouseIcon/>
        <span>Листайте вниз</span>
      </div>
    </ShowcaseBuyAndScrollStyled>
  );
};
