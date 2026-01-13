"use client";

import * as React from "react";
import { Sun, Moon } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/udroid/src/components/card/card";
import { Button } from "@/udroid/src/components/button/button";
import { Input } from "@/udroid/src/components/input/input";
import { Label } from "@/udroid/src/components/label/label";
import { Switch } from "@/udroid/src/components/switch/switch";

export default function CardPreview() {
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
        <div className="flex min-h-screen flex-col items-center justify-center space-y-8 bg-background p-10 text-foreground transition-colors duration-300">
            <div className="absolute right-4 top-4">
                <button
                    onClick={toggleTheme}
                    className="rounded-full border border-border bg-card p-2.5 text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
                >
                    {isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
                </button>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* 1. Basic Login Card */}
                <Card className="w-[350px]">
                    <CardHeader>
                        <CardTitle>Login Framework</CardTitle>
                        <CardDescription>
                            Deploy your new project in one-click.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" placeholder="Name of your project" />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="framework">Framework</Label>
                                    <Input id="framework" placeholder="Next.js" />
                                </div>
                            </div>
                        </form>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button variant="outline">Cancel</Button>
                        <Button>Deploy</Button>
                    </CardFooter>
                </Card>

                {/* 2. Notifications Card */}
                <Card className="w-[350px]">
                    <CardHeader>
                        <CardTitle>Notifications</CardTitle>
                        <CardDescription>
                            You have 3 unread messages.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="flex items-center space-x-4 rounded-md border p-4">
                            <div className="size-2 rounded-full bg-sky-500" />
                            <div className="flex-1 space-y-1">
                                <p className="text-sm font-medium leading-none">
                                    Push Notifications
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    Send notifications to device.
                                </p>
                            </div>
                            <Switch />
                        </div>
                        <div className="flex items-center space-x-4 rounded-md border p-4">
                            <div className="size-2 rounded-full bg-amber-500" />
                            <div className="flex-1 space-y-1">
                                <p className="text-sm font-medium leading-none">
                                    Email Updates
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    Receive weekly digests.
                                </p>
                            </div>
                            <Switch defaultChecked />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full">Mark all as read</Button>
                    </CardFooter>
                </Card>

                {/* 3. Glass Marketing Card */}
                <Card variant="glass" className="w-[350px]">
                    <CardHeader>
                        <CardTitle className="text-2xl">Glass Variant</CardTitle>
                        <CardDescription>With backdrop blur effect.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm">
                            This variant uses a semi-transparent background with a blur filter to create a frosted glass effect. Perfect for overlaying on complex backgrounds.
                        </p>
                    </CardContent>
                    <CardFooter>
                        <Button variant="secondary" className="w-full">Explore</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
