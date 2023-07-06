/* eslint-disable react/prop-types */
'use client';
import * as React from 'react';
import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

const textareaVariants = cva(
  'flex min-h-[60px] w-full focus-visible:outline-none placeholder:text-muted-foreground focus:border-primary disabled:cursor-not-allowed disabled:opacity-50 resize-none scrollbar-thumb-rounded scrollbar-thumb-gray-500 scrollbar-track-gray-300',
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
      },
      size: {
        xs: 'input-size-xs',
        sm: 'input-size-sm',
        md: 'input-size-md',
        lg: 'input-size-lg',
        xl: 'input-size-xl'
      }
    },
    defaultVariants: {
      size: 'md',
      variant: 'outlined',
      shadow: 'none'
    }
  }
);

// eslint-disable-next-line prettier/prettier
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement>, VariantProps<typeof textareaVariants> { }

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, size, ...props }, ref) => {
  return <textarea className={cn(textareaVariants({ size, className }))} ref={ref} {...props} />;
});
Textarea.displayName = 'Textarea';

export { Textarea };

export const TextareaAutosize = (props: TextareaProps) => {
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  React.useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const textarea = textareaRef.current!; // Add the non-null assertion operator here

    const adjustTextareaHeight = () => {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    };

    textarea.addEventListener('input', adjustTextareaHeight);

    return () => {
      textarea.removeEventListener('input', adjustTextareaHeight);
    };
  }, []);

  return <Textarea className="scrollbar-hidden" {...props} ref={textareaRef} />;
};
