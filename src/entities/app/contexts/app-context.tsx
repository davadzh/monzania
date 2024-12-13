import { createContext } from "preact";
import { ReactNode, useContext } from "preact/compat";
import { useState } from "preact/hooks";

interface AppContextType {
  isMobileMenuOpened: boolean;
  setIsMobileMenuOpened: (value: boolean) => void;

  isSoonModalOpened: boolean;
  setIsSoonModalOpened: (value: boolean) => void;

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
  const [isSoonModalOpened, setIsSoonModalOpened] = useState(false);
  const [isMiniCartOpened, setIsMiniCartOpened] = useState(false);

  return (
    <AppContext.Provider value={{
      isMobileMenuOpened,
      setIsMobileMenuOpened,
      isSoonModalOpened,
      setIsSoonModalOpened,
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