import { HeaderLinkType } from "@widgets/header-widget/types/header-link.type.ts";

export const HeaderLinkList: Array<HeaderLinkType> = [
  {
    title: "Купить", link: "#", items: [
      { title: "Купить на сайте", link: "#", disabled: true },
      { title: "Офлайн покупка", link: "#", disabled: true },
      { title: "Ozon", link: "https://www.ozon.ru/seller/mishka-books-1518827/knigi-16500/?miniapp=seller_1518827", disabled: false },
      { title: "Wildberries", link: "https://www.wildberries.ru/brands/311074799-mishka-books", disabled: false },
    ]
  },
  { title: "Приключение горошинки", link: "open-popup" },
  { title: "Монзания", link: "open-popup" },
  { title: "Подарочный Набор", link: "open-popup" },
  { title: "Философия", link: "open-popup" },
  { title: "Мишка Добро", link: "open-popup" },
  { title: "СМИ", link: "open-popup" },
  { title: "Отзывы", link: "open-popup" },
  { title: "Обратная связь", link: "open-popup" },
]