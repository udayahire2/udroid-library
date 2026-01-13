import { cva } from "class-variance-authority";

export const textareaVariants = cva(
    // Base: "The Machined Groove"
    // - Wrapper acts as the physical "well" / "recess"
    // - Inset shadow for true visual depth
    // - Sharp border for the machined edge cut
    // - Removing generic glows for confident state changes
    "group flex w-full rounded-lg border border-input text-sm transition-all duration-200 ease-out focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
    {
        variants: {
            variant: {
                default: [
                    // Light/Dark Mode: Semantic Tokens
                    "bg-background",
                    "shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)]", // Exact match to Input shadow
                    "placeholder:text-muted-foreground",

                    // Hover
                    "hover:border-accent-foreground/50 hover:bg-accent/5",
                ],
                filled: [
                    // A softer, deeper channel - less "cut", more "molded"
                    "border-transparent bg-muted/50",
                    "shadow-[inset_0_1px_3px_rgba(0,0,0,0.04)]",
                    "placeholder:text-muted-foreground",

                    // Hover
                    "hover:bg-muted/70",

                    // Focus
                    "focus-within:bg-background focus-within:border-input focus-within:shadow-sm",
                ],
                error: [
                    // Surface Tension: The material feels "stressed"
                    "border-destructive bg-destructive/5 text-destructive",
                    "shadow-[inset_0_2px_4px_rgba(220,38,38,0.04)]", // Subtle red shadow
                    "placeholder:text-destructive/60",

                    // Focus: High alert
                    "focus-within:ring-destructive/30 focus-within:bg-background",
                    "focus-within:shadow-[inset_0_1px_1px_rgba(220,38,38,0.05)]",
                ],
            },
            size: {
                sm: "min-h-[60px] px-3 py-2",
                md: "min-h-[80px] px-3 py-2",
                lg: "min-h-[100px] px-4 py-3",
            },
            resize: {
                none: "[&>textarea]:resize-none",
                vertical: "[&>textarea]:resize-y",
            },
        },
        defaultVariants: {
            variant: "default",
            resize: "vertical",
            size: "md",
        },
    }
);
