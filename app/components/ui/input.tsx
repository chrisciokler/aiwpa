import * as React from 'react';
import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

export type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type InputVariants = 'default' | 'filled';
export const inputWrapperVariants = cva(
  'flex items-center overflow-hidden min-w-[220px] transition-colors file:border-0 focus:border-primary focus-within:border-primary',
  {
    variants: {
      variant: {
        default: 'border bg-card',
        filled: 'bg-card',
        outlined: 'border bg-transparent'
      },
      shadow: {
        none: 'shadow-none',
        sm: 'shadow-sm',
        md: 'shadow-md',
        lg: 'shadow-lg',
        xl: 'shadow-xl'
      }
    },
    defaultVariants: {
      variant: 'outlined',
      shadow: 'none'
    }
  }
);

export const inputVariants = cva(
  'flex items-center flex-1 bg-transparent file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      size: {
        xs: 'input-size-xs',
        sm: 'input-size-sm',
        md: 'input-size-md',
        lg: 'input-size-lg',
        xl: 'input-size-xl'
      }
    },
    defaultVariants: {
      size: 'md'
    }
  }
);

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>;

export type WrapperInputProps = VariantProps<typeof inputWrapperVariants>;

export interface TextInputProps extends InputProps, WrapperInputProps, VariantProps<typeof inputVariants> {
  right?: React.ReactNode;
  left?: React.ReactNode;
}

const Input = React.forwardRef<HTMLInputElement, TextInputProps>(({ className, type, variant, size, ...props }, ref) => {
  return (
    <div className={cn(inputWrapperVariants({ variant, className }))}>
      {props.left && props.left}
      <input type={type} className={cn(inputVariants({ size, className }))} ref={ref} {...props} />
      {props.right && props.right}
    </div>
  );
});
Input.displayName = 'Input';

export { Input };
