import { cva } from "../../utils/variants";

export const formItemVariants = cva("space-y-2");

export const formLabelVariants = cva(
    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
    {
        variants: {
            error: {
                true: "text-destructive",
            },
        },
    }
);

export const formDescriptionVariants = cva("text-[0.8rem] text-muted-foreground");


