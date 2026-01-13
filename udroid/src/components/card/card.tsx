"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../utils/cn";
import {
    CardProps,
    CardHeaderProps,
    CardTitleProps,
    CardDescriptionProps,
    CardContentProps,
    CardFooterProps,
} from "./card.types";
import {
    cardVariants,
    cardHeaderClasses,
    cardTitleClasses,
    cardDescriptionClasses,
    cardContentClasses,
    cardFooterClasses,
} from "./card.styles";

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "div";
        return (
            <Comp
                ref={ref}
                className={cn(cardVariants({ variant }), className)}
                {...props}
            />
        );
    }
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
    ({ className, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "div";
        return (
            <Comp
                ref={ref}
                className={cn(cardHeaderClasses, className)}
                {...props}
            />
        );
    }
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
    ({ className, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "h3";
        return (
            <Comp
                ref={ref}
                className={cn(cardTitleClasses, className)}
                {...props}
            />
        );
    }
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
    HTMLParagraphElement,
    CardDescriptionProps
>(({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "p";
    return (
        <Comp
            ref={ref}
            className={cn(cardDescriptionClasses, className)}
            {...props}
        />
    );
});
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
    ({ className, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "div";
        return (
            <Comp
                ref={ref}
                className={cn(cardContentClasses, className)}
                {...props}
            />
        );
    }
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
    ({ className, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "div";
        return (
            <Comp
                ref={ref}
                className={cn(cardFooterClasses, className)}
                {...props}
            />
        );
    }
);
CardFooter.displayName = "CardFooter";

export {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardDescription,
    CardContent,
};
