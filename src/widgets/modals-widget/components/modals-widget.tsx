import { AnalysisModal } from "@widgets/modals-widget/analysis-modal";
import { SoonModal } from "@widgets/modals-widget/soon-modal";
import { WelcomeModal } from "@widgets/modals-widget/welcome-modal";

export const ModalsWidget = () => {
  return (
    <>
      <SoonModal />
      <AnalysisModal />
      <WelcomeModal />
    </>
  );
};
