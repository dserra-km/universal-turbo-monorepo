# Universal Turbo Monorepo

A Turborepo-based universal monorepo that supports web, mobile (iOS/Android), and component documentation applications. Built with React Native, Uniwind, and shared UI components across all platforms.

## Tech Stack

**Apps:** Vite (web), RockJS + React Native 0.83 (mobile), Storybook 8.6 (component docs)  
**UI:** React 19.2 + React Native + Uniwind 1.3  
**Build:** Turborepo, pnpm workspaces, TypeScript 5  
**Styling:** Tailwind 4.1.5 + Uniwind  
**Architecture:** Module Federation for micro-frontends

## Project Structure

```
├── apps/
│   ├── mobile/
│   │   ├── accounts/       # Expo React Native - Accounts app
│   │   └── shell/          # Expo React Native - Shell app
│   ├── web/
│   │   ├── accounts/       # Vite web app - Accounts
│   │   └── shell/          # Vite web app - Shell
│   └── storybook/          # Component documentation
├── packages/
│   ├── ui/                 # Shared React Native components
│   └── tailwind-config/    # Shared Tailwind/Uniwind configuration
└── turbo.json              # Turborepo configuration
```

## Apps

### 📱 Mobile Apps

Two React Native applications built with **RockJS**:

- **accounts** (`apps/mobile/accounts/`): Mobile application for account management
  - Runs on Metro bundler port 8082
  - iOS and Android support
- **shell** (`apps/mobile/shell/`): Shell mobile application  
  - Runs on Metro bundler port 8081
  - iOS and Android support

Both mobile apps use:
- **RockJS 0.12.9**: Modern React Native framework
- **React Native 0.83**: Core framework
- **Metro bundler**: JavaScript bundler with Module Federation
- **Uniwind**: Tailwind-style utilities for React Native
- **React Navigation 7**: Navigation library

### 🌐 Web Apps

Two web applications built with **Vite**:

- **accounts** (`apps/web/accounts/`): Web interface for account management  
  - Runs on localhost:3001
- **shell** (`apps/web/shell/`): Shell web application  
  - Runs on localhost:5173

Both web apps use:
- **Vite 6**: Lightning-fast build tool
- **React 19.2**: UI library
- **React Native Web**: Renders React Native components as HTML
- **TanStack Router**: Type-safe routing
- **Uniwind**: Shared styling with mobile
- **Module Federation**: Micro-frontend architecture

### 📚 Storybook

Component documentation and visual testing environment (`apps/storybook/`):

- **Storybook 8.6**: Component explorer
- **React Native Web**: Renders mobile components in browser
- **Vite**: Fast development server
- Browse and interact with all shared UI components
- Visual component library documentation
- Isolated component development and testing
- Runs on localhost:6006

## Packages

### 🎨 UI (`packages/ui/`)

Shared component library (`@repo/ui`) containing cross-platform React Native components:

- `Button.tsx` - Universal button component
- `Card.tsx` - Card container component
- `Badge.tsx` - Badge/label component
- `Input.tsx` - Input field component
- `Text.tsx` - Styled text component

All components:
- Styled with **Uniwind** (Tailwind for React Native)
- Use **tailwind-merge** and **tailwind-variants** for dynamic styling
- Work seamlessly on web (via react-native-web) and mobile (native)
- Fully typed with TypeScript
- Compatible with React 19.2 and React Native 0.83

### ⚙️ Tailwind Config (`packages/tailwind-config/`)

Centralized Tailwind/Uniwind configuration:

- Shared PostCSS configuration
- Common Tailwind theme settings
- Shared styles (`shared-styles.css`)

This ensures consistent styling across all apps

## Getting Started

**Prerequisites**: 
- Node.js 20+ (required by RockJS)
- pnpm 10+
- Xcode (for iOS development)
- Android Studio (for Android development)

```bash
# Install dependencies
pnpm install

# Start all apps in development mode
pnpm dev
```

### Running Individual Apps

```bash
# Web apps
pnpm --filter @repo/web-accounts dev      # Accounts web at localhost:3001
pnpm --filter @repo/web-shell dev         # Shell web at localhost:5173

# Mobile apps
pnpm --filter @repo/mobile-accounts dev   # Accounts mobile Metro bundler (port 8082)
pnpm --filter @repo/mobile-shell dev      # Shell mobile Metro bundler (port 8081)

# Storybook
pnpm --filter storybook dev               # Storybook at localhost:6006
```
This monorepo leverages code sharing across platforms:

1. **Shared Components**: `packages/ui/` contains React Native components styled with Uniwind
2. **Web Rendering**: Vite apps use `react-native-web` to render React Native components as HTML/CSS
3. **Mobile Rendering**: RockJS + React Native render components natively on iOS and Android
4. **Unified Styling**: Uniwind provides Tailwind-like utility classes that work identically on both platforms
5. **Module Federation**: Micro-frontend architecture enables code sharing between apps at runtime
6. **Type Safety**: TypeScript 5 configuration is shared and enforced across all apps
7. **Build Optimization**: Turborepo caches and parallelizes builds for maximum efficiency
8. **Modern React**: React 19.2 with latest features across all platforms

### Architecture Benefits

- **Write Once, Run Everywhere**: Components written in `packages/ui` work on web and mobile without changes
- **Consistent Design**: Shared Tailwind 4.1 config ensures pixel-perfect consistency
- **Modern Stack**: React 19, React Native 0.83, RockJS, Vite 6, Storybook 8
- **Developer Experience**: Hot reload, TypeScript, linting, and Module Federation work across all apps
- **Scalability**: Easy to add new apps (web or mobile) that consume shared packages
- **Micro-frontends**: Module Federation enables runtime code sharing and independent deployments

## Development Workflow

```bash
# Add a new shared component
cd packages/ui/src
# Create your component with Uniwind styling
# Export it from index.ts

# Use it in any app
import { YourComponent } from '@repo/ui'

# Test in Storybook
cd apps/storybook
# Add a story for your component
```

## Resources

- [Turborepo docs](https://turbo.build/repo/docs)
- [RockJS docs](https://rock-js.io/)
- [Uniwind docs](https://github.com/adibfara/uniwind)
- [React Native docs](https://reactnative.dev/)
- [React Native Web docs](https://necolas.github.io/react-native-web/)
- [Vite docs](https://vitejs.dev/)
- [Storybook docs](https://storybook.js.org/)
- [Module Federation docs](https://module-federation.io/)
- [Tailwind CSS docs](https://tailwindcss.com/)

## Licensces

- [Build guide](https://www.gurselcakar.com/monorepo) — step-by-step walkthrough
- [Turborepo docs](https://turbo.build/repo/docs)
- [NativeWind docs](https://www.nativewind.dev/)
- [Expo docs](https://docs.expo.dev/)
- [Next.js docs](https://nextjs.org/docs)

## Author

Built by [Gürsel Çakar](https://x.com/gurselcakar) — also the creator of [Hukora](https://hukora.com), a logic-based puzzle game.

## Licence

MIT
