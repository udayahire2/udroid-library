"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../utils/cn";
import { textareaVariants } from "./Textarea.styles";
import { TextareaProps } from "./Textarea.types";

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    (
        {
            className,
            variant,
            size,
            autoGrow = false,
            startContent,
            endContent,
            asChild = false,
            onChange,
            ...props
        },
        ref
    ) => {
        const internalRef = React.useRef<HTMLTextAreaElement>(null);

        // Merge internal ref with forwarded ref
        const handleRef = (node: HTMLTextAreaElement) => {
            internalRef.current = node;
            if (typeof ref === "function") {
                ref(node);
            } else if (ref) {
                (ref as React.MutableRefObject<HTMLTextAreaElement | null>).current = node;
            }
        };

        const handleContainerClick = () => {
            internalRef.current?.focus();
        };

        // Auto-grow Logic
        const adjustHeight = React.useCallback(() => {
            if (!autoGrow || !internalRef.current) return;
            const el = internalRef.current;
            el.style.height = "auto";
            el.style.height = `${el.scrollHeight}px`;
        }, [autoGrow]);

        React.useLayoutEffect(() => {
            adjustHeight();
        }, [props.value, adjustHeight]);

        const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            adjustHeight();
            onChange?.(e);
        };

        const Comp = asChild ? Slot : "textarea";

        return (
            <div
                className={cn(
                    textareaVariants({ variant, size, className })
                )}
                onClick={handleContainerClick}
            >
                {startContent && (
                    <div className="flex items-start justify-center text-muted-foreground [&_svg]:size-4 [&_svg]:shrink-0 mt-2.5">
                        {startContent}
                    </div>
                )}

                <Comp
                    ref={handleRef}
                    className={cn(
                        "flex w-full bg-transparent p-0 text-sm outline-none transition-colors hidden-scrollbar resize-none",
                        "placeholder:text-muted-foreground",
                        "disabled:cursor-not-allowed disabled:opacity-50",
                        autoGrow && "overflow-hidden"
                    )}
                    onChange={handleChange}
                    {...props}
                />

                {endContent && (
                    <div className="flex items-end justify-center text-muted-foreground [&_svg]:size-4 [&_svg]:shrink-0 self-end mb-2.5 ml-auto">
                        {endContent}
                    </div>
                )}
            </div>
        );
    }
);

Textarea.displayName = "Textarea";

export { Textarea };
