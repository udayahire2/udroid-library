"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../utils/cn";
import { ButtonProps } from "./Button.types";
import { buttonVariants } from "./Button.styles";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, isLoading = false, leftIcon, rightIcon, children, disabled, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";

        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                disabled={isLoading || disabled}
                ref={ref}
                {...props}
            >
                {isLoading && (
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="animate-spin size-4"
                        >
                            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                        </svg>
                    </div>
                )}
                <span
                    className={cn(
                        "flex items-center gap-2",
                        isLoading && "invisible"
                    )}
                >
                    {leftIcon && <span className="flex items-center">{leftIcon}</span>}
                    {children}
                    {rightIcon && <span className="flex items-center">{rightIcon}</span>}
                </span>
            </Comp>
        );
    }
);
Button.displayName = "Button";

export { Button };
