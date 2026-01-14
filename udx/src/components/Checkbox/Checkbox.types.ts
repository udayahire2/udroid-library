import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { VariantProps } from "class-variance-authority";
import { checkboxVariants } from "./Checkbox.styles";

export interface CheckboxProps
    extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkboxVariants> {
    /**
     * Whether the checkbox is in an indeterminate state.
     * Use this for "select all" scenarios.
     */
    indeterminate?: boolean;
}
