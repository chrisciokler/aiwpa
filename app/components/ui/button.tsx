import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Loader } from './loader';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
  {
    variants: {
      variant: {
        default: 'border border-primary bg-primary text-primary-foreground hover:bg-primary-hovered hover:border-primary-hovered',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
        secondary: 'border border-input bg-card text-secondary-foreground hover:bg-card/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'underline-offset-4 hover:underline text-primary'
      },
      shadow: {
        none: 'shadow-none',
        sm: 'shadow-sm',
        md: 'shadow-md',
        lg: 'shadow-lg',
        xl: 'shadow-xl'
      },
      animation: {
        down: 'active:translate-y-[0.10rem]',
        none: 'active:translate-y-[0rem]'
      },
      size: {
        xs: 'button-size-xs',
        sm: 'button-size-sm',
        md: 'button-size-md',
        lg: 'button-size-lg',
        xl: 'button-size-xl',
        iconxs: 'p-1',
        iconsm: 'p-2',
        iconmd: 'p-3',
        iconlg: 'p-4',
        iconxl: 'p-6'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      animation: 'down',
      shadow: 'none'
    }
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, animation, size, asChild = false, loading, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn(buttonVariants({ variant, size, animation, className }))} ref={ref} {...props}>
        {loading && <Loader className="mr-4 h-[1rem] w-[1rem]" />}

        {props.children}
      </Comp>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
