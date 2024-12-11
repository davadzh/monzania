import { QuoteInfoStyled } from "@widgets/landing/quote-widget/styled-components/quote-info.styled.ts";

import ArrowRightUpIcon from "@vectors/arrow-right-up-icon.svg?react";

export const QuoteInfo = () => {
  return (
    <QuoteInfoStyled>
      <div>”</div>
      <div>«Монзания» станет для вас не только весёлым развлечением, но и увлекательной школой, где каждый сможет лучше узнать себя и научиться понимать других. Игра покажет, что эмоции бывают разными, и это нормально. А самое главное — с любыми чувствами можно справиться, если учиться работать с ними.</div>
      <div>
        <span>Елена Мазурова</span>
        <ArrowRightUpIcon />
      </div>
      <div>Детский нейропсихолог и игро-терапевт. <br/>Мама 4х детей. Консультант игры “Монзания”.</div>
    </QuoteInfoStyled>
  );
};
