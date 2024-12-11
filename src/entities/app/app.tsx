import { LandingPage } from "@pages/landing-page";
import "./styles/index.css";
import './styles/setup-goober-for-preact.ts';
import { HeaderWidget } from "@widgets/header-widget";
import { FooterWidget } from "@widgets/footer-widget";
import { MobileMenuProvider, MobileMenuWidget } from "@widgets/mobile-menu-widget";

export const App = () => {
  return <MobileMenuProvider>
    <LandingPage />
    <HeaderWidget />
    <FooterWidget />
    <MobileMenuWidget />
  </MobileMenuProvider>
}
