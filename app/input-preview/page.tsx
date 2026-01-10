
"use client";

import React from "react";
import { Input, Textarea, Button } from "../../udroid/src";
import { Mail, Search, Eye, Lock, User, AlertCircle, Paperclip, Send, Mic, Sparkles, Sun, Moon } from "lucide-react";

export default function InputPreviewPage() {
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
        <div className="flex min-h-screen flex-col items-center py-12 px-4 gap-12 bg-background text-foreground selection:bg-primary/20 transition-colors duration-300">
            <div className="text-center space-y-4 relative w-full max-w-4xl">
                <div className="absolute right-0 top-0">
                    <button
                        onClick={toggleTheme}
                        className="rounded-full border border-border bg-card p-2.5 text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
                    >
                        {isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
                    </button>
                </div>
                <h1 className="text-4xl font-bold tracking-tight">Machined Groove & Smart Deck</h1>
                <p className="text-muted-foreground max-w-lg mx-auto">
                    Input & Textarea Identity. Recessed physics for data entry, optimized for single-line precision and multi-line creativity.
                </p>
            </div>

            <div className="grid gap-20 w-full max-w-4xl">

                {/* INPUT SIZES */}
                <section className="space-y-6">
                    <div className="flex items-center gap-3 pb-2 border-b border-border">
                        <div className="h-6 w-1 bg-primary rounded-full" />
                        <h2 className="text-xl font-semibold">1. The Machined Groove (Input)</h2>
                    </div>
                    <div className="grid gap-6 p-8 border rounded-xl bg-card/30">
                        <div className="flex items-center gap-4">
                            <span className="w-20 text-xs text-muted-foreground">Small (32px)</span>
                            <Input size="sm" placeholder="Email address" className="max-w-xs" />
                            <Button size="sm">Action</Button>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="w-20 text-xs text-muted-foreground">Default (36px)</span>
                            <Input placeholder="Email address" className="max-w-xs" />
                            <Button>Action</Button>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="w-20 text-xs text-muted-foreground">Large (40px)</span>
                            <Input size="lg" placeholder="Email address" className="max-w-xs" />
                            <Button size="lg">Action</Button>
                        </div>
                    </div>
                </section>

                {/* INPUT VARIANTS */}
                <section className="space-y-6">
                    <div className="flex items-center gap-3 pb-2 border-b border-border">
                        <div className="h-6 w-1 bg-primary rounded-full" />
                        <h2 className="text-xl font-semibold">2. Input Variants</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <Input placeholder="Default surface" />
                            <Input variant="filled" placeholder="Filled variant" />
                            <Input variant="error" placeholder="Error state" startContent={<AlertCircle className="text-destructive" />} />
                            <Input disabled placeholder="Disabled input" />
                        </div>
                        <div className="p-6 border rounded-xl bg-card/10 space-y-4">
                            <h3 className="text-sm font-medium">Focus Experience</h3>
                            <p className="text-sm text-muted-foreground">
                                Click the inputs to feel the "Groove" soften and the Focus Ring appear.
                            </p>
                            <Input placeholder="Click me..." />
                        </div>
                    </div>
                </section>

                {/* CHATBOT INTERFACES */}
                <section className="space-y-6">
                    <div className="flex items-center gap-3 pb-2 border-b border-border">
                        <div className="h-6 w-1 bg-primary rounded-full" />
                        <h2 className="text-xl font-semibold">3. The Smart Deck (Textarea)</h2>
                        <span className="ml-auto text-xs text-muted-foreground font-mono">autoGrow + items-end</span>
                    </div>
                    <div className="grid gap-8">

                        {/* ChatGPT Style */}
                        <div className="p-8 border rounded-xl bg-card/30 space-y-4">
                            <h3 className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                                <Sparkles className="size-4 text-purple-500" /> "The Assistant" (Rounded 2xl)
                            </h3>
                            <div className="max-w-2xl mx-auto">
                                <Textarea
                                    autoGrow
                                    placeholder="Message Udroid..."
                                    className="rounded-2xl"
                                    startContent={
                                        <div className="p-1 rounded-full hover:bg-muted cursor-pointer transition-colors">
                                            <Paperclip className="size-4" />
                                        </div>
                                    }
                                    endContent={
                                        <Button size="icon-sm" className="rounded-full h-8 w-8">
                                            <Send className="size-4" />
                                        </Button>
                                    }
                                />
                            </div>
                        </div>

                        {/* Minimal / Coder style */}
                        <div className="p-8 border rounded-xl bg-card/30 space-y-4">
                            <h3 className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                                <Mic className="size-4 text-emerald-500" /> "The Note Taker" (Default)
                            </h3>
                            <div className="max-w-2xl mx-auto">
                                <Textarea
                                    autoGrow
                                    variant="filled"
                                    placeholder="Take a note..."
                                    rows={1}
                                    endContent={
                                        <div className="flex items-center gap-1">
                                            <Button size="icon-sm" variant="ghost"> <Mic /> </Button>
                                            <Button size="icon-sm" variant="ghost"> <Send /> </Button>
                                        </div>
                                    }
                                />
                            </div>
                        </div>

                    </div>
                </section>

            </div>
        </div>
    );
}
