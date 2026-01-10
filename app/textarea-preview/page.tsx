"use client";

import React from "react";
import { Textarea, Button } from "@/udroid/src";
import { AlertCircle, FileText, MessageSquare, PenLine, Sun, Moon } from "lucide-react";

export default function TextareaPreviewPage() {
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
        <div className="min-h-screen bg-white p-12 text-slate-900 dark:bg-slate-950 dark:text-slate-50 transition-colors duration-300">
            <div className="mx-auto max-w-4xl space-y-12">

                {/* Header */}
                <div className="flex items-start justify-between">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tight">Textarea Core</h1>
                        <p className="text-lg text-slate-500 dark:text-slate-400">
                            Standard multi-line input component for forms and data entry.
                        </p>
                    </div>
                    <button
                        onClick={toggleTheme}
                        className="rounded-full border border-slate-200 bg-white p-2.5 text-slate-500 transition-all hover:bg-slate-50 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-white"
                    >
                        {isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
                    </button>
                </div>

                <div className="grid gap-12 md:grid-cols-2">

                    {/* VARIANTS */}
                    <section className="space-y-6">
                        <h2 className="text-xl font-semibold border-b pb-2">1. Visual Variants</h2>

                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Default</label>
                                <Textarea placeholder="Type your message here..." />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Filled</label>
                                <Textarea variant="filled" placeholder="Enter description..." />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Error State</label>
                                <Textarea
                                    variant="error"
                                    defaultValue="Invalid input content"
                                />
                                <p className="text-xs text-red-500 font-medium pt-1">Please provide a valid reason.</p>
                            </div>
                        </div>
                    </section>

                    {/* STATES & BEHAVIOR */}
                    <section className="space-y-6">
                        <h2 className="text-xl font-semibold border-b pb-2">2. States & Behavior</h2>

                        <div className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Disabled</label>
                                <Textarea disabled placeholder="This field is disabled" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">Read Only</label>
                                <Textarea
                                    readOnly
                                    defaultValue="This content is read-only. You can select it but not edit it."
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium">
                                    Auto-Grow <span className="text-xs font-normal text-slate-500">(Type to expand)</span>
                                </label>
                                <Textarea
                                    autoGrow
                                    placeholder="I will grow as you type..."
                                    className="min-h-[42px]"
                                />
                            </div>
                        </div>
                    </section>

                    {/* COMPOSITION */}
                    <section className="space-y-6 md:col-span-2">
                        <h2 className="text-xl font-semibold border-b pb-2">3. Component Composition</h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Form Context</label>
                                <div className="rounded-lg border border-slate-200 p-6 dark:border-slate-800">
                                    <div className="space-y-4">
                                        <div className="space-y-2">
                                            <label htmlFor="bio" className="text-sm font-medium">Biography</label>
                                            <Textarea
                                                id="bio"
                                                variant="filled"
                                                placeholder="Tell us about yourself"
                                                rows={3}
                                            />
                                        </div>
                                        <div className="flex justify-end">
                                            <Button size="sm">Save Changes</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </div>
        </div>
    );
}
