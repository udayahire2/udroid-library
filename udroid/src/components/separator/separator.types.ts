import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { VariantProps } from "class-variance-authority";
import { separatorVariants } from "./separator.styles";

export interface SeparatorProps
    extends React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>,
    Omit<VariantProps<typeof separatorVariants>, "orientation"> {
    orientation?: "horizontal" | "vertical";
}
