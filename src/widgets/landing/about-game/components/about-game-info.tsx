import { AboutGameInfoStyled } from "@widgets/landing/about-game/styled-components/about-game-info.styled.ts";
import { Button } from "@shared/ui/button";
import { useState } from "preact/hooks";
import { useIsMobile } from "@shared/lib/hooks/use-is-mobile.ts";
import {
  ExpandAboutGameTextStyled
} from "@widgets/landing/about-game/styled-components/expand-about-game-text.styled.ts";

import ExpandBlueIcon from "@vectors/expand-blue-icon.svg?react";

export const AboutGameInfo = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const { isMobile } = useIsMobile();

  const text = (isExpanded || !isMobile) ? (
    <div>
      «Монзания» — карточная игра для развития эмоционального интеллекта, созданная с учётом принципов игровой
      педагогики. В комфортной игровой форме дети учатся распознавать не только свои чувства, но и эмоции окружающих,
      приобретают способность замечать ситуации, когда кто-то нуждается в их помощи, а иногда понимать, что помощь
      нужна и им самим.
      <br/><br/>Фантазийный мир Монзании знакомит игроков с удивительными существами — Монзами. Главные герои игры во
      многом похожи на людей: они растут в семьях, дружат, хулиганят, ходят в школу, радуются и грустят точно так же,
      как и обычные дети. У каждого Монза есть своя история, а также набор личностных качеств и ситуаций, в которые
      герои попадают.
      <br/><br/>Задача игрока — первым избавиться от карт, проявив сообразительность и эмпатию. Победитель игры
      становится гражданином Монзании.
      Карточная игра подходит для детей и их родителей, а также для использования в психологической практике.
    </div>
  ) : (
    <div>
      «Монзания» — карточная игра для развития эмоционального интеллекта, созданная с учётом принципов игровой
      педагогики. В комфортной игровой форме дети учатся распознавать не только свои чувства, но и эмоции окружающих,
      приобретают способность замечать ситуации, когда кто-то нуждается в их помощи, а иногда понимать, что помощь
      нужна и им самим.
    </div>
  )

  return (
    <AboutGameInfoStyled>
      <div>МОНЗАНИЯ</div>
      <div>Об игре</div>
      {text}

      {isMobile && !isExpanded && (
        <ExpandAboutGameTextStyled onClick={() => setIsExpanded(true)}>
          <div>Читать подробнее</div>
          <ExpandBlueIcon />
        </ExpandAboutGameTextStyled>
      )}

      <Button variant={'dark'}>
        Инструкция
      </Button>
    </AboutGameInfoStyled>
  );
};
