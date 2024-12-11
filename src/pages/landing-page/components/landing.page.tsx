import { AboutGame } from "@widgets/landing/about-game";
import { ShowcaseWidget } from "@widgets/landing/showcase-widget";
import { QuoteWidget } from "@widgets/landing/quote-widget";
import { LandingPageStyled } from "../styled-components/landing-page.styled";
import { ClosedAccessWidget } from "@widgets/landing/closed-access-widget";
import { FromAuthorWidget } from "@widgets/landing/from-author-widget";
import { FooterBlocksWidget } from "@widgets/landing/footer-blocks-widget";

export const LandingPage = () => {
  return <LandingPageStyled>
    <ShowcaseWidget/>
    <AboutGame/>
    <QuoteWidget />
    <ClosedAccessWidget />
    <FromAuthorWidget />
    <FooterBlocksWidget />
  </LandingPageStyled>
}