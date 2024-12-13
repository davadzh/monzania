import {
  MobileMenuExpandingMenuItemStyled
} from "@widgets/mobile-menu-widget/styled-components/mobile-menu-expanding-menu-item.styled.ts";

import ExpandBlackIcon from "@vectors/expand-black-icon.svg?react";
import { useState } from "preact/hooks";

interface MobileMenuExpandingMenuItemProps {
  title: string
  nestedItems: Array<{ title: string, link: string, disabled?: boolean }>;
}

export const MobileMenuExpandingMenuItem = (props: MobileMenuExpandingMenuItemProps) => {
  const { title, nestedItems } = props;

  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <MobileMenuExpandingMenuItemStyled _isExpanded={isExpanded}>
      <div onClick={() => setIsExpanded(!isExpanded)}>
        <span>{title}</span>
        <ExpandBlackIcon />
      </div>

      {isExpanded && (<span>
        {nestedItems.map(item => {
          const onClick = () => {
            if (item.disabled) {
              return;
            }

            window.open(item.link, '_blank');
          }

          return <button key={item.title} onClick={onClick} disabled={item.disabled}>{item.title}</button>
        })}
      </span>)}
    </MobileMenuExpandingMenuItemStyled>
  );
};
