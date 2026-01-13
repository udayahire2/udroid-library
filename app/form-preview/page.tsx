"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import * as React from "react";
import { Sun, Moon, Check, ChevronsUpDown, Mail, User, Lock, Send, MessagesSquare, Briefcase } from "lucide-react";

import { Button } from "@/udroid/src/components/Button/Button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/udroid/src/components/form/form";
import { Input } from "@/udroid/src/components/Input/Input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/udroid/src/components/card/card";
import { Switch } from "@/udroid/src/components/switch/switch";
import { Textarea } from "@/udroid/src/components/textarea/Textarea";
import { RadioGroup, RadioGroupItem } from "@/udroid/src/components/radio/radio";

// --- Form Schemas ---

const loginSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }),
    rememberMe: z.boolean().default(false).optional(),
});

const registerSchema = z.object({
    firstName: z.string().min(2, { message: "First name is required" }),
    lastName: z.string().min(2, { message: "Last name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters" }),
    terms: z.boolean().refine((val) => val === true, {
        message: "You must accept the terms and conditions",
    }),
});

const profileSchema = z.object({
    username: z.string().min(2).max(30),
    email: z.string().email(),
    bio: z.string().max(160).optional(),
    security_emails: z.boolean().default(true).optional(),
});

const contactSchema = z.object({
    name: z.string().min(2, { message: "Name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    subject: z.enum(["general", "support", "billing"], {
        errorMap: () => ({ message: "Please select a subject" }),
    }),
    message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

const newsletterSchema = z.object({
    email: z.string().email({ message: "Please enter a valid email address" }),
});


export default function FormPreview() {
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

    // --- Form Instances ---

    const loginForm = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
            rememberMe: false,
        },
    });

    const registerForm = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            terms: false,
        },
    });

    const profileForm = useForm<z.infer<typeof profileSchema>>({
        resolver: zodResolver(profileSchema),
        defaultValues: {
            username: "aaditya.kumar",
            email: "aaditya.k@example.com",
            bio: "I'm a software engineer based in Bangalore.",
            security_emails: true,
        },
    });

    const contactForm = useForm<z.infer<typeof contactSchema>>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    });

    const newsletterForm = useForm<z.infer<typeof newsletterSchema>>({
        resolver: zodResolver(newsletterSchema),
        defaultValues: {
            email: "",
        },
    });

    // --- Submit Handlers ---
    const onLoginSubmit = (data: z.infer<typeof loginSchema>) => console.log("Login:", data);
    const onRegisterSubmit = (data: z.infer<typeof registerSchema>) => console.log("Register:", data);
    const onProfileSubmit = (data: z.infer<typeof profileSchema>) => console.log("Profile:", data);
    const onContactSubmit = (data: z.infer<typeof contactSchema>) => console.log("Contact:", data);
    const onNewsletterSubmit = (data: z.infer<typeof newsletterSchema>) => console.log("Newsletter:", data);

    return (
        <div className="min-h-screen bg-background text-foreground transition-colors duration-300 p-8">
            <div className="absolute right-4 top-4 z-50">
                <button
                    onClick={toggleTheme}
                    className="rounded-full border border-border bg-card p-2.5 text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
                >
                    {isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
                </button>
            </div>

            <div className="mx-auto max-w-7xl space-y-12">
                <div className="space-y-4 text-center">
                    <h1 className="text-4xl font-bold tracking-tight">Form Components</h1>
                    <p className="text-lg text-muted-foreground">
                        A collection of form layouts and validation examples built with React Hook Form and Zod.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

                    {/* 1. Login Form */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Welcome Back</CardTitle>
                            <CardDescription>Enter your credentials to access your account.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Form {...loginForm}>
                                <form onSubmit={loginForm.handleSubmit(onLoginSubmit)} className="space-y-4">
                                    <FormField
                                        control={loginForm.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="rahul.verma@example.com" startContent={<Mail className="size-4" />} {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={loginForm.control}
                                        name="password"
                                        render={({ field }) => (
                                            <FormItem>
                                                <div className="flex items-center justify-between">
                                                    <FormLabel>Password</FormLabel>
                                                    <a href="#" className="text-xs text-primary hover:underline">Forgot password?</a>
                                                </div>
                                                <FormControl>
                                                    <Input type="password" placeholder="••••••••" startContent={<Lock className="size-4" />} {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                    <FormField
                                        control={loginForm.control}
                                        name="rememberMe"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                                                <div className="space-y-0.5">
                                                    <FormLabel className="text-base">Remember me</FormLabel>
                                                    <FormDescription>
                                                        Stay logged in on this device
                                                    </FormDescription>
                                                </div>
                                                <FormControl>
                                                    <Switch
                                                        checked={field.value}
                                                        onCheckedChange={field.onChange}
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />

                                    <Button type="submit" className="w-full">Sign In</Button>
                                </form>
                            </Form>
                        </CardContent>
                        <CardFooter className="justify-center">
                            <p className="text-sm text-muted-foreground">Don't have an account? <a href="#" className="underline text-primary">Sign up</a></p>
                        </CardFooter>
                    </Card>

                    {/* 2. Registration Form */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Create an Account</CardTitle>
                            <CardDescription>Enter your information to get started.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Form {...registerForm}>
                                <form onSubmit={registerForm.handleSubmit(onRegisterSubmit)} className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <FormField
                                            control={registerForm.control}
                                            name="firstName"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>First name</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Aarav" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={registerForm.control}
                                            name="lastName"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Last name</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Patel" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <FormField
                                        control={registerForm.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="aarav.patel@example.com" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={registerForm.control}
                                        name="password"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Password</FormLabel>
                                                <FormControl>
                                                    <Input type="password" placeholder="Create a password" {...field} />
                                                </FormControl>
                                                <FormDescription>Must be at least 8 characters long.</FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={registerForm.control}
                                        name="terms"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                                                <FormControl>
                                                    <Switch
                                                        checked={field.value}
                                                        onCheckedChange={field.onChange}
                                                    />
                                                </FormControl>
                                                <div className="space-y-1 leading-none">
                                                    <FormLabel>
                                                        Accept terms and conditions
                                                    </FormLabel>
                                                    <FormDescription>
                                                        You agree to our Terms of Service and Privacy Policy.
                                                    </FormDescription>
                                                    <FormMessage />
                                                </div>
                                            </FormItem>
                                        )}
                                    />
                                    <Button type="submit" className="w-full">Create Account</Button>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>

                    {/* 3. Contact Form */}
                    <Card className="md:col-span-2 lg:col-span-1 shadow-md border-muted/40">
                        <CardHeader>
                            <CardTitle>Contact Support</CardTitle>
                            <CardDescription>How can we help you today?</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Form {...contactForm}>
                                <form onSubmit={contactForm.handleSubmit(onContactSubmit)} className="space-y-6">
                                    <div className="grid gap-4 md:grid-cols-2">
                                        <FormField
                                            control={contactForm.control}
                                            name="name"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Name</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Priya Sharma" startContent={<User className="size-4" />} {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={contactForm.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Email</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="priya.s@example.com" startContent={<Mail className="size-4" />} {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <FormField
                                        control={contactForm.control}
                                        name="subject"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>I need help with...</FormLabel>
                                                <FormControl>
                                                    <RadioGroup
                                                        onValueChange={field.onChange}
                                                        defaultValue={field.value}
                                                        className="grid grid-cols-3 gap-4 h-full"
                                                    >
                                                        <FormItem className="space-y-0 h-full">
                                                            <FormControl>
                                                                <RadioGroupItem value="general" variant="card" className="flex flex-col items-center justify-center gap-3 p-4 h-full transition-all [&:has([data-state=checked])]:border-primary">
                                                                    <div className="rounded-full bg-secondary p-2.5 text-secondary-foreground group-data-[state=checked]:bg-primary group-data-[state=checked]:text-primary-foreground transition-colors">
                                                                        <MessagesSquare className="size-5" />
                                                                    </div>
                                                                    <span className="text-sm font-medium">General</span>
                                                                </RadioGroupItem>
                                                            </FormControl>
                                                        </FormItem>
                                                        <FormItem className="space-y-0 h-full">
                                                            <FormControl>
                                                                <RadioGroupItem value="support" variant="card" className="flex flex-col items-center justify-center gap-3 p-4 h-full transition-all [&:has([data-state=checked])]:border-primary">
                                                                    <div className="rounded-full bg-secondary p-2.5 text-secondary-foreground group-data-[state=checked]:bg-primary group-data-[state=checked]:text-primary-foreground transition-colors">
                                                                        <User className="size-5" />
                                                                    </div>
                                                                    <span className="text-sm font-medium">Support</span>
                                                                </RadioGroupItem>
                                                            </FormControl>
                                                        </FormItem>
                                                        <FormItem className="space-y-0 h-full">
                                                            <FormControl>
                                                                <RadioGroupItem value="billing" variant="card" className="flex flex-col items-center justify-center gap-3 p-4 h-full transition-all [&:has([data-state=checked])]:border-primary">
                                                                    <div className="rounded-full bg-secondary p-2.5 text-secondary-foreground group-data-[state=checked]:bg-primary group-data-[state=checked]:text-primary-foreground transition-colors">
                                                                        <Briefcase className="size-5" />
                                                                    </div>
                                                                    <span className="text-sm font-medium">Billing</span>
                                                                </RadioGroupItem>
                                                            </FormControl>
                                                        </FormItem>
                                                    </RadioGroup>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={contactForm.control}
                                        name="message"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Message</FormLabel>
                                                <FormControl>
                                                    <Textarea placeholder="Tell us more about your issue..." className="min-h-[120px] resize-none" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <Button type="submit" className="w-full" size="lg">Send Message</Button>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>

                    {/* 4. Profile Settings Form */}
                    <Card className="md:col-span-2 lg:col-span-1">
                        <CardHeader>
                            <CardTitle>Profile Settings</CardTitle>
                            <CardDescription>Manage your public profile details.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Form {...profileForm}>
                                <form onSubmit={profileForm.handleSubmit(onProfileSubmit)} className="space-y-4">
                                    <FormField
                                        control={profileForm.control}
                                        name="username"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Username</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="aaditya.kumar" {...field} />
                                                </FormControl>
                                                <FormDescription>This is your public display name.</FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={profileForm.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Email</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="aaditya.k@example.com" {...field} />
                                                </FormControl>
                                                <FormDescription>You can assume control of this email.</FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={profileForm.control}
                                        name="bio"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Bio</FormLabel>
                                                <FormControl>
                                                    <Textarea placeholder="Tell us a little bit about yourself" autoGrow {...field} />
                                                </FormControl>
                                                <FormDescription>You can @mention other users and organizations.</FormDescription>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={profileForm.control}
                                        name="security_emails"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                                                <div className="space-y-0.5">
                                                    <FormLabel>Security Emails</FormLabel>
                                                    <FormDescription>
                                                        Receive emails about your account security.
                                                    </FormDescription>
                                                </div>
                                                <FormControl>
                                                    <Switch
                                                        checked={field.value}
                                                        onCheckedChange={field.onChange}
                                                    />
                                                </FormControl>
                                            </FormItem>
                                        )}
                                    />
                                    <Button type="submit">Save Changes</Button>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>

                    {/* 5. Newsletter Form (Full Width) */}
                    <Card className="col-span-1 md:col-span-2 shadow-md border-muted/40 bg-gradient-to-br from-card to-secondary/5">
                        <CardHeader>
                            <CardTitle>Subscribe to our Newsletter</CardTitle>
                            <CardDescription>Stay up to date with the latest news and announcements.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Form {...newsletterForm}>
                                <form onSubmit={newsletterForm.handleSubmit(onNewsletterSubmit)} className="flex w-full items-start space-x-2">
                                    <FormField
                                        control={newsletterForm.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem className="flex-1 space-y-0">
                                                <FormLabel className="sr-only">Email</FormLabel>
                                                <FormControl>
                                                    <div className="relative flex items-center">
                                                        <Input
                                                            placeholder="Enter your email address"
                                                            className="pr-24 h-12 text-base shadow-sm"
                                                            {...field}
                                                        />
                                                        <Button
                                                            type="submit"
                                                            size="sm"
                                                            className="absolute right-1 top-1 bottom-1 h-auto px-4 rounded-md font-medium"
                                                        >
                                                            Subscribe
                                                        </Button>
                                                    </div>
                                                </FormControl>
                                                <FormMessage className="ml-1 mt-2" />
                                            </FormItem>
                                        )}
                                    />
                                </form>
                            </Form>
                        </CardContent>
                    </Card>

                </div>
            </div>
        </div>
    );
}
