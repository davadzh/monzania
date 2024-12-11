import {
  MobileMenuFooterLinksStyled
} from "@widgets/mobile-menu-widget/styled-components/mobile-menu-footer-links.styled.ts";

import BearBlackIcon from "@vectors/bear-black-icon.svg?react";
import InstagramBlackIcon from "@vectors/instagram-black-icon.svg?react";

export const MobileMenuFooterLinks = () => {
  return (
    <MobileMenuFooterLinksStyled>
      <BearBlackIcon />
      <InstagramBlackIcon />
    </MobileMenuFooterLinksStyled>
  );
};
