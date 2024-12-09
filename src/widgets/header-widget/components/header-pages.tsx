import { HeaderPagesStyled } from "@widgets/header-widget/styled-components/header-pages.styled.tsx";
import { HeaderLinkList } from "@widgets/header-widget/constants/header-link-list.ts";

import CircleDividerIcon from "@vectors/header-cirlce-divider-icon.svg?react";

export const HeaderPages = () => {
  return (
    <HeaderPagesStyled>
      {HeaderLinkList.map((fl, idx) => {
        const linkElement = <button>{fl.title}</button>
        if (idx === HeaderLinkList.length - 1) {
          return linkElement
        }
        return <>
          {linkElement}
          <CircleDividerIcon/>
        </>
      })}
    </HeaderPagesStyled>
  );
};
