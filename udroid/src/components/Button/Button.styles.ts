export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'success';
export type ButtonSize = 'sm' | 'md' | 'lg';

// Premium Design Tokens with improved spacing and depth
export const variantStyles: Record<ButtonVariant, string> = {
    primary:
        'bg-blue-600 text-white border border-transparent shadow-[0_2px_4px_rgba(37,99,235,0.2)] ' +
        'hover:bg-blue-700 ' +
        'active:bg-blue-800 ' +
        'dark:bg-blue-500 dark:hover:bg-blue-400 dark:shadow-none',

    secondary:
        'bg-white text-gray-900 border border-gray-200 shadow-sm ' +
        'hover:bg-gray-50 hover:border-gray-300 ' +
        'active:bg-gray-100 ' +
        'dark:bg-slate-800 dark:text-gray-100 dark:border-slate-700 dark:hover:bg-slate-750',

    outline:
        'bg-transparent text-blue-600 border border-blue-600/80 ' +
        'hover:bg-blue-50/50 hover:border-blue-700 ' +
        'active:bg-blue-100/50 ' +
        'dark:text-blue-400 dark:border-blue-400/80 dark:hover:bg-blue-900/20',

    ghost:
        'bg-transparent text-gray-600 border border-transparent shadow-none ' +
        'hover:bg-gray-100 hover:text-gray-900 ' +
        'active:bg-gray-200 ' +
        'dark:text-gray-400 dark:hover:bg-slate-800 dark:hover:text-gray-200',

    destructive:
        'bg-red-600 text-white border border-transparent shadow-[0_2px_4px_rgba(220,38,38,0.2)] ' +
        'hover:bg-red-700 ' +
        'active:bg-red-800 ' +
        'dark:bg-red-900/80 dark:text-red-100 dark:hover:bg-red-900',

    success:
        'bg-emerald-600 text-white border border-transparent shadow-[0_2px_4px_rgba(5,150,105,0.2)] ' +
        'hover:bg-emerald-700 ' +
        'active:bg-emerald-800 ' +
        'dark:bg-emerald-600 dark:hover:bg-emerald-500',
};

// Refined Size System for better optical balance
export const sizeStyles: Record<ButtonSize, string> = {
    sm: 'h-9 min-w-[36px] px-3.5 text-[13px] font-medium rounded-md gap-2',
    md: 'h-10 min-w-[44px] px-5 text-[14px] font-medium rounded-lg gap-2',
    lg: 'h-12 min-w-[50px] px-7 text-[16px] font-semibold rounded-xl gap-2.5',
};

export const iconSizes: Record<ButtonSize, number> = {
    sm: 16,
    md: 18,
    lg: 20,
};
