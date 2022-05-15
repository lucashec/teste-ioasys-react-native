import React, { createContext, useState, useContext } from "react";

const AppContext = createContext({});

interface AppContextProps{
    category?: string;
    year?: number;
    auth?: boolean;
}

export default function AppProvider({ children }) {
  const [appContext, setAppContext] = useState<AppContextProps>({} as AppContextProps);

  return (
    <AppContext.Provider
      value={{
        appContext,
        setAppContext
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) throw new Error("AppContextProvider");
  const { appContext, setAppContext } = context;
  return { appContext, setAppContext };
}