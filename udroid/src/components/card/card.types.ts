import * as React from "react";
import { VariantProps } from "../../utils/variants";
import { cardVariants } from "./card.styles";

export interface CardProps
    extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
    asChild?: boolean;
}

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    asChild?: boolean;
}

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    asChild?: boolean;
}

export interface CardDescriptionProps
    extends React.HTMLAttributes<HTMLParagraphElement> {
    asChild?: boolean;
}

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
    asChild?: boolean;
}

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    asChild?: boolean;
}
