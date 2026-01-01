# Button Component

The `Button` folder contains a comprehensive set of button components designed for the UDROID UI library. It includes the standard `Button` with multiple variants and sizes, as well as a specialized animated `LikeButton`.

## Directory Structure

```text
myui/src/components/Button/
├── Button.tsx          # Main Button component implementation
├── Button.styles.ts    # centralized styles (if applicable)
├── Button.types.ts     # Type definitions
├── LikeButton.tsx      # Animated Like Button implementation
├── Spinner.tsx         # Loading spinner component used in Button
├── index.ts            # Public API exports
└── README.md           # This documentation
```

## Installation

```tsx
import { Button, LikeButton } from '@/myui/src/components/Button';
```
    
---

## Button

A versatile button component with support for multiple variants, sizes, icons, and loading states.

### Usage

```tsx
<Button variant="primary" onClick={() => console.log('Clicked')}>
  Click Me
</Button>
```

### Variants

The `variant` prop controls the visual style:

- `primary`: Main call-to-action (Blue)
- `secondary`: Alternative actions (White/Gray)
- `outline`: Bordered button for secondary actions
- `ghost`: Transparent background, useful for text-only buttons
- `destructive`: For dangerous actions (Red)
- `success`: For positive actions (Green)

```tsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Delete</Button>
```

### Sizes

The `size` prop controls the dimensions:

- `sm`: Small (32px height)
- `md`: Medium (40px height) - **Default**
- `lg`: Large (48px height)

```tsx
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
```

### Icons & Loading

Supports left/right icons and a loading state that preserves button width.

```tsx
<Button isLoading>Saving...</Button>
<Button leftIcon={<MailIcon />} rightIcon={<ArrowIcon />}>
  Contact Us
</Button>
```

### API Reference (`ButtonProps`)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `ButtonVariant` | `'primary'` | Visual style of the button. |
| `size` | `ButtonSize` | `'md'` | Size of the button. |
| `isLoading` | `boolean` | `false` | Shows a loading spinner and disables interaction. |
| `isDisabled` | `boolean` | `false` | Disables the button. |
| `leftIcon` | `ReactNode` | - | Icon to display before the label. |
| `rightIcon` | `ReactNode` | - | Icon to display after the label. |
| `fullWidth` | `boolean` | `false` | If `true`, button takes up 100% width. |
| `children` | `ReactNode` | - | Button content. |

---

## LikeButton

An interactive, animated button specifically designed for "like" or "favorite" actions. It features a Framer Motion-powered heart animation and an optional counter.

### Usage

```tsx
import { LikeButton } from '@/myui/src/components/Button';

// Basic usage
<LikeButton />

// With count and default state
<LikeButton defaultLiked count={42} />

// Controlled usage
<LikeButton isLiked={hasLiked} onChange={setHasLiked} count={100} />
```

### Features

- **Animated Heart**: Smooth "pop" animation when toggling between liked/unliked states.
- **Count Transition**: The number animates smoothly when it changes.
- **Micro-interactions**: Hover and tap scale effects.

### API Reference (`LikeButtonProps`)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isLiked` | `boolean` | `undefined` | Controlled state. If provided, you must manage state via `onChange`. |
| `defaultLiked` | `boolean` | `false` | Initial state for uncontrolled usage. |
| `count` | `number` | `0` | The number to display next to the heart. |
| `showCount` | `boolean` | `true` | Whether to display the count. |
| `onChange` | `(isLiked: boolean) => void` | - | Callback fired when the button is clicked. |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the button. |
| `className` | `string` | - | Additional CSS classes. |

---

## Spinner

A utility component mainly used internally by `Button` for the `isLoading` state, but exported for general use if needed.

```tsx
import { Spinner } from '@/myui/src/components/Button';

<Spinner size={20} />
```
