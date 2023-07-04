import React, { createContext, useState } from 'react';

// Create the language context
export const LanguageContext = createContext();

// Create a provider component to wrap your app and provide the language context
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('russian'); // Default language is Russian

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
