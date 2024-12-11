import { createContext } from "preact";
import { ReactNode, useContext } from "preact/compat";
import { useState } from "preact/hooks";

interface MobileMenuContextType {
  isMobileMenuOpened: boolean;
  setIsMobileMenuOpened: (value: boolean) => void;
}

const MobileMenuContext = createContext<MobileMenuContextType | undefined>(undefined);

// Провайдер контекста
interface MobileMenuProviderProps {
  children: ReactNode;
}

export const MobileMenuProvider = (props: MobileMenuProviderProps) => {
  const {children} = props;

  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  return (
    <MobileMenuContext.Provider value={{ isMobileMenuOpened, setIsMobileMenuOpened }}>
      {children}
    </MobileMenuContext.Provider>
  );
};

export const useMobileMenu = (): MobileMenuContextType => {
  const context = useContext(MobileMenuContext);
  if (!context) {
    throw new Error('useMobileMenu must be used within a MobileMenuProvider');
  }
  return context;
};