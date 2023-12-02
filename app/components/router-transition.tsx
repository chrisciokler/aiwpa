'use client';

import * as React from 'react';

import { Progress } from '@/components/ui/progress';
import { usePathname } from 'next/navigation';

export const RouterTransition = () => {
  const pathname = usePathname();
  const [progress, setProgress] = React.useState(0);

  const start = () => {
    const timer = setTimeout(() => setProgress(0), 500);
    return () => clearTimeout(timer);
  };

  const begin = () => {
    const timer = setTimeout(() => setProgress(10), 500);
    return () => clearTimeout(timer);
  };

  const middle = () => {
    const timer = setTimeout(() => setProgress(45), 500);
    return () => clearTimeout(timer);
  };

  const end = () => {
    const timer = setTimeout(() => setProgress(100), 500);
    return () => clearTimeout(timer);
  };

  React.useEffect(() => {
    begin();
    middle();
    end();
    start();
  }, [pathname]);

  return <Progress value={progress} className="fixed left-0 top-0 z-[999] w-full" />;
};
