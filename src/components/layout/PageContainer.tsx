import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  animate?: boolean;
}

const PageContainer: React.FC<PageContainerProps> = ({
  children,
  className,
  animate = true,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  if (!animate) {
    return (
      <div className={cn('w-full h-full px-4 lg:px-8 py-6 lg:py-8', className)}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={cn('w-full h-full px-4 lg:px-8 py-6 lg:py-8', className)}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={itemVariants}>{child}</motion.div>
      ))}
    </motion.div>
  );
};

export default PageContainer;
