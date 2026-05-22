'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Menu, Bell, Settings, LogOut, User } from 'lucide-react';
import { cn } from '@/utils/cn';
import { BRAND } from '@/utils/constants';

interface HeaderProps {
  onMenuClick: () => void;
  isSidebarOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, isSidebarOpen }) => {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-30 w-full border-b border-bnb-border bg-gradient-to-r from-bnb-dark/80 via-bnb-dark/80 to-bnb-card/80 backdrop-blur-xl"
    >
      <div className="h-16 flex items-center justify-between px-4 lg:px-6">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          {/* Menu Toggle - Mobile */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onMenuClick}
            className="lg:hidden p-2 hover:bg-bnb-hover rounded-lg transition-colors duration-200"
          >
            <Menu size={20} className="text-gray-300" />
          </motion.button>

          {/* Logo - Mobile Only */}
          <div className="lg:hidden">
            <h2 className="text-lg font-bold bg-gradient-to-r from-bnb-gold to-bnb-accent bg-clip-text text-transparent">
              {BRAND.name}
            </h2>
          </div>
        </div>

        {/* Center Section - Title (hidden on mobile) */}
        <div className="hidden sm:flex items-center gap-2">
          <h1 className="text-lg font-semibold text-gray-200">Dashboard</h1>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 lg:gap-4">
          {/* Notification Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative p-2 hover:bg-bnb-hover rounded-lg transition-colors duration-200 group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-bnb-accent/20 to-transparent opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-200" />
            <Bell size={18} className="text-gray-400 group-hover:text-bnb-accent transition-colors" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-bnb-error rounded-full animate-pulse" />
          </motion.button>

          {/* Divider */}
          <div className="hidden sm:block w-px h-6 bg-bnb-border" />

          {/* Profile Section */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="hidden sm:flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-bnb-hover transition-colors duration-200 group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-bnb-gold to-bnb-accent flex items-center justify-center shadow-glow">
              <User size={16} className="text-bnb-dark font-bold" />
            </div>
            <div className="hidden lg:block">
              <p className="text-sm font-medium text-gray-200">John Doe</p>
              <p className="text-xs text-gray-500">Admin</p>
            </div>
          </motion.div>

          {/* Settings Button - Mobile */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="sm:hidden p-2 hover:bg-bnb-hover rounded-lg transition-colors duration-200"
          >
            <Settings size={18} className="text-gray-400" />
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
