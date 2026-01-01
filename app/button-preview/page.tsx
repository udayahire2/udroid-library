"use client";

import React, { useState } from 'react';
import { Button } from '@/myui/src/components/Button';
import { LikeButton } from '@/myui/src/components/Button/LikeButton';
import { cn } from '@/myui/src/utils/cn';

// Modern 2026 Trending Icons - Clean, Premium, Duotone Style
const Sparkles = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M12 3L13.5 8.5L19 10L13.5 11.5L12 17L10.5 11.5L5 10L10.5 8.5L12 3Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19 3V7M21 5H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 17V21M7 19H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const Send = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 2L15 22L11 13L2 9L22 2Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const Heart = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M20.84 4.61C20.3292 4.09913 19.7228 3.69374 19.0554 3.41644C18.3879 3.13913 17.6725 2.99597 16.95 2.99597C16.2275 2.99597 15.5121 3.13913 14.8446 3.41644C14.1772 3.69374 13.5708 4.09913 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.57831 8.50903 2.99563 7.05 2.99563C5.59096 2.99563 4.19169 3.57831 3.16 4.61C2.1283 5.64169 1.54562 7.04097 1.54562 8.5C1.54562 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.3509 11.8792 21.7563 11.2728 22.0336 10.6054C22.3109 9.93789 22.454 9.2225 22.454 8.5C22.454 7.7775 22.3109 7.06211 22.0336 6.39464C21.7563 5.72716 21.3509 5.12075 20.84 4.61Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const Trash = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M3 6H5H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 11V17M14 11V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const Download = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 15L17 10L12 15L7 10L12 15Z" fill="currentColor" fillOpacity="0.15" />
    </svg>
);

const Check = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" fill="currentColor" fillOpacity="0.1" />
        <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const Mail = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <rect x="3" y="5" width="18" height="14" rx="2" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 7L12 13L21 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const Moon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <path d="M21 12.79C20.8427 14.4922 20.2039 16.1144 19.1583 17.4668C18.1127 18.8192 16.7035 19.8458 15.0957 20.4265C13.4879 21.0073 11.748 21.1181 10.0795 20.7461C8.41104 20.3741 6.88302 19.5345 5.67425 18.3258C4.46548 17.117 3.62596 15.589 3.25393 13.9205C2.8819 12.252 2.99274 10.5121 3.57348 8.9043C4.15423 7.29651 5.18085 5.88737 6.53324 4.84175C7.88562 3.79614 9.50782 3.15731 11.21 3C10.2134 4.34827 9.73387 6.00945 9.85856 7.68141C9.98324 9.35338 10.7039 10.9251 11.8894 12.1106C13.0749 13.2961 14.6466 14.0168 16.3186 14.1414C17.9906 14.2661 19.6517 13.7866 21 12.79Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const Sun = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-5 h-5">
        <circle cx="12" cy="12" r="4" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 2V4M12 20V22M4 12H2M22 12H20M19.07 4.93L17.66 6.34M6.34 17.66L4.93 19.07M19.07 19.07L17.66 17.66M6.34 6.34L4.93 4.93" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export default function ButtonPreviewPage() {
    const [isDark, setIsDark] = useState(false);

    return (
        <div className={cn("min-h-screen transition-colors duration-300", isDark ? "dark bg-gray-950" : "bg-gray-50")}>
            <div className="dark:bg-gray-950 min-h-screen p-12 space-y-12 transition-colors duration-300">
                <div className="max-w-5xl mx-auto">
                    <header className="mb-12 flex justify-between items-start">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Button Component</h1>
                            <p className="text-gray-500 dark:text-gray-400 text-lg">Premium design system with modern icons (Medium size default)</p>
                        </div>
                        <button
                            onClick={() => setIsDark(!isDark)}
                            className="p-3 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all cursor-pointer"
                            title="Toggle Dark Mode"
                        >
                            {isDark ? <Sun /> : <Moon />}
                        </button>
                    </header>

                    {/* Variants */}
                    <section className="space-y-6">
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Variants (All Medium Size)</h2>
                        <div className="flex flex-wrap items-center gap-4 bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                            <Button variant="primary">Primary</Button>
                            <Button variant="secondary">Secondary</Button>
                            <Button variant="outline">Outline</Button>
                            <Button variant="ghost">Ghost</Button>
                            <Button variant="destructive">Destructive</Button>
                            <Button variant="success">Success</Button>
                        </div>
                    </section>

                    {/* Sizes */}
                    <section className="space-y-6">
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Sizes</h2>
                        <div className="flex flex-wrap items-center gap-4 bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                            <Button size="sm">Small (32px)</Button>
                            <Button size="md">Medium (40px) - Default</Button>
                            <Button size="lg">Large (48px)</Button>
                        </div>
                    </section>

                    {/* States & Behaviors */}
                    <section className="space-y-6">
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">States & Features</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4 bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                                <h3 className="text-sm font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider">Loading</h3>
                                <div className="flex gap-4 flex-wrap">
                                    <Button isLoading>Processing</Button>
                                    <Button variant="secondary" isLoading>Saving</Button>
                                    <Button variant="outline" isLoading>Loading</Button>
                                </div>
                            </div>

                            <div className="space-y-4 bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                                <h3 className="text-sm font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider">Disabled</h3>
                                <div className="flex gap-4">
                                    <Button disabled>Disabled</Button>
                                    <Button variant="outline" disabled>Not Allowed</Button>
                                </div>
                            </div>

                            <div className="space-y-4 bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm col-span-1 md:col-span-2">
                                <h3 className="text-sm font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider">With Modern Icons (2026 Trending Style)</h3>
                                <div className="flex flex-wrap gap-4">
                                    <Button leftIcon={<Mail />} variant="primary">Email Login</Button>
                                    <Button rightIcon={<Send />} variant="secondary">Get Started</Button>
                                    <Button variant="destructive" leftIcon={<Trash />}>Delete</Button>
                                    <Button variant="success" leftIcon={<Check />}>Approve</Button>
                                    <Button variant="outline" rightIcon={<Download />}>Download</Button>
                                    <Button variant="ghost" leftIcon={<Heart />}>Like</Button>
                                    <Button leftIcon={<Sparkles />}>Create New</Button>
                                </div>
                            </div>

                            <div className="space-y-4 bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
                                <h3 className="text-sm font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider">Full Width</h3>
                                <Button fullWidth variant="primary">Full Width Button</Button>
                            </div>
                            <div className="space-y-4 bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm col-span-1 md:col-span-2">
                                <h3 className="text-sm font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider">Interactive Like Button with Animation</h3>
                                <div className="flex flex-wrap gap-8 items-center">
                                    <LikeButton />
                                    <LikeButton defaultLiked count={12} />
                                    <LikeButton size="lg" count={1420} className="rounded-xl" />
                                    <LikeButton size="sm" count={5} />
                                    <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                                        <span className="text-xs text-gray-400 font-medium uppercase">No Count</span>
                                        <LikeButton showCount={false} />
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
