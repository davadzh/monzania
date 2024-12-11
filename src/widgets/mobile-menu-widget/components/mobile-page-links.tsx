import { MobilePageLinksStyled } from "@widgets/mobile-menu-widget/styled-components/mobile-page-links.styled.ts";
import { MobileMenuItemStyled } from "@widgets/mobile-menu-widget/styled-components/mobile-menu-item.styled.ts";
import {
  MobileMenuExpandingMenuItem
} from "@widgets/mobile-menu-widget/components/mobile-menu-expanding-menu-item.tsx";

export const MobilePageLinks = () => {
  const items = [
    {
      title: "Приключение горошинки",
      link: "#",
    },
    {
      title: "Монзания",
      link: "#",
    },
    {
      title: "Подарочный Набор",
      link: "#",
    },
    {
      title: "Философия",
      link: "#",
    },
    {
      title: "Мишка Добро",
      link: "#",
    },
    {
      title: "СМИ",
      link: "#",
    },
    {
      title: "Отзывы",
      link: "#",
    },
    {
      title: "Обратная связь",
      link: "#",
    }
  ]

  const buyPageNestedItems = [
    {title: "Купить на сайте", link: "#"},
    {title: "Офлайн покупка", link: "#"},
    {title: "Ozon", link: "#"},
    {title: "Wildberries", link: "#"},
  ]

  return (
    <MobilePageLinksStyled>
      <MobileMenuExpandingMenuItem title={'Купить'} nestedItems={buyPageNestedItems} />
      {items.map(item => (
        <MobileMenuItemStyled key={item.title}>
          {item.title}
        </MobileMenuItemStyled>
      ))}
    </MobilePageLinksStyled>
  );
};
