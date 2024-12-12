// AppStateManager.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import { AppState, AppStateStatus } from 'react-native';

interface AppStateContextProps {
  appState: AppStateStatus;
  lastActiveTimestamp: Date | null;
}

const AppStateContext = createContext<AppStateContextProps | undefined>(undefined);

export const AppStateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [appState, setAppState] = useState<AppStateStatus>(AppState.currentState);
  const [lastActiveTimestamp, setLastActiveTimestamp] = useState<Date | null>(null);

  useEffect(() => {
    const handleAppStateChange = (nextAppState: AppStateStatus) => {
      if (appState === 'active' && nextAppState.match(/inactive|background/)) {
        // Going to background
        setLastActiveTimestamp(new Date());
      }
      setAppState(nextAppState);
    };

    const subscription = AppState.addEventListener('change', handleAppStateChange);
    return () => subscription.remove();
  }, [appState]);

  return (
    <AppStateContext.Provider value={{ appState, lastActiveTimestamp }}>
      {children}
    </AppStateContext.Provider>
  );
};

// Custom hook for accessing the app state context
export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppState must be used within an AppStateProvider');
  }
  return context;
};
