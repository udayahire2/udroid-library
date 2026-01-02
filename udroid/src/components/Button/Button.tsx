import React, { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { Spinner } from './Spinner';
import { cn } from '../../utils/cn';
import { variantStyles, sizeStyles, iconSizes, ButtonVariant, ButtonSize } from './Button.styles';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onAnimationStart' | 'onDrag' | 'onDragStart' | 'onDragEnd' | 'style'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  asChild?: boolean;
}

// Combine standard button props with specific motion props we want to expose if any,
// but usually wrapping HTMLButtonElement attributes is enough for TS unless we expoose motion props directly.
// To allow motion props (like whileHover), we can intersection with HTMLMotionProps<"button">.
// However, to keep it simple and safe, we can just use the motion.button internally and allow passed props
// to flow through if they match.
// For now, let's treat it as a standard button with internal motion behavior.

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
      <motion.button
        ref={ref}
        type={type}
        disabled={disabled || isLoading}
        aria-disabled={disabled || isLoading}
        aria-busy={isLoading}
        whileTap={{ scale: 0.97 }}
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        className={cn(
          // Base Layout & Shared Styles
          'relative inline-flex items-center justify-center whitespace-nowrap transition-colors duration-200 select-none overflow-hidden',
          // Focus Accessibility
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2 dark:focus-visible:ring-blue-400/50 dark:focus-visible:ring-offset-slate-900',
          // Disabled State
          'disabled:pointer-events-none disabled:opacity-60 disabled:grayscale-[0.1]',
          // Variants & Sizes
          variantStyles[variant],
          sizeStyles[size],
          // Full Width
          fullWidth && 'w-full',
          className
        )}
        {...props as any} // Cast comfortably to motions props compatible
      >
        {/* Loading Spinner Overlay */}
        {isLoading && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-current"
          >
            <Spinner size={iconSizes[size]} />
          </motion.span>
        )}

        {/* Content */}
        <span
          className={cn(
            'flex items-center justify-center gap-[inherit]',
            isLoading && 'opacity-0 invisible'
          )}
        >
          {leftIcon && <span className="inline-flex items-center flex-shrink-0">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="inline-flex items-center flex-shrink-0">{rightIcon}</span>}
        </span>
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

