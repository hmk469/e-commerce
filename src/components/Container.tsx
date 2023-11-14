import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className = '' }: ContainerProps) => {
  return (
    <div className={cn('py-10 max-w-screen-xl px-4 xl:px-0', className)}>
      {children}
    </div>
  );
};

export default Container;
