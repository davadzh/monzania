import { createContext } from "preact";
import { ReactNode, useContext } from "preact/compat";
import { useState } from "preact/hooks";
import { ModalNameEnum } from "@entities/modal/enums/modal-name.enum.ts";

interface AppContextType {
  isMobileMenuOpened: boolean;
  setIsMobileMenuOpened: (value: boolean) => void;

  modal: ModalNameEnum | null;
  setModal: (modalName: ModalNameEnum | null) => void;

  isMiniCartOpened: boolean;
  setIsMiniCartOpened: (value: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = (props: AppProviderProps) => {
  const { children } = props;

  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);
  const [modal, setModal] = useState<ModalNameEnum | null>(null);
  const [isMiniCartOpened, setIsMiniCartOpened] = useState(false);

  return (
    <AppContext.Provider value={{
      isMobileMenuOpened,
      setIsMobileMenuOpened,
      modal,
      setModal,
      isMiniCartOpened,
      setIsMiniCartOpened
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within a AppProvider');
  }
  return context;
};