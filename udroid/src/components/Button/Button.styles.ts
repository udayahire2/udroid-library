import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "rounded-lg font-medium",
    "transition-colors duration-200 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    "select-none",
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-blue-600 text-white",
          "hover:bg-blue-700",
          "active:bg-blue-800",
          "focus-visible:ring-blue-500",
          "dark:bg-blue-500 dark:hover:bg-blue-600",
        ],

        secondary: [
          "bg-slate-100 text-slate-900 border border-slate-200",
          "hover:bg-slate-200",
          "active:bg-slate-300",
          "focus-visible:ring-slate-400",
          "dark:bg-slate-800 dark:text-slate-100 dark:border-slate-700",
          "dark:hover:bg-slate-700",
        ],

        outline: [
          "bg-transparent border border-slate-300 text-slate-700",
          "hover:bg-slate-50",
          "active:bg-slate-100",
          "focus-visible:ring-slate-400",
          "dark:border-slate-600 dark:text-slate-200",
          "dark:hover:bg-slate-800/50",
        ],

        ghost: [
          "bg-transparent text-slate-700",
          "hover:bg-slate-100",
          "active:bg-slate-200",
          "focus-visible:ring-slate-400",
          "dark:text-slate-300 dark:hover:bg-slate-800",
        ],

        destructive: [
          "bg-red-600 text-white",
          "hover:bg-red-700",
          "active:bg-red-800",
          "focus-visible:ring-red-500",
          "dark:bg-red-500 dark:hover:bg-red-600",
        ],

        success: [
          "bg-green-600 text-white",
          "hover:bg-green-700",
          "active:bg-green-800",
          "focus-visible:ring-green-500",
          "dark:bg-green-500 dark:hover:bg-green-600",
        ],

        solid:
          "bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-900",
      },

      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-base",
        lg: "h-12 px-6 text-lg",
      },

      tone: {
        neutral: "",
        inverse: "",
      },
    },

    compoundVariants: [
      {
        variant: "solid",
        tone: "inverse",
        className: [
          "bg-white text-slate-900 border border-slate-200",
          "hover:bg-slate-50",
          "dark:bg-slate-900 dark:text-white dark:border-slate-700",
        ],
      },
    ],

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);
