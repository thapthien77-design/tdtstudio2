import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { SiteSettings } from '../types';
import { DBService, initDB } from '../services/db';

interface SettingsContextType {
  settings: SiteSettings;
  updateSetting: (key: keyof SiteSettings, value: string) => void;
  isLoading: boolean;
}

const defaultSettings: SiteSettings = {
  logoUrl: '',
  hotline: '0908531701',
  email: 'contact@tdtstudio.tech',
  address: 'Tầng 12, Tòa nhà TechTower, TP.HCM'
};

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<SiteSettings>(defaultSettings);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadSettings = async () => {
      await initDB();
      const dbSettings = DBService.getSettings();
      setSettings(prev => ({ ...prev, ...dbSettings }));
      setIsLoading(false);
    };
    loadSettings();
  }, []);

  const updateSetting = (key: keyof SiteSettings, value: string) => {
    DBService.saveSetting(key, value);
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <SettingsContext.Provider value={{ settings, updateSetting, isLoading }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};