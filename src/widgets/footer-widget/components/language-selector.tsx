import ArrowDownIcon from "@vectors/arrow-down.svg?react";
import { LanguageSelectorStyled } from "@widgets/footer-widget/styled-components/language-selector.styled.ts";

export const LanguageSelector = () => {
  return (
    <LanguageSelectorStyled>
      <div>Россия</div>
      <ArrowDownIcon />
    </LanguageSelectorStyled>
  );
};
