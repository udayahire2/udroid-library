"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";

import { cn } from "../../utils/cn"; // Adjust path to point to library utils
import { RadioGroupProps, RadioGroupItemProps } from "./radio.types";
import { radioGroupVariants, radioGroupItemVariants } from "./radio.styles";

const RadioGroup = React.forwardRef<
    React.ElementRef<typeof RadioGroupPrimitive.Root>,
    RadioGroupProps
>(({ className, orientation, ...props }, ref) => {
    return (
        <RadioGroupPrimitive.Root
            className={cn(radioGroupVariants({ orientation }), className)}
            {...props}
            ref={ref}
        />
    );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
    React.ElementRef<typeof RadioGroupPrimitive.Item>,
    RadioGroupItemProps
>(({ className, variant, children, ...props }, ref) => {
    return (
        <RadioGroupPrimitive.Item
            ref={ref}
            className={cn(radioGroupItemVariants({ variant }), className)}
            {...props}
        >
            {variant !== "card" && (
                <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
                    <Circle className="size-2.5 fill-current text-current" />
                </RadioGroupPrimitive.Indicator>
            )}
            {children}
        </RadioGroupPrimitive.Item>
    );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
