import * as React from 'react';

/* ----------------------------------
 * Button visual variants
 * ---------------------------------- */
export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'destructive'
  | 'success'
  | 'solid';

/* ----------------------------------
 * Button sizes
 * ---------------------------------- */
export type ButtonSize = 'sm' | 'md' | 'lg';

/* ----------------------------------
 * Tone (only applies to solid variant)
 * ---------------------------------- */
export type ButtonTone = 'neutral' | 'inverse';

/* ----------------------------------
 * Button props
 * ---------------------------------- */
export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> {
  /**
   * Visual style of the button
   * @default 'primary'
   */
  variant?: ButtonVariant;

  /**
   * Button size
   * @default 'md'
   */
  size?: ButtonSize;

  /**
   * Tone modifier (used with `solid` variant)
   */
  tone?: ButtonTone;

  /**
   * Shows loading state and disables the button
   * @default false
   */
  isLoading?: boolean;

  /**
   * Left icon (before content)
   */
  leftIcon?: React.ReactNode;

  /**
   * Right icon (after content)
   */
  rightIcon?: React.ReactNode;

  /**
   * Disable the button
   */
  disabled?: boolean;

  /**
   * Custom class names
   */
  className?: string;

  /**
   * Button content
   */
  children: React.ReactNode;
}
