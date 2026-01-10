"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../utils/cn";
import { textareaVariants } from "./Textarea.styles";
import { TextareaProps } from "./Textarea.types";

/**
 * Textarea Core Component
 * "The Machined Groove"
 * 
 * Features:
 * - Ref forwarding with internal merging
 * - Isolated Auto-grow logic
 * - Slot support (Icons only)
 * - Strict resize constraints
 */
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    (
        {
            className,
            variant,
            size, // Filtered out from generic props if passed accidentally
            resize = "vertical",
            autoGrow = false,
            value,
            onChange,
            disabled,
            readOnly,
            asChild = false,
            ...props
        },
        ref
    ) => {
        const internalRef = React.useRef<HTMLTextAreaElement>(null);

        // Merge internal and external refs
        const handleRef = (node: HTMLTextAreaElement) => {
            internalRef.current = node;
            if (typeof ref === "function") {
                ref(node);
            } else if (ref) {
                (ref as React.MutableRefObject<HTMLTextAreaElement | null>).current = node;
            }
        };

        // Isolated Auto-grow Logic
        const adjustHeight = React.useCallback(() => {
            if (!autoGrow || !internalRef.current) return;

            const el = internalRef.current;
            el.style.height = "auto";
            el.style.height = `${el.scrollHeight}px`;
        }, [autoGrow]);

        // Handle initial size and value changes
        React.useLayoutEffect(() => {
            adjustHeight();
        }, [value, adjustHeight]);

        // Handle manual input
        const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            adjustHeight();
            onChange?.(e);
        };

        const handleContainerClick = () => {
            internalRef.current?.focus();
        };

        const Comp = asChild ? Slot : "textarea";

        return (
            <div
                className={cn(
                    textareaVariants({ variant, resize: autoGrow ? "none" : resize, className })
                )}
                data-disabled={disabled}
                data-readonly={readOnly}
                onClick={handleContainerClick}
            >
                <Comp
                    ref={handleRef}
                    className={cn(
                        "flex w-full bg-transparent px-3 py-2 text-sm outline-none transition-colors",
                        "file:border-0 file:bg-transparent file:text-sm file:font-medium",
                        "disabled:cursor-not-allowed disabled:opacity-50",
                        // Min height
                        "min-h-[40px]",
                        autoGrow && "overflow-hidden"
                    )}
                    disabled={disabled}
                    readOnly={readOnly}
                    onChange={handleChange}
                    value={value}
                    aria-invalid={variant === "error"}
                    {...props}
                />
            </div>
        );
    }
);

Textarea.displayName = "Textarea";

export { Textarea };
