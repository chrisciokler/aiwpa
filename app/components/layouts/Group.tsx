/* eslint-disable react/display-name */
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import React from 'react';

const groupVariants = cva('flex', {
  variants: {
    spacing: {
      default: 'gap-0',
      xs: 'spacing-xs',
      sm: 'spacing-sm',
      md: 'spacing-md',
      lg: 'spacing-lg',
      xl: 'spacing-xl'
    },
    position: {
      default: 'items-center justify-start',
      left: 'items-center justify-start',
      right: 'items-center justify-end',
      center: 'items-center justify-center',
      apart: 'items-center justify-between'
    }
  },
  defaultVariants: {
    spacing: 'default',
    position: 'default'
  }
});

export interface GroupProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof groupVariants> {
  asChild?: boolean;
}

const Group = React.forwardRef<HTMLDivElement, GroupProps>(({ className, spacing, position, asChild = false, children, ...props }, ref) => {
  return (
    <div className={cn(groupVariants({ spacing, position, className }))} ref={ref} {...props}>
      {children}
    </div>
  );
});
Group.displayName = 'Group';

export { Group, groupVariants };
