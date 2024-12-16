import { ShowcaseFooterStyled } from "@widgets/landing/showcase-widget/styled-components/showcase-footer.styled.ts";

import BearIcon from "@vectors/bear-icon.svg?react";
import InstagramIcon from "@vectors/instagram-icon.svg?react";
import {
  ShowcaseFooterLinkStyled
} from "@widgets/landing/showcase-widget/styled-components/showcase-footer-link.styled.ts";
import { useAppContext } from "@entities/app/contexts/app-context.tsx";
import { ModalNameEnum } from "@entities/modal/enums/modal-name.enum.ts";

export const ShowcaseFooter = () => {
  const { setModal } = useAppContext();

  return (
    <ShowcaseFooterStyled>
      <ShowcaseFooterLinkStyled onClick={() => setModal(ModalNameEnum.SOON)}>
        <BearIcon/>
      </ShowcaseFooterLinkStyled>

      <ShowcaseFooterLinkStyled href={"https://instagram.com/mishka.anastasia?igshid=MTNiYzNiMzkwZA=="}
                                target={"_blank"}>
        <InstagramIcon/>
      </ShowcaseFooterLinkStyled>
    </ShowcaseFooterStyled>
  );
};
