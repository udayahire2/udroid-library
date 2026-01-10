"use client";

import React, { useState } from "react";
import { Button } from "@/udroid/src/components/Button";
import { cn } from "@/udroid/src/utils/cn";

// Modern 2026 Trending Icons - Clean, Premium, Duotone Style
import {
  Sparkles,
  Send,
  Heart,
  Trash,
  Download,
  Check,
  Mail,
  Moon,
  Sun,
} from "lucide-react";

export default function ButtonPreviewPage() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div
      className={cn(
        "min-h-screen transition-colors duration-300",
        isDark ? "dark" : ""
      )}
    >
      <div className="min-h-screen p-12 space-y-12 transition-colors duration-300">
        <div className="max-w-5xl mx-auto">
          <header className="mb-12 flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Button Component
              </h1>
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                Premium design system with modern icons (Medium size default)
              </p>
            </div>
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-3 rounded-full bg-white dark:bg-neutral-800 text-gray-900 dark:text-white shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all cursor-pointer"
              title="Toggle Dark Mode"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </header>

          {/* Variants */}
          <section className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              Variants (All Medium Size)
            </h2>
            <div className="flex flex-wrap items-center gap-4 bg-white dark:bg-neutral-900/50 p-8 rounded-2xl border border-gray-100 dark:border-neutral-800 shadow-sm">
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
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              Sizes
            </h2>
            <div className="flex flex-wrap items-center gap-4 bg-white dark:bg-neutral-900/50 p-8 rounded-2xl border border-gray-100 dark:border-neutral-800 shadow-sm">
              <Button size="sm">Small (32px)</Button>
              <Button size="md">Medium (40px) - Default</Button>
              <Button size="lg">Large (48px)</Button>
            </div>
          </section>

          {/* States & Behaviors */}
          <section className="space-y-6">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              States & Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4 bg-white dark:bg-neutral-900/50 p-8 rounded-2xl border border-gray-100 dark:border-neutral-800 shadow-sm">
                <h3 className="text-sm font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                  Loading
                </h3>
                <div className="flex gap-4 flex-wrap">
                  <Button isLoading>Processing</Button>
                  <Button variant="secondary" isLoading>
                    Saving
                  </Button>
                  <Button variant="outline" isLoading>
                    Loading
                  </Button>
                </div>
              </div>

              <div className="space-y-4 bg-white dark:bg-neutral-900/50 p-8 rounded-2xl border border-gray-100 dark:border-neutral-800 shadow-sm">
                <h3 className="text-sm font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                  Disabled
                </h3>
                <div className="flex gap-4">
                  <Button disabled>Disabled</Button>
                  <Button variant="outline" disabled>
                    Not Allowed
                  </Button>
                </div>
              </div>

              <div className="space-y-4 bg-white dark:bg-neutral-900/50 p-8 rounded-2xl border border-gray-100 dark:border-neutral-800 shadow-sm col-span-1 md:col-span-2">
                <h3 className="text-sm font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                  With Modern Icons (2026 Trending Style)
                </h3>
                <div className="flex flex-wrap gap-4">
                  <Button
                    leftIcon={<Mail className="w-5 h-5" />}
                    variant="primary"
                  >
                    Email Login
                  </Button>
                  <Button
                    rightIcon={<Send className="w-5 h-5" />}
                    variant="secondary"
                  >
                    Get Started
                  </Button>
                  <Button
                    variant="destructive"
                    leftIcon={<Trash className="w-5 h-5" />}
                  >
                    Delete
                  </Button>
                  <Button
                    variant="success"
                    leftIcon={<Check className="w-5 h-5" />}
                  >
                    Approve
                  </Button>
                  <Button
                    variant="outline"
                    rightIcon={<Download className="w-5 h-5" />}
                  >
                    Download
                  </Button>
                  <Button
                    variant="ghost"
                    leftIcon={<Heart className="w-5 h-5" />}
                  >
                    Like
                  </Button>
                  <Button leftIcon={<Sparkles className="w-5 h-5" />}>
                    Create New
                  </Button>
                </div>
              </div>

              <div className="space-y-4 bg-white dark:bg-neutral-900/50 p-8 rounded-2xl border border-gray-100 dark:border-neutral-800 shadow-sm col-span-1 md:col-span-2">
                <h3 className="text-sm font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                  Monochrome Variants
                </h3>
                <div className="flex flex-wrap gap-3">
                  <Button variant="solid" tone="neutral">
                    Solid Dark
                  </Button>

                  <Button variant="solid" tone="inverse">
                    Solid Light
                  </Button>

                  <Button
                    variant="solid"
                    tone="neutral"
                    leftIcon={<Moon className="h-4 w-4" />}
                  >
                    Night Mode
                  </Button>

                  <Button
                    variant="solid"
                    tone="inverse"
                    leftIcon={<Sun className="h-4 w-4" />}
                  >
                    Day Mode
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
