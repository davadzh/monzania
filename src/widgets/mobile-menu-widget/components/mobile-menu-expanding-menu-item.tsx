import {
  MobileMenuExpandingMenuItemStyled
} from "@widgets/mobile-menu-widget/styled-components/mobile-menu-expanding-menu-item.styled.ts";

import ExpandBlackIcon from "@vectors/expand-black-icon.svg?react";
import { useState } from "preact/hooks";

interface MobileMenuExpandingMenuItemProps {
  title: string
  nestedItems: Array<{ title: string, link: string }>;
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
        {nestedItems.map(item => (
          <div key={item.title}>{item.title}</div>
        ))}
      </span>)}
    </MobileMenuExpandingMenuItemStyled>
  );
};
