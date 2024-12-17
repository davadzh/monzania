import { HeaderPagesStyled } from "@widgets/header-widget/styled-components/header-pages.styled.tsx";
import { HeaderLinkList } from "@widgets/header-widget/constants/header-link-list.ts";

import CircleDividerIcon from "@vectors/header-cirlce-divider-icon.svg?react";
import ExpandIcon from "@vectors/expand-icon.svg?react";
import { ExpandingMenuItemStyled } from "@widgets/header-widget/styled-components/expanding-menu-item.styled.ts";
import { HeaderLinkType } from "@widgets/header-widget/types/header-link.type.ts";
import { useAppContext } from "@entities/app/contexts/app-context.tsx";
import { useState } from "preact/hooks";
import { BuyDropdown } from "@widgets/header-widget/components/buy-dropdown.tsx";
import { ModalNameEnum } from "@entities/modal/enums/modal-name.enum.ts";

export const HeaderPages = () => {
  const { setModal } = useAppContext();

  const [isBuyDropdownOpened, setIsBuyDropdownOpened] = useState(false);

  const onMenuElementClick = (menuItem: HeaderLinkType) => {
    if (menuItem.link === "open-popup") {
      setModal(ModalNameEnum.SOON);
      return;
    } else {
      window.open(menuItem.link, "_blank");
    }
  }

  return (
    <HeaderPagesStyled>
      {HeaderLinkList.map((menuItem, idx) => {
        const linkElement = <button onClick={() => onMenuElementClick(menuItem)}>{menuItem.title}</button>

        if (menuItem.title === "Купить") {
          return (
            <>
              <ExpandingMenuItemStyled onClick={() => setIsBuyDropdownOpened(true)}>
                {linkElement}
                <ExpandIcon/>

                <BuyDropdown isOpened={isBuyDropdownOpened}
                             setIsOpened={setIsBuyDropdownOpened}
                             items={menuItem.items}/>
              </ExpandingMenuItemStyled>
              <CircleDividerIcon/>
            </>
          )
        }

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
