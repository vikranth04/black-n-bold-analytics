'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Sidebar from './Sidebar';
import Header from './Header';
import { cn } from '@/utils/cn';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="flex h-screen bg-bnb-dark text-gray-100 overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} currentPath={pathname} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} isSidebarOpen={sidebarOpen} />

        {/* Page Content */}
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex-1 overflow-y-auto scrollbar-hide"
        >
          <div className="h-full">{children}</div>
        </motion.main>
      </div>
    </div>
  );
};

export default DashboardLayout;
