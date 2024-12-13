import { BuyDropdownStyled } from "@widgets/header-widget/styled-components/buy-dropdown.styled.ts";
import { useEffect, useRef } from "preact/hooks";
import { Dispatch, SetStateAction } from "preact/compat";

interface BuyDropdownProps {
  isOpened: boolean;
  setIsOpened: Dispatch<SetStateAction<boolean>>;
  items?: Array<{ title: string, link: string, disabled?: boolean }>;
}

export const BuyDropdown = (props: BuyDropdownProps) => {
  const { isOpened, setIsOpened, items } = props;

  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: Event) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setIsOpened(false); // Закрываем мини-корзину при клике вне ее
    }
  }

  useEffect(() => {
    if (isOpened) {
      window.addEventListener('click', handleClickOutside);
    } else {
      window.removeEventListener('click', handleClickOutside);
    }

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, [isOpened]);

  if (!isOpened) {
    return null;
  }

  return (
    <BuyDropdownStyled ref={ref}>
      {items?.map(item => {
        const onClick = () => {
          if (item.disabled)
            return;

          window.open(item.link, "_blank");
        }

        return (
          <button onClick={onClick} disabled={item.disabled}>{item.title}</button>
        )
      })}
    </BuyDropdownStyled>
  );
};
