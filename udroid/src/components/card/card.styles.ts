import { cva } from "../../utils/variants";

export const cardVariants = cva(
    "rounded-xl border bg-card text-card-foreground shadow-sm animate-in fade-in-0 zoom-in-95",
    {
        variants: {
            variant: {
                default: "bg-background",
                glass: "bg-background/60 backdrop-blur-md border-white/10 dark:border-white/5",
                marketing: "bg-gradient-to-br from-background to-secondary/20",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

/* 
 * We don't necessarily need CVA for the sub-components if they don't have variants, 
 * but we can export class strings or just use utility classes in the component.
 * However, defining base styles here keeps things clean.
 */

export const cardHeaderClasses = "flex flex-col space-y-1.5 p-6";

export const cardTitleClasses =
    "text-xl font-semibold leading-none tracking-tight";

export const cardDescriptionClasses = "text-sm text-muted-foreground";

export const cardContentClasses = "p-6 pt-0";

export const cardFooterClasses = "flex items-center p-6 pt-0";
