import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { cn } from "../../utils/cn";


export interface LikeButtonProps {
    isLiked?: boolean;
    defaultLiked?: boolean;
    count?: number;
    showCount?: boolean;
    onChange?: (isLiked: boolean) => void;
    className?: string;
    size?: "sm" | "md" | "lg";
}

export const LikeButton = ({
    isLiked: controlledLiked,
    defaultLiked = false,
    count: initialCount = 0,
    showCount = true,
    onChange,
    className,
    size = "md",
}: LikeButtonProps) => {
    const [isSharedLiked, setSharedLiked] = useState(defaultLiked);
    const isLiked = controlledLiked !== undefined ? controlledLiked : isSharedLiked;
    const [count, setCount] = useState(initialCount);

    // Sync count state effectively just for display purposes if needed, 
    // but usually count comes from backend. We'll simulate +1/-1 for UI feedback.

    useEffect(() => {
        if (controlledLiked === undefined) {
            setSharedLiked(defaultLiked);
        }
    }, [defaultLiked, controlledLiked]);

    const handleClick = () => {
        const newLikedState = !isLiked;
        if (controlledLiked === undefined) {
            setSharedLiked(newLikedState);
            setCount(prev => newLikedState ? prev + 1 : prev - 1);
        }
        onChange?.(newLikedState);
    };

    // Calculate dynamic count for display
    // If not controlled, we use local count. If controlled, user should pass updated count, 
    // but for this UI component we can just animate the transition.

    // Heart Variants for Framer Motion
    const heartVariants: Variants = {
        liked: {
            scale: [1, 1.2, 0.95, 1],
            transition: { duration: 0.4, ease: "easeInOut" }
        },
        unliked: {
            scale: 1,
            transition: { duration: 0.2 }
        },
        hover: {
            scale: 1.1,
        },
        tap: {
            scale: 0.9
        }
    };

    const countVariants = {
        initial: { y: -10, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: 10, opacity: 0 },
    };

    const sizeClasses = {
        sm: "h-8 px-2 text-xs gap-1.5",
        md: "h-10 px-3 text-sm gap-2",
        lg: "h-12 px-4 text-base gap-2.5",
    };

    const iconSizes = {
        sm: 16,
        md: 20,
        lg: 24,
    };

    return (
        <motion.button
            whileTap="tap"
            whileHover="hover"
            onClick={handleClick}
            className={cn(
                "group relative inline-flex items-center justify-center rounded-full border transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500/30",
                // Background & Border colors
                isLiked
                    ? "bg-rose-50/80 border-rose-200 text-rose-600 dark:bg-rose-500/10 dark:border-rose-500/30 dark:text-rose-400"
                    : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300 dark:bg-slate-900 dark:text-slate-400 dark:border-slate-800 dark:hover:bg-slate-800",
                sizeClasses[size],
                className
            )}
            aria-label={isLiked ? "Unlike" : "Like"}
        >
            <div className="relative flex items-center justify-center">
                {/* Outline Heart (Background for unfilled state) */}
                <motion.svg
                    width={iconSizes[size]}
                    height={iconSizes[size]}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={cn(
                        "absolute transition-opacity duration-200",
                        isLiked ? "opacity-0" : "opacity-100"
                    )}
                >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </motion.svg>

                {/* Filled Heart (Animate In) */}
                <motion.svg
                    variants={heartVariants}
                    animate={isLiked ? "liked" : "unliked"}
                    width={iconSizes[size]}
                    height={iconSizes[size]}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="0" // Filled heart doesn't strictly need stroke if using fill
                    className={cn(
                        "relative z-10",
                        isLiked ? "opacity-100" : "opacity-0"
                    )}
                >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </motion.svg>
            </div>

            {showCount && (
                <div className="relative flex flex-col overflow-hidden h-[1.2em] min-w-[1ch] items-start justify-center">
                    <AnimatePresence mode="popLayout" initial={false}>
                        <motion.span
                            key={count}
                            variants={countVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="font-medium leading-none tabular-nums"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            {count}
                        </motion.span>
                    </AnimatePresence>
                </div>
            )}
        </motion.button>
    );
};
