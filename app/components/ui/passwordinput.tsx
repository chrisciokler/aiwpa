'use client';
import React, { useState } from 'react';
import { Button } from './button';
import { IconEye, IconEyeOff } from '@tabler/icons-react';
import { Input, TextInputProps } from './input';

const PasswordInput = React.forwardRef<HTMLInputElement, TextInputProps>(({ className, type, variant, size, ...props }, ref) => {
  const [visible, setVisible] = useState(false);
  const toggle = () => setVisible(!visible);
  return (
    <Input
      type={visible ? 'text' : 'password'}
      ref={ref}
      {...props}
      right={
        <Button animation="none" variant="ghost" className="flex h-full items-center justify-center px-2 py-2" onClick={toggle}>
          {visible ? <IconEyeOff size={18} /> : <IconEye size={18} />}
        </Button>
      }
    />
  );
});
PasswordInput.displayName = 'PasswordInput';

export { PasswordInput };
