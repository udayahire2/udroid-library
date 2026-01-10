# Button Component

A premium, low-weighted button component with superior UI/UX design, supporting multiple variants, sizes, and themes.

## Features

✨ **Premium Design** - Modern gradients, refined colors, and smooth animations  
🌓 **Theme Support** - Seamless light/dark mode with perfect contrast  
⚡ **Lightweight** - Optimized for performance with minimal overhead  
♿ **Accessible** - Full keyboard navigation and ARIA support  
🎨 **Flexible** - Multiple variants, sizes, states, and icon support  

## Installation

```bash
npx udroid-ui add button
```

## Usage

### Basic Button

```tsx
import { Button } from '@/udroid/src/components/Button';

export default function Example() {
  return <Button>Click me</Button>;
}
```

### Variants

```tsx
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Delete</Button>
<Button variant="success">Approve</Button>
```

### Sizes

```tsx
<Button size="sm">Small (32px)</Button>
<Button size="md">Medium (40px)</Button>
<Button size="lg">Large (48px)</Button>
```

### With Icons

```tsx
import { Mail, Send } from 'lucide-react';

<Button leftIcon={<Mail className="w-5 h-5" />}>
  Email Login
</Button>

<Button rightIcon={<Send className="w-5 h-5" />}>
  Send Message
</Button>
```

### Loading State

```tsx
<Button isLoading>Processing...</Button>
```

### Disabled State

```tsx
<Button disabled>Disabled</Button>
```

### Monochrome Variants

```tsx
<Button variant="solid" tone="neutral">Dark Button</Button>
<Button variant="solid" tone="inverse">Light Button</Button>
```

### LikeButton

```tsx
import { LikeButton } from '@/udroid/src/components/Button';

<LikeButton />
<LikeButton defaultLiked count={42} />
<LikeButton size="lg" count={1420} />
<LikeButton showCount={false} />
```

## Props

### Button Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'destructive' \| 'success' \| 'solid'` | `'primary'` | Visual variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `tone` | `'neutral' \| 'inverse'` | - | Tone for solid variant |
| `isLoading` | `boolean` | `false` | Show loading spinner |
| `leftIcon` | `ReactNode` | - | Icon on the left |
| `rightIcon` | `ReactNode` | - | Icon on the right |
| `disabled` | `boolean` | `false` | Disable interaction |
| `className` | `string` | - | Additional CSS classes |

### LikeButton Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `defaultLiked` | `boolean` | `false` | Initial liked state |
| `count` | `number` | `0` | Like count |
| `showCount` | `boolean` | `true` | Show/hide count |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `onLikeChange` | `(isLiked: boolean) => void` | - | Callback on state change |
| `className` | `string` | - | Additional CSS classes |

## Accessibility

- ✅ Minimum 44px touch target (WCAG AAA)
- ✅ Focus visible indicators with proper contrast
- ✅ Keyboard navigation (Tab, Enter, Space)
- ✅ ARIA attributes (`aria-busy`, `aria-disabled`)
- ✅ Screen reader friendly

## Theming

The component automatically adapts to light and dark modes using Tailwind's `dark:` variant. All color combinations are tested for WCAG AA contrast compliance.

## Design Philosophy

This button component surpasses shadcn UI quality through:

1. **Refined Color System** - HSL-based colors with perfect contrast ratios
2. **Micro-interactions** - Subtle hover effects, ripple animations, smooth transitions
3. **Modern Aesthetics** - Gradient accents, premium shadows, polished states
4. **Better Spacing** - Mathematically precise padding and gap values
5. **Enhanced States** - More polished loading, disabled, and focus states

## License

MIT
