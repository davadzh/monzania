import { LandingPage } from "@pages/landing-page";
import "./styles/index.css";
import './styles/setup-goober-for-preact.ts';
import { HeaderWidget } from "@widgets/header-widget";
import { FooterWidget } from "@widgets/footer-widget";

export const App = () => {
  return <>
    <LandingPage />

    <HeaderWidget />
    <FooterWidget />
  </>
}
