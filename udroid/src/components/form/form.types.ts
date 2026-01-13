import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
import { ControllerProps, FieldPath, FieldValues } from "react-hook-form";

export type FormItemContextValue = {
    id: string;
};

export type FormFieldContextValue<
    TFieldValues extends FieldValues = FieldValues,
    TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {
    name: TName;
};

export interface FormItemProps extends React.HTMLAttributes<HTMLDivElement> {
    asChild?: boolean;
}

export interface FormLabelProps
    extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {
    asChild?: boolean;
}

export interface FormControlProps
    extends React.ComponentPropsWithoutRef<typeof Slot> {
    asChild?: boolean; // Slot always needs asChild implicitly usually, but we explicit define for clarity
}

export interface FormDescriptionProps
    extends React.HTMLAttributes<HTMLParagraphElement> {
    asChild?: boolean;
}

export interface FormMessageProps
    extends React.HTMLAttributes<HTMLParagraphElement> {
    asChild?: boolean;
}
