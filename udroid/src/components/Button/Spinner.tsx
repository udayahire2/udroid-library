
import React from 'react';

export const Spinner = ({ className = '', size }: { className?: string; size?: number }) => {
    // If size is provided, we use it. Otherwise, we rely on className (e.g. w-5 h-5).
    const style = size ? { width: size, height: size } : undefined;
    const dimensionProps = size ? { width: size, height: size } : {};

    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`animate-spin ${className}`}
            data-testid="udroid-ui-spinner"
            style={style}
            {...dimensionProps}
        >
            <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
            />
            <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
            <style>{`
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin {
                    animation: spin 1s linear infinite;
                }
            `}</style>
        </svg>
    );
};
