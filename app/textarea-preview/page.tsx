"use client";

import * as React from "react";
import { Moon, Sun, Mail, MessageSquare, Mic, Send, AlertCircle } from "lucide-react";

import { Textarea } from "@/udroid/src/components/textarea/Textarea";
import { Label } from "@/udroid/src/components/label/label";
import { Separator } from "@/udroid/src/components/separator/separator";

export default function TextareaPreview() {
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
        <div className="min-h-screen bg-background text-foreground transition-colors duration-300 p-8">
            {/* Theme Toggle */}
            <div className="absolute right-4 top-4 z-50">
                <button
                    onClick={toggleTheme}
                    className="rounded-full border border-border bg-card p-2.5 text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
                >
                    {isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
                </button>
            </div>

            <div className="mx-auto max-w-4xl space-y-12">
                <div className="space-y-4 text-center">
                    <h1 className="text-4xl font-bold tracking-tight">Textarea</h1>
                    <p className="text-lg text-muted-foreground">
                        A premium, auto-growing textarea component with various styles and states.
                    </p>
                </div>

                <Separator />

                {/* 1. Basic Usage */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Basic Usage</h2>
                    <div className="grid gap-6 p-6 border rounded-xl bg-card">
                        <div className="grid w-full gap-2">
                            <Label htmlFor="message">Bio</Label>
                            <Textarea placeholder="Type your message here." id="message" />
                            <p className="text-sm text-muted-foreground">
                                Your message will be copied to the support team.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 2. Variants */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Variants</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4 p-6 border rounded-xl bg-card">
                            <h3 className="font-medium">Default (Outline)</h3>
                            <div className="grid w-full gap-2">
                                <Label>Description</Label>
                                <Textarea placeholder="This is the default outline variant." />
                            </div>
                        </div>
                        <div className="space-y-4 p-6 border rounded-xl bg-card">
                            <h3 className="font-medium">Filled</h3>
                            <div className="grid w-full gap-2">
                                <Label>Description</Label>
                                <Textarea variant="filled" placeholder="This is the filled variant." />
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. Sizes */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Sizes</h2>
                    <div className="flex flex-col gap-6 p-6 border rounded-xl bg-card">
                        <div className="grid w-full gap-2">
                            <Label>Small (sm)</Label>
                            <Textarea size="sm" placeholder="Small size textarea" />
                        </div>
                        <div className="grid w-full gap-2">
                            <Label>Medium (md)</Label>
                            <Textarea size="md" placeholder="Medium size textarea (Default)" />
                        </div>
                        <div className="grid w-full gap-2">
                            <Label>Large (lg)</Label>
                            <Textarea size="lg" placeholder="Large size textarea" />
                        </div>
                    </div>
                </section>

                {/* 4. States */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">States</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-4 p-6 border rounded-xl bg-card">
                            <h3 className="font-medium">Disabled</h3>
                            <Textarea disabled placeholder="This textarea is disabled." />
                        </div>
                        <div className="space-y-4 p-6 border rounded-xl bg-card">
                            <h3 className="font-medium">Error</h3>
                            <div className="grid w-full gap-2">
                                <Label className="text-destructive">Error Message</Label>
                                <Textarea variant="error" placeholder="Invalid input example" defaultValue="Invalid content" />
                                <p className="text-sm text-destructive font-medium flex items-center gap-1">
                                    <AlertCircle className="size-4" /> Please enter a valid description.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 5. Features */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold">Features</h2>
                    <div className="grid grid-cols-1 gap-6">
                        {/* Auto-grow */}
                        <div className="space-y-4 p-6 border rounded-xl bg-card">
                            <h3 className="font-medium">Auto-grow</h3>
                            <p className="text-sm text-muted-foreground">The textarea height adjusts automatically as you type.</p>
                            <Textarea autoGrow placeholder="Type many lines to see me grow..." />
                        </div>


                    </div>
                </section>
            </div>
        </div>
    );
}
