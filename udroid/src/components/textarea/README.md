# Textarea Component

A premium, core component for multi-line text input.

## Features

- **Strict Architecture**: Defined resize constraints to protect layouts.
- **Auto-Grow**: Opt-in automatic height adjustment.
- **States**: Clear distinction between `disabled` and `readOnly`.
- **Theming**: "Machined Groove" aesthetic with dark mode support.

## Installation

```bash
npx udroid-ui add textarea
```

## Usage

### Basic

```tsx
import { Textarea } from "@/udroid/src/components/textarea";

<Textarea placeholder="Type your message..." />
```

### Auto-Grow

> **Warning**: Use with caution in long forms. Ideally suited for chat interfaces or comment sections.
>
> **Note**: When `autoGrow` is enabled, manual resizing is automatically disabled.

```tsx
<Textarea autoGrow placeholder="I expand as you type..." />
```

### Variants

```tsx
<Textarea variant="default" />
<Textarea variant="filled" />
<Textarea variant="error" />
```

## Props

| Prop | Type | Default | Description | Constraint |
|---|---|---|---|---|
| `variant` | `'default' \| 'filled' \| 'error'` | `'default'` | Visual style | **No ghost variant** |
| `resize` | `'none' \| 'vertical'` | `'vertical'` | CSS resize behavior | **No horizontal** |
| `autoGrow` | `boolean` | `false` | Adapts height to content | **Disables resize** |

## Do's and Don'ts

- ✅ **Do** use `resize="none"` in fixed-layout cards.
- ✅ **Do** use `autoGrow` for chat inputs.
- ❌ **Don't** use `horizontal` resize (it breaks grid systems).
