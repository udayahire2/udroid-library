import React, { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Spinner } from './Spinner';
import { cn } from '../../utils/cn';
import { variantStyles, sizeStyles, iconSizes, ButtonVariant, ButtonSize } from './Button.styles';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onAnimationStart' | 'onDrag' | 'onDragStart' | 'onDragEnd' | 'style'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  asChild?: boolean; // Reserved for future Slot implementation
}

// Helper to inject classes into icons (Heroicons support)
const injectIconStyles = (icon: ReactNode, className: string) => {
  if (React.isValidElement(icon)) {
    return React.cloneElement(icon as React.ReactElement<any>, {
      className: cn(className, (icon.props as any).className),
    });
  }
  return icon;
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
      disabled,
      type = 'button',
      onClick,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || isLoading;
    const iconSizeClass = iconSizes[size];

    // State for liquid click effect
    const [ripple, setRipple] = React.useState<{ x: number; y: number; key: number; active: boolean }>({
      x: 0,
      y: 0,
      key: 0,
      active: false,
    });

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Trigger new ripple with unique key
      setRipple({ x, y, key: Date.now(), active: true });

      // Call original onClick
      if (onClick) {
        onClick(e);
      }

      // Auto-remove ripple from DOM after animation
      setTimeout(() => {
        setRipple((prev) => ({ ...prev, active: false }));
      }, 800);
    };

    return (
      <motion.button
        ref={ref}
        type={type}
        disabled={isDisabled}
        onClick={isDisabled ? undefined : handleClick}
        aria-disabled={isDisabled}
        aria-busy={isLoading}
        whileTap={{ scale: 0.99 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20, mass: 0.8 }} // Smoother, less snappy spring
        className={cn(
          // Base Layout
          'relative inline-flex items-center justify-center whitespace-nowrap select-none overflow-hidden',
          // Transitions
          'transition-transform duration-200 active:scale-95',
          // Focus Accessibility
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2 dark:focus-visible:ring-blue-400/50 dark:focus-visible:ring-offset-slate-900',
          // Disabled State
          'disabled:pointer-events-none disabled:opacity-50 disabled:grayscale',
          // Custom Styles
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props as any}
      >
        {/* Imploding Ripple/Ticker Click Overlay */}
        {!isDisabled && ripple.active && (
          <motion.span
            key={ripple.key}
            className="absolute rounded-full bg-white/30 dark:bg-white/10 pointer-events-none"
            initial={{ scale: 150, opacity: 0.5 }} // Start HUGE
            animate={{
              scale: 0,        // Shrink to nothing
              opacity: 0,      // Fade out
            }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} // Smooth implosion
            style={{
              left: ripple.x,
              top: ripple.y,
              width: 10,
              height: 10,
              x: '-50%',
              y: '-50%',
            }}
          />
        )}

        {/* Loading Overlay */}
        {isLoading && (
          <span className="absolute inset-0 flex items-center justify-center z-20">
            <Spinner className={iconSizeClass} />
          </span>
        )}

        {/* Content (z-index to stay on top of liquid) */}
        <span
          className={cn(
            'flex items-center justify-center gap-[inherit] relative z-10',
            isLoading && 'opacity-0 invisible'
          )}
        >
          {leftIcon && (
            <span className="inline-flex items-center flex-shrink-0">
              {injectIconStyles(leftIcon, iconSizeClass)}
            </span>
          )}
          {children}
          {rightIcon && (
            <span className="inline-flex items-center flex-shrink-0">
              {injectIconStyles(rightIcon, iconSizeClass)}
            </span>
          )}
        </span>
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

