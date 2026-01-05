export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'success';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

// Premium Design Tokens with 3D depth, rich gradients, and optical alignment
export const variantStyles: Record<ButtonVariant, string> = {
    primary:
        'bg-gradient-to-b from-blue-500 to-blue-600 text-white shadow-[0_1px_2px_rgba(0,0,0,0.15),0_0_0_1px_rgba(59,130,246,0.5),inset_0_1px_0.5px_rgba(255,255,255,0.2)] ' +
        'hover:from-blue-400 hover:to-blue-500 hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_0_0_1px_rgba(59,130,246,0.6),inset_0_1px_1px_rgba(255,255,255,0.3)] ' +
        'active:from-blue-600 active:to-blue-700 active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] ' +
        'dark:from-blue-600 dark:to-blue-700 dark:text-blue-50 dark:shadow-[0_1px_3px_rgba(0,0,0,0.4),0_0_0_1px_rgba(30,58,138,0.5),inset_0_1px_0.5px_rgba(255,255,255,0.1)] ' +
        'dark:hover:from-blue-500 dark:hover:to-blue-600 dark:hover:shadow-[0_4px_12px_rgba(59,130,246,0.3),0_0_0_1px_rgba(59,130,246,0.5)]',

    secondary:
        'bg-white text-gray-700 shadow-[0_1px_2px_rgba(0,0,0,0.1),0_0_0_1px_rgba(229,231,235,1)] ' +
        'hover:bg-gray-50 hover:text-gray-900 hover:shadow-[0_1px_2px_rgba(0,0,0,0.05),0_0_0_1px_rgba(209,213,219,1)] ' +
        'active:bg-gray-100 ' +
        'dark:bg-slate-800 dark:text-gray-200 dark:shadow-[0_1px_2px_rgba(0,0,0,0.4),0_0_0_1px_rgba(51,65,85,1)] ' +
        'dark:hover:bg-slate-700 dark:hover:text-white dark:hover:shadow-[0_2px_8px_rgba(0,0,0,0.5),0_0_0_1px_rgba(71,85,105,1)]',

    outline:
        'bg-transparent text-gray-700 border border-gray-300 ' +
        'hover:bg-gray-50 hover:text-gray-900 hover:border-gray-400 ' +
        'active:bg-gray-100 ' +
        'dark:text-gray-300 dark:border-slate-600 ' +
        'dark:hover:bg-slate-800 dark:hover:text-white dark:hover:border-slate-500',

    ghost:
        'bg-transparent text-gray-600 border border-transparent shadow-none ' +
        'hover:bg-gray-100 hover:text-gray-900 ' +
        'active:bg-gray-200 ' +
        'dark:text-gray-400 dark:hover:bg-slate-800 dark:hover:text-gray-100',

    destructive:
        'bg-gradient-to-b from-red-500 to-red-600 text-white shadow-[0_1px_2px_rgba(0,0,0,0.15),0_0_0_1px_rgba(220,38,38,0.5),inset_0_1px_0.5px_rgba(255,255,255,0.2)] ' +
        'hover:from-red-400 hover:to-red-500 hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_0_0_1px_rgba(239,68,68,0.6),inset_0_1px_1px_rgba(255,255,255,0.3)] ' +
        'active:from-red-600 active:to-red-700 active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)] ' +
        'dark:from-red-900 dark:to-red-950 dark:text-red-100 dark:shadow-[0_1px_2px_rgba(0,0,0,0.4),0_0_0_1px_rgba(127,29,29,0.5),inset_0_1px_0.5px_rgba(255,255,255,0.1)] ' +
        'dark:hover:from-red-800 dark:hover:to-red-900 dark:hover:shadow-[0_4px_12px_rgba(220,38,38,0.3),0_0_0_1px_rgba(185,28,28,0.5)]',

    success:
        'bg-gradient-to-b from-emerald-500 to-emerald-600 text-white shadow-[0_1px_2px_rgba(0,0,0,0.15),0_0_0_1px_rgba(5,150,105,0.5),inset_0_1px_0.5px_rgba(255,255,255,0.2)] ' +
        'hover:from-emerald-400 hover:to-emerald-500 hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_0_0_1px_rgba(16,185,129,0.6),inset_0_1px_1px_rgba(255,255,255,0.3)] ' +
        'active:from-emerald-600 active:to-emerald-700 ' +
        'dark:from-emerald-600 dark:to-emerald-700 dark:text-emerald-50 dark:shadow-[0_1px_2px_rgba(0,0,0,0.4),0_0_0_1px_rgba(6,95,70,0.5),inset_0_1px_0.5px_rgba(255,255,255,0.1)] ' +
        'dark:hover:from-emerald-500 dark:hover:to-emerald-600 dark:hover:shadow-[0_4px_12px_rgba(16,185,129,0.3),0_0_0_1px_rgba(5,150,105,0.5)]',
};

// Refined Size System for better optical balance
export const sizeStyles: Record<ButtonSize, string> = {
    sm: 'h-8 px-3 text-xs font-medium rounded-md gap-1.5',
    md: 'h-10 px-4 text-sm font-medium rounded-lg gap-2',
    lg: 'h-11 px-6 text-base font-semibold rounded-lg gap-2.5',
    xl: 'h-14 px-8 text-lg font-bold rounded-xl gap-3',
};

export const iconSizes: Record<ButtonSize, string> = {
    sm: 'size-3.5', // 14px
    md: 'size-4',   // 16px
    lg: 'size-[18px]', // 18px
    xl: 'size-5',   // 20px
};
