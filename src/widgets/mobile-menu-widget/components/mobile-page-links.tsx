import { MobilePageLinksStyled } from "@widgets/mobile-menu-widget/styled-components/mobile-page-links.styled.ts";
import { MobileMenuItemStyled } from "@widgets/mobile-menu-widget/styled-components/mobile-menu-item.styled.ts";
import {
  MobileMenuExpandingMenuItem
} from "@widgets/mobile-menu-widget/components/mobile-menu-expanding-menu-item.tsx";
import { HeaderLinkType } from "@widgets/header-widget/types/header-link.type.ts";

export const MobilePageLinks = () => {
  const items: Array<HeaderLinkType> = [
    {
      title: "Приключение горошинки",
      link: "https://www.mishkabooks.com/?goroshinka\n",
      disabled: false,
    },
    {
      title: "Монзания",
      link: "https://monzania.mishkabooks.com",
      disabled: false,
    },
    {
      title: "Подарочный Набор",
      link: "open-popup",
      disabled: true,
    },
    {
      title: "Философия",
      link: "open-popup",
      disabled: true,
    },
    {
      title: "Мишка Добро",
      link: "open-popup",
      disabled: true,
    },
    {
      title: "СМИ",
      link: "open-popup",
      disabled: true,
    },
    {
      title: "Отзывы",
      link: "open-popup",
      disabled: true,
    },
    {
      title: "Обратная связь",
      link: "https://mishkabooks.com/?contact",
      disabled: false,
    }
  ]

  const buyPageNestedItems = [
    {title: "Купить на сайте", link: "#", disabled: true},
    {title: "Офлайн покупка", link: "#", disabled: true},
    {title: "Ozon", link: "https://www.ozon.ru/seller/mishka-books-1518827/knigi-16500/?miniapp=seller_1518827", disabled: false},
    {title: "Wildberries", link: "https://www.wildberries.ru/brands/311074799-mishka-books", disabled: false},
  ]

  const onMenuElementClick = (menuItem: HeaderLinkType) => {
    if (menuItem.disabled) {
      return;
    }

    if (menuItem.link === "open-popup") {
      // setModal(ModalNameEnum.SOON);
      return;
    }

    window.open(menuItem.link, "_blank");
  }

  return (
    <MobilePageLinksStyled>
      <MobileMenuExpandingMenuItem title={'Купить'} nestedItems={buyPageNestedItems} />
      {items.map(item => (
        <MobileMenuItemStyled key={item.title} onClick={() => onMenuElementClick(item)} disabled={item.disabled}>
          {item.title}
        </MobileMenuItemStyled>
      ))}
    </MobilePageLinksStyled>
  );
};
