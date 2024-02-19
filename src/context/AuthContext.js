import React, { useState, createContext, useContext } from "react";

// CONTEXT
const AuthContext = createContext();

// HOOK
export const useAuth = () => useContext(AuthContext);

// PROVIDER
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};