import { ShowcaseFooterStyled } from "@widgets/landing/showcase-widget/styled-components/showcase-footer.styled.ts";

import BearIcon from "@vectors/bear-icon.svg?react";
import InstagramIcon from "@vectors/instagram-icon.svg?react";
import {
  ShowcaseFooterLinkStyled
} from "@widgets/landing/showcase-widget/styled-components/showcase-footer-link.styled.ts";

export const ShowcaseFooter = () => {
  return (
    <ShowcaseFooterStyled>
      <ShowcaseFooterLinkStyled>
        <BearIcon />
      </ShowcaseFooterLinkStyled>

      <ShowcaseFooterLinkStyled>
        <InstagramIcon />
      </ShowcaseFooterLinkStyled>
    </ShowcaseFooterStyled>
  );
};
