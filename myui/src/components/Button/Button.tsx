import React, { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';
import { Spinner } from './Spinner';
import { cn } from '../../utils/cn';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'success';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  asChild?: boolean;
}

// Premium Design Tokens
const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-blue-600 text-white shadow-sm border border-transparent ' +
    'hover:bg-blue-700 hover:shadow-md ' +
    'active:scale-[0.98] ' +
    'dark:bg-blue-500 dark:hover:bg-blue-400',

  secondary:
    'bg-white text-gray-900 border border-gray-200 shadow-sm ' +
    'hover:bg-gray-50 ' +
    'active:scale-[0.98] ' +
    'dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700 dark:hover:bg-gray-700',

  outline:
    'bg-transparent text-blue-600 border border-blue-600 ' +
    'hover:bg-blue-50/50 ' +
    'active:scale-[0.98] ' +
    'dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-500/10',

  ghost:
    'bg-transparent text-gray-600 border border-transparent ' +
    'hover:bg-gray-100 hover:text-gray-900 ' +
    'active:scale-[0.98] ' +
    'dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white',

  destructive:
    'bg-red-600 text-white shadow-sm border border-transparent ' +
    'hover:bg-red-700 ' +
    'active:scale-[0.98] ' +
    'dark:bg-red-500 dark:hover:bg-red-400',

  success:
    'bg-emerald-600 text-white shadow-sm border border-transparent ' +
    'hover:bg-emerald-700 ' +
    'active:scale-[0.98] ' +
    'dark:bg-emerald-500 dark:hover:bg-emerald-400',
};

// UX-Optimized Size System (8px grid, WCAG touch targets, optical balance)
const sizeStyles: Record<ButtonSize, string> = {
  // Small: 32px height (compact UI, tables, toolbars)
  sm: 'h-8 min-w-[64px] px-3 text-[13px] leading-[32px] font-medium rounded-md gap-1.5',

  // Medium: 40px height (default, forms, cards) - Approaches WCAG 44px guideline
  md: 'h-10 min-w-[80px] px-4 text-sm leading-[40px] font-medium rounded-lg gap-2',

  // Large: 48px height (CTAs, hero sections) - Exceeds WCAG AAA (44px minimum)
  lg: 'h-12 min-w-[96px] px-6 text-base leading-[48px] font-medium rounded-[10px] gap-2.5',
};

const iconSizes: Record<ButtonSize, number> = {
  sm: 14,
  md: 16,
  lg: 20
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      disabled,
      type = 'button',
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || isLoading}
        aria-disabled={disabled || isLoading}
        aria-busy={isLoading}
        className={cn(
          // Base Layout & Motion
          'relative inline-flex items-center justify-center whitespace-nowrap transition-all duration-200 ease-out select-none',
          // Focus Accessibility
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2 dark:focus-visible:ring-blue-400/50 dark:focus-visible:ring-offset-gray-900',
          // Disabled State
          'disabled:pointer-events-none disabled:opacity-50 disabled:grayscale-[0.2]',
          // Variants & Sizes
          variantStyles[variant],
          sizeStyles[size],
          // Full Width Props
          fullWidth && 'w-full',
          className
        )}
        {...props}
      >
        {/* Loading Spinner Overlays Content */}
        {isLoading && (
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-current opacity-100">
            <Spinner size={iconSizes[size]} />
          </span>
        )}

        {/* Content (Hidden when loading but preserves width) */}
        <span
          className={cn(
            'flex items-center',
            isLoading && 'opacity-0 invisible'
          )}
          style={{ gap: 'inherit' }} // Inherit gap from sizeStyles
        >
          {leftIcon && <span className="inline-flex items-center flex-shrink-0">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="inline-flex items-center flex-shrink-0">{rightIcon}</span>}
        </span>
      </button>
    );
  }
);

Button.displayName = 'Button';
