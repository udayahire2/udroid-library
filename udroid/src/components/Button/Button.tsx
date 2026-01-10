'use client';

import * as React from 'react';
import { forwardRef } from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@/udroid/src/utils/cn';
import { buttonVariants } from './Button.styles';
import type { ButtonProps } from './Button.types';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      tone,
      isLoading = false,
      leftIcon,
      rightIcon,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || isLoading;

    return (
      <button
        ref={ref}
        className={cn(
          buttonVariants({ variant, size, tone }),
          'relative inline-flex items-center justify-center',
          className
        )}
        disabled={isDisabled}
        aria-busy={isLoading}
        {...props}
      >
        {/* Loading overlay */}
        {isLoading && (
          <span
            className="absolute inset-0 flex items-center justify-center"
            aria-hidden
          >
            <Loader2
              className="animate-spin"
              size={size === 'sm' ? 14 : size === 'lg' ? 18 : 16}
            />
          </span>
        )}

        {/* Content */}
        <span
          className={cn(
            'inline-flex items-center gap-2',
            isLoading && 'opacity-0'
          )}
        >
          {leftIcon && <span className="shrink-0">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="shrink-0">{rightIcon}</span>}
        </span>
      </button>
    );
  }
);

Button.displayName = 'Button';
