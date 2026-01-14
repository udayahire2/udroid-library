"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check, Minus } from "lucide-react";
import { cn } from "../../utils/cn";
import { CheckboxProps } from "./Checkbox.types";
import { checkboxVariants, indicatorVariants } from "./Checkbox.styles";
import { motion, AnimatePresence } from "framer-motion";

const Checkbox = React.forwardRef<
    React.ElementRef<typeof CheckboxPrimitive.Root>,
    CheckboxProps
>(({ className, size, variant, children, indeterminate, ...props }, ref) => {
    return (
        <CheckboxPrimitive.Root
            ref={ref}
            className={cn(checkboxVariants({ size, variant }), className)}
            {...props}
        >
            <CheckboxPrimitive.Indicator
                className={cn(indicatorVariants())}
                asChild // We render our own Motion logic inside
            >
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    transition={{ duration: 0.2, type: "spring", stiffness: 300, damping: 20 }}
                >
                    {indeterminate ? (
                        <Minus className="h-3.5 w-3.5" strokeWidth={3} />
                    ) : (
                        <Check className={cn("h-3.5 w-3.5", size === "lg" && "h-4 w-4")} strokeWidth={3} />
                    )}
                </motion.div>
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
    );
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
