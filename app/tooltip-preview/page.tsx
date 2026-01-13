"use client";

import React, { useState, useEffect } from "react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "../../udroid/src/components/tooltip/tooltip";
import { Button } from "@/udroid/src/components/Button/Button";
import { Sun, Moon } from "lucide-react";

export default function TooltipPreviewPage() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
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
        <div className="min-h-screen bg-background p-10 flex flex-col gap-10 items-center justify-center transition-colors duration-300">
            <div className="absolute right-4 top-4">
                <button
                    onClick={toggleTheme}
                    className="rounded-full border border-border bg-card p-2.5 text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
                >
                    {isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
                </button>
            </div>
            <h1 className="text-3xl font-bold text-primary">Tooltip Component</h1>

            <TooltipProvider>
                <div className="flex gap-8 items-center">
                    {/* Icon Trigger */}
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <button className="p-2 rounded-full hover:bg-muted transition-colors">
                                <span className="sr-only">Add</span>
                                <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-foreground"><path d="M8 2.75C8 2.33579 7.66421 2 7.25 2C6.83579 2 6.5 2.33579 6.5 2.75V7.25H2H1.25C0.835786 7.25 0.5 7.58579 0.5 8C0.5 8.41421 0.835786 8.75 1.25 8.75H6.5V13.25C6.5 13.6642 6.83579 14 7.25 14C7.66421 14 8 13.6642 8 13.25V8.75H13.25C13.6642 8.75 14 8.41421 14 8C14 7.58579 13.6642 7.25 13.25 7.25H8V2.75Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                            </button>
                        </TooltipTrigger>
                        <TooltipContent side="top">
                            <p>Add Item</p>
                        </TooltipContent>
                    </Tooltip>

                    {/* Text Trigger */}
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <span className="text-sm text-muted-foreground underline decoration-dotted cursor-help">
                                Help info
                            </span>
                        </TooltipTrigger>
                        <TooltipContent side="bottom">
                            <p>This is helpful information</p>
                        </TooltipContent>
                    </Tooltip>

                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="outline">Hover Top</Button>
                        </TooltipTrigger>
                        <TooltipContent side="top">
                            <p>Add to library</p>
                        </TooltipContent>
                    </Tooltip>
                </div>
            </TooltipProvider>

            <div className="mt-10 p-6 border rounded-lg bg-card">
                <h2 className="mb-4 text-xl font-semibold">Dark Variant</h2>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button>Dark Tooltip</Button>
                        </TooltipTrigger>
                        <TooltipContent variant="premium">
                            <p>Dark mode tooltip</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>

        </div>
    );
}
