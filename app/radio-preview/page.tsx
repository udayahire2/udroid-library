"use client";

import * as React from "react";
import { RadioGroup, RadioGroupItem } from "../../udroid/src/components/radio";
import { Label } from "../../udroid/src/components/label";
import { Sun, Moon } from "lucide-react";

export default function RadioPreviewPage() {
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
            <div className="text-center space-y-4 relative w-full max-w-5xl">
                <div className="absolute right-0 top-0">
                    <button
                        onClick={toggleTheme}
                        className="rounded-full border border-border bg-card p-2.5 text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
                    >
                        {isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
                    </button>
                </div>
                <h1 className="text-4xl font-bold tracking-tight">Udroid Radio System</h1>
                <p className="text-muted-foreground max-w-lg mx-auto">
                    Precision selection controls. Built for clarity, tactile feedback, and premium aesthetics.
                </p>
            </div>

            <div className="grid gap-20 w-full max-w-5xl">

                {/* --- PART 1: DEFAULT VARIANT --- */}
                <section className="space-y-6">
                    <div className="flex items-center gap-3 pb-2 border-b border-border">
                        <div className="h-6 w-1 bg-primary rounded-full" />
                        <h2 className="text-xl font-semibold">1. Standard Selection</h2>
                        <span className="text-xs text-muted-foreground ml-auto font-mono">default</span>
                    </div>
                    <div className="flex flex-col items-center gap-8 p-12 border rounded-xl bg-card/30">
                        <RadioGroup defaultValue="option-one">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="option-one" id="r1" />
                                <Label htmlFor="r1">Comfortable</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="option-two" id="r2" />
                                <Label htmlFor="r2">Compact</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="option-three" id="r3" />
                                <Label htmlFor="r3">Condensed</Label>
                            </div>
                        </RadioGroup>
                    </div>
                </section>


                {/* --- PART 3: PREMIUM RADIO ITEM ONLY --- */}
                <section className="space-y-6">
                    <div className="flex items-center gap-3 pb-2 border-b border-border">
                        <div className="h-6 w-1 bg-primary rounded-full" />
                        <h2 className="text-xl font-semibold">3. Premium Variant</h2>
                        <span className="text-xs text-muted-foreground ml-auto font-mono">variant="premium"</span>
                    </div>
                    <div className="flex flex-col items-center gap-8 p-12 border rounded-xl bg-card/30">
                        <RadioGroup defaultValue="high-fi">
                            <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors w-64 border border-transparent hover:border-border/50">
                                <RadioGroupItem value="high-fi" id="r-high" variant="premium" />
                                <div className="flex flex-col gap-0.5 cursor-pointer" onClick={() => document.getElementById('r-high')?.click()}>
                                    <Label htmlFor="r-high" className="cursor-pointer font-medium">High Fidelity</Label>
                                    <span className="text-xs text-muted-foreground">Lossless audio quality</span>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors w-64 border border-transparent hover:border-border/50">
                                <RadioGroupItem value="balanced" id="r-balanced" variant="premium" />
                                <div className="flex flex-col gap-0.5 cursor-pointer" onClick={() => document.getElementById('r-balanced')?.click()}>
                                    <Label htmlFor="r-balanced" className="cursor-pointer font-medium">Balanced</Label>
                                    <span className="text-xs text-muted-foreground">Standard streaming quality</span>
                                </div>
                            </div>
                        </RadioGroup>
                    </div>
                </section>

            </div>
        </div>
    );
}
