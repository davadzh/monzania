import { ShowcaseFooterStyled } from "@widgets/landing/showcase-widget/styled-components/showcase-footer.styled.ts";

import BearIcon from "@vectors/bear-icon.svg?react";
import InstagramIcon from "@vectors/instagram-icon.svg?react";
import {
  ShowcaseFooterLinkStyled
} from "@widgets/landing/showcase-widget/styled-components/showcase-footer-link.styled.ts";
import { useAppContext } from "@entities/app/contexts/app-context.tsx";

export const ShowcaseFooter = () => {
  const { setIsSoonModalOpened } = useAppContext();

  return (
    <ShowcaseFooterStyled>
      <ShowcaseFooterLinkStyled onClick={() => setIsSoonModalOpened(true)}>
        <BearIcon/>
      </ShowcaseFooterLinkStyled>

      <ShowcaseFooterLinkStyled href={"https://instagram.com/mishka.anastasia?igshid=MTNiYzNiMzkwZA=="}
                                target={"_blank"}>
        <InstagramIcon/>
      </ShowcaseFooterLinkStyled>
    </ShowcaseFooterStyled>
  );
};
