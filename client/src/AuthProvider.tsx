import React, { useState, createContext, useContext, ReactNode } from 'react';
import Cookies from 'js-cookie';
import { AuthType } from '../../types';

const AuthContext = createContext<AuthType>({isAuthenticated: false, setIsAuthenticated: () => {}});

export const AuthProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const savedAuth = Cookies.get('authenticated');
    return savedAuth ? JSON.parse(savedAuth) : false;
  });

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};