"use client";

import * as React from "react";
import { Checkbox } from "../../udx/src";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../udx/src";
import { Label } from "../../udx/src";
import { Sun, Moon } from "lucide-react";

export default function CheckboxPreview() {
    const [isDark, setIsDark] = React.useState(false);

    React.useEffect(() => {
        setIsDark(document.documentElement.classList.contains("dark"));
    }, []);

    const toggleTheme = () => {
        const newIsDark = !isDark;
        setIsDark(newIsDark);
        if (newIsDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };

    return (
        <div className="min-h-screen bg-background text-foreground transition-colors duration-300 p-8 flex flex-col items-center">
            <div className="absolute right-4 top-4 z-50">
                <button
                    onClick={toggleTheme}
                    className="rounded-full border border-border bg-card p-2.5 text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
                >
                    {isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
                </button>
            </div>

            <div className="w-full max-w-3xl space-y-8">
                <div className="space-y-4 text-center">
                    <h1 className="text-4xl font-bold tracking-tight">Checkbox Component</h1>
                    <p className="text-lg text-muted-foreground">
                        Premium checkbox controls with tactile animations and rigorous state handling.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Basic States */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Basic Usage</CardTitle>
                            <CardDescription>Standard checkboxes for boolean selection.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex items-center space-x-2">
                                <Checkbox id="terms" />
                                <Label htmlFor="terms">Accept terms and conditions</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="disabled" disabled />
                                <Label htmlFor="disabled">Disabled unchecked</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="disabled-checked" disabled defaultChecked />
                                <Label htmlFor="disabled-checked">Disabled checked</Label>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Variants */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Design Variants</CardTitle>
                            <CardDescription>Different shapes and sizes for varied contexts.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="flex items-center space-x-2">
                                <Checkbox id="circle" variant="circle" />
                                <Label htmlFor="circle">Circular Variant</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="large" size="lg" />
                                <Label htmlFor="large">Large Size</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id="small" size="sm" />
                                <Label htmlFor="small">Small Size</Label>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
