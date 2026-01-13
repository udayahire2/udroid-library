import { ComponentProps } from "react";
import { VariantProps } from "../../utils/variants";
import { buttonVariants } from "./Button.styles";

export interface ButtonProps
    extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}
