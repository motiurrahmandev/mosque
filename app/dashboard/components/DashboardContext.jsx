"use client";
import { createContext, useContext, useState } from 'react';

const DashboardContext = createContext();

export const useDashboard = () => useContext(DashboardContext);

export const DashboardProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <DashboardContext.Provider value={{ isSidebarOpen, toggleSidebar, closeSidebar }}>
      {children}
    </DashboardContext.Provider>
  );
};
