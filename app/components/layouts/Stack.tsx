/* eslint-disable react/display-name */
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import React from 'react';

const stackVariants = cva('stack', {
  variants: {
    spacing: {
      default: 'gap-0',
      xs: 'gap-[0.5rem]',
      sm: 'gap-[0.75rem]',
      md: 'gap-[1rem]',
      lg: 'gap-[1.25rem]',
      xl: 'gap-[1.75rem]'
    }
  },
  defaultVariants: {
    spacing: 'default'
  }
});

export interface StackProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof stackVariants> {
  asChild?: boolean;
}

const Stack = React.forwardRef<HTMLDivElement, StackProps>(({ className, spacing, asChild = false, children, ...props }, ref) => {
  return (
    <div className={cn(stackVariants({ spacing, className }))} ref={ref} {...props}>
      {children}
    </div>
  );
});
Stack.displayName = 'Stack';

export { Stack, stackVariants };
