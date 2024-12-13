import { LandingPage } from "@pages/landing-page";
import "./styles/index.css";
import './styles/setup-goober-for-preact.ts';
import { HeaderWidget } from "@widgets/header-widget";
import { FooterWidget } from "@widgets/footer-widget";
import { MobileMenuWidget } from "@widgets/mobile-menu-widget";
import { AppProvider } from "@entities/app/contexts/app-context.tsx";
import { ModalsWidget } from "@widgets/modals-widget/components/modals-widget.tsx";
import { MiniCartWidget } from "@widgets/mini-cart-widget";

export const App = () => {
  return <AppProvider>
    <LandingPage />
    <HeaderWidget />
    <FooterWidget />
    <MobileMenuWidget />

    <ModalsWidget />
    <MiniCartWidget />
  </AppProvider>
}
