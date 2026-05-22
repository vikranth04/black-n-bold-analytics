import React from 'react';
import { cn } from '@/utils/cn';

interface PageHeaderProps {
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  action,
  className,
}) => {
  return (
    <div className={cn('mb-8 flex items-start justify-between', className)}>
      <div>
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2">{title}</h1>
        {description && (
          <p className="text-gray-400 text-lg max-w-2xl">{description}</p>
        )}
      </div>
      {action && <div className="flex items-center gap-3">{action}</div>}
    </div>
  );
};

export default PageHeader;
