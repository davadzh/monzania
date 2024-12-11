import { FooterLinksStyled } from "@widgets/footer-widget/styled-components/footer-links-styled.ts";
import { FooterLinkList } from "@widgets/footer-widget/constants/footer-link-list.ts";

import VerticalDividerIcon from "@vectors/footer-vertical-divide-icon.svg?react";
import { useIsMobile } from "@shared/lib/hooks/use-is-mobile.ts";

export const FooterLinks = () => {
  const { isMobile } = useIsMobile();

  const onLinkClick = (e: Event) => {
    e.preventDefault();
  }

  return (
    <FooterLinksStyled>
      {FooterLinkList.map((fl, idx) => {
        const linkElement = <a href={fl.link} onClick={onLinkClick}>{fl.title}</a>
        if (idx === FooterLinkList.length - 1) {
          return linkElement
        }
        return <>
          {linkElement}
          {!isMobile && <VerticalDividerIcon/>}
        </>
      })}
    </FooterLinksStyled>
  );
};
