'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { cn } from '@/utils/cn';

interface SidebarLinkProps {
  item: {
    id: string;
    label: string;
    href: string;
    icon: string;
  };
  isActive: boolean;
  onClick?: () => void;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ item, isActive, onClick }) => {
  const IconComponent = (Icons as any)[item.icon];

  return (
    <motion.div
      whileHover={{ x: 4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
    >
      <Link href={item.href} onClick={onClick}>
        <div
          className={cn(
            'flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200',
            'relative group overflow-hidden',
            isActive
              ? 'bg-gradient-to-r from-bnb-gold/20 to-bnb-accent/10 border border-bnb-gold/30 shadow-glow'
              : 'hover:bg-bnb-hover border border-transparent text-gray-400 hover:text-gray-300'
          )}
        >
          {/* Background gradient on hover */}
          <div
            className={cn(
              'absolute inset-0 bg-gradient-to-r from-bnb-gold/5 to-bnb-accent/5 opacity-0',
              'group-hover:opacity-100 transition-opacity duration-200 -z-10'
            )}
          />

          {/* Icon */}
          <div
            className={cn(
              'flex-shrink-0 p-2 rounded-lg transition-all duration-200',
              isActive
                ? 'bg-gradient-to-br from-bnb-gold/30 to-bnb-accent/20 text-bnb-gold shadow-glow-accent'
                : 'group-hover:bg-bnb-hover'
            )}
          >
            {IconComponent && <IconComponent size={18} />}
          </div>

          {/* Label */}
          <span
            className={cn(
              'text-sm font-medium transition-colors duration-200',
              isActive ? 'text-gray-100' : 'text-gray-400 group-hover:text-gray-300'
            )}
          >
            {item.label}
          </span>

          {/* Active indicator dot */}
          {isActive && (
            <motion.div
              layoutId="activeDot"
              className="absolute right-3 w-2 h-2 bg-gradient-to-r from-bnb-gold to-bnb-accent rounded-full shadow-glow"
              transition={{ type: 'spring', stiffness: 380, damping: 40 }}
            />
          )}
        </div>
      </Link>
    </motion.div>
  );
};

export default SidebarLink;
