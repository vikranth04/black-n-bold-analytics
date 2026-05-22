'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, X, Menu } from 'lucide-react';
import { NAVIGATION_ITEMS, BRAND } from '@/utils/constants';
import { cn } from '@/utils/cn';
import SidebarLink from './SidebarLink';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  currentPath: string;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen, currentPath }) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleLinkClick = () => {
    if (window.innerWidth < 1024) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden z-40"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -280 }}
        animate={{ x: isOpen ? 0 : -280 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={cn(
          'fixed left-0 top-0 h-screen w-72 lg:w-64 bg-gradient-to-b from-bnb-dark via-bnb-dark to-bnb-card',
          'border-r border-bnb-border shadow-premium z-50',
          'lg:relative lg:translate-x-0 lg:transition-none',
          'flex flex-col overflow-y-auto scrollbar-hide'
        )}
      >
        {/* Header - Close Button Mobile */}
        <div className="lg:hidden flex items-center justify-between p-4 border-b border-bnb-border">
          <h1 className="text-xl font-bold bg-gradient-to-r from-bnb-gold to-bnb-accent bg-clip-text text-transparent">
            {BRAND.name}
          </h1>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-bnb-hover rounded-lg transition-colors"
          >
            <X size={20} className="text-gray-400" />
          </button>
        </div>

        {/* Logo Section - Desktop */}
        <div className="hidden lg:flex items-center justify-between p-6 border-b border-bnb-border">
          <div>
            <h1 className="text-lg font-bold bg-gradient-to-r from-bnb-gold to-bnb-accent bg-clip-text text-transparent">
              {BRAND.name}
            </h1>
            <p className="text-xs text-gray-500 mt-1">{BRAND.tagline}</p>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 px-3 py-6 space-y-2">
          {NAVIGATION_ITEMS.map((item) => (
            <div key={item.id}>
              <SidebarLink
                item={item}
                isActive={currentPath === item.href}
                onClick={() => handleLinkClick()}
              />
            </div>
          ))}
        </nav>

        {/* Footer Section */}
        <div className="border-t border-bnb-border p-4 space-y-3">
          <div className="p-3 rounded-lg bg-gradient-to-br from-bnb-gold/10 to-bnb-accent/10 border border-bnb-border/50">
            <p className="text-xs font-semibold text-gray-300 mb-2">Premium Features</p>
            <p className="text-xs text-gray-400 leading-relaxed">
              Unlock AI insights and advanced analytics with your premium plan
            </p>
          </div>
          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-gray-500">v1.0.0</span>
            <div className="h-2 w-2 bg-bnb-success rounded-full animate-pulse"></div>
          </div>
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar;
