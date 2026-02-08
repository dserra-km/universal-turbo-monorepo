# Universal Turbo Monorepo

A production-ready monorepo featuring micro-frontend architecture with Module Federation, cross-platform development using React Native Web, and shared UI components across web and mobile applications.

## 🏗️ Architecture Overview

This monorepo implements a **micro-frontend architecture** using Module Federation, allowing independent development and deployment of application modules while maintaining a cohesive user experience. The shared component library ensures visual consistency across all platforms.

## 📁 Project Structure

```
├── apps/
│   ├── mobile/
│   │   ├── shell/      # Mobile host app (React Native)
│   │   └── accounts/   # Mobile remote module
│   ├── web/
│   │   ├── shell/      # Web host app (Vite + TanStack Router)
│   │   └── accounts/   # Web remote module
│   └── storybook/      # Component documentation and testing
├── packages/
│   ├── ui/             # Shared React Native component library
│   └── tailwind-config/# Shared Tailwind configuration
└── turbo.json          # Turborepo orchestration config
```

## 🚀 Applications

### Web Applications

#### **Web Shell** (`@repo/web-shell`)
**Port:** 5173 (default Vite port)

The main web application that acts as the host for Module Federation remotes.

**Tech Stack:**
- **Vite 6.3.5** - Next-generation frontend build tool with lightning-fast HMR
- **React 19.2.0** - Latest React with concurrent features
- **TanStack Router 1.93** - Type-safe file-based routing system
- **React Native Web 0.21.1** - Renders React Native components as HTML/CSS
- **Module Federation (Vite)** - Micro-frontend orchestration
- **NativeWind 4.1.23** - Cross-platform Tailwind CSS styling

**Key Features:**
- Loads remote modules from Web Accounts app
- File-based routing in `src/routes/`
- Cross-platform component support via React Native Web
- Hot Module Replacement (HMR) for fast development

**Commands:**
```bash
# Using pnpm workspace filter
pnpm --filter @repo/web-shell dev        # Start dev server
pnpm --filter @repo/web-shell build      # Production build
pnpm --filter @repo/web-shell preview    # Preview production build
pnpm --filter @repo/web-shell lint       # Run ESLint
pnpm --filter @repo/web-shell typecheck  # TypeScript validation
```

#### **Web Accounts** (`@repo/web-accounts`)
**Port:** 3001

A federated remote module exposing account-related components to the shell application.

**Tech Stack:**
- Same as Web Shell (Vite, React 19, TanStack Router, React Native Web)
- **Module Federation** - Exposes `./TechStack` component

**Exposed Modules:**
- `./TechStack` - Technical stack information component

**Commands:**
```bash
# Using pnpm workspace filter
pnpm --filter @repo/web-accounts dev        # Start on port 3001
pnpm --filter @repo/web-accounts build      # Production build
pnpm --filter @repo/web-accounts lint       # Run ESLint
pnpm --filter @repo/web-accounts typecheck  # TypeScript validation
```

### Mobile Applications

#### **Mobile Shell** (`@repo/mobile-shell`)
**Port:** 8081 (default Metro bundler port)

The host mobile application built with React Native, using Module Federation for dynamic module loading.

**Tech Stack:**
- **React Native 0.83.0** - Latest React Native framework
- **Rock.js 0.12.9** - Modern React Native build system
- **Metro Bundler** - JavaScript bundler with Module Federation support
- **React Navigation 7** - Navigation library (Native Stack Navigator)
- **NativeWind 4.1.23** - Tailwind CSS for React Native
- **Module Federation (Metro)** - Micro-frontend for React Native
- **React Native Reanimated 4.2.1** - High-performance animations
- **Nodemon** - Auto-restart on file changes

**Key Features:**
- Loads remote modules from Mobile Accounts
- Navigation using React Navigation Native Stack
- Hot reloading with cache reset
- Platform support: iOS & Android

**Commands:**
```bash
# Using pnpm workspace filter
pnpm --filter @repo/mobile-shell dev      # Start with auto-restart
pnpm --filter @repo/mobile-shell start    # Start Metro bundler
pnpm --filter @repo/mobile-shell ios      # Run on iOS simulator
pnpm --filter @repo/mobile-shell android  # Run on Android emulator
pnpm --filter @repo/mobile-shell lint     # Run ESLint
pnpm --filter @repo/mobile-shell test     # Run Jest tests
```

#### **Mobile Accounts** (`@repo/mobile-accounts`)
**Port:** 8082

A federated remote module for the mobile platform, providing account functionality.

**Tech Stack:**
- Same as Mobile Shell (React Native 0.83, Rock.js, Metro with Module Federation)

**Key Features:**
- Exposed as a remote module via Module Federation
- Runs on separate Metro port (8082)
- ADB reverse tunneling for Android development

**Commands:**
```bash
# Using pnpm workspace filter
pnpm --filter @repo/mobile-accounts dev        # Start with auto-restart
pnpm --filter @repo/mobile-accounts start      # Start on port 8082
pnpm --filter @repo/mobile-accounts ios        # Run on iOS simulator
pnpm --filter @repo/mobile-accounts android    # Run on Android emulator
pnpm --filter @repo/mobile-accounts adbreverse # Setup ADB reverse tunneling
pnpm --filter @repo/mobile-accounts lint       # Run ESLint
pnpm --filter @repo/mobile-accounts test       # Run Jest tests
```

### Storybook

#### **Storybook** (`storybook`)
**Port:** 6006

Interactive component documentation and testing environment for the shared UI library.

**Tech Stack:**
- **Storybook 8.6.12** - UI component development environment
- **Vite 6.2.0** - Build tool for fast dev server
- **React 19.2.0** - Component framework
- **React Native Web 0.21.1** - RN components in Storybook
- **@storybook/addon-react-native-web** - RN Web integration for Storybook

**Key Features:**
- Interactive component showcase
- Visual testing of UI components
- Component documentation
- Preview React Native components in browser

**Commands:**
```bash
# Using pnpm workspace filter
pnpm --filter storybook dev      # Start Storybook on port 6006
pnpm --filter storybook build    # Build static Storybook
pnpm --filter storybook lint     # Run ESLint
```

## 📦 Shared Packages

### **UI Package** (`@repo/ui`)

Shared React Native component library used across all applications.

**Components:**
- `Badge` - Status and label badges
- `Button` - Interactive buttons with variants
- `Card` - Container component for content
- `Input` - Form input fields
- `Text` - Typography component

**Tech Stack:**
- **React Native 0.83.0** - Component foundation
- **NativeWind 4.1.23** - Styling system
- **Tailwind Merge** - Utility class merging
- **Tailwind Variants** - Component variant management

**Usage:**
```typescript
import { Button, Card, Text } from '@repo/ui'
```

### **Tailwind Config** (`@repo/tailwind-config`)

Centralized Tailwind CSS configuration and shared styles.

**Exports:**
- `./preset` - Tailwind workspace preset
- `./shared-styles.css` - Global CSS styles

## 🛠️ Getting Started

### Prerequisites

- **Node.js 20+** (engines requirement for mobile apps)
- **pnpm 10.28.2+** (specified in packageManager)
- **Xcode** (for iOS development)
- **Android Studio** (for Android development)

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd universal-turbo-monorepo

# Install dependencies
pnpm install
```

### Development

**Start all applications:**
```bash
pnpm dev
```

This starts:
- Web Shell (localhost:5173)
- Web Accounts (localhost:3001)
- Mobile Shell (Metro on port 8081)
- Mobile Accounts (Metro on port 8082)
- Storybook (localhost:6006)

**Start specific applications:**
```bash
# Web applications
pnpm --filter @repo/web-shell dev
pnpm --filter @repo/web-accounts dev

# Mobile applications
pnpm --filter @repo/mobile-shell dev
pnpm --filter @repo/mobile-accounts dev

# Storybook
pnpm --filter storybook dev
```

### Running Mobile Apps on Devices

**iOS:**
```bash
pnpm --filter @repo/mobile-shell ios
pnpm --filter @repo/mobile-accounts ios
```

**Android:**
```bash
# First, setup ADB reverse tunneling
pnpm --filter @repo/mobile-accounts adbreverse

# Then run the apps
pnpm --filter @repo/mobile-shell android
pnpm --filter @repo/mobile-accounts android
```

## 📋 Available Commands

### Root Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start all applications in development mode |
| `pnpm build` | Build all applications for production |
| `pnpm lint` | Run ESLint across all workspaces |
| `pnpm typecheck` | Run TypeScript type checking on all workspaces |

### Workspace Filtering

Use `pnpm --filter <workspace>` to run commands in specific workspaces:

```bash
# Examples
pnpm --filter @repo/web-shell dev
pnpm --filter @repo/mobile-shell ios
pnpm --filter @repo/ui typecheck
pnpm --filter storybook build
```

## 🏭 Build System

### Turborepo Configuration

The monorepo uses Turborepo for task orchestration with intelligent caching and parallel execution.

**Tasks:**
- `build` - Production builds with dependency graph awareness
- `dev` - Development servers (persistent, no cache)
- `lint` - Code linting with dependency ordering
- `typecheck` - TypeScript validation with dependency ordering

### Module Federation

**Web (Vite):**
- Host: `web-shell` loads remotes from `web-accounts`
- Remote: `web-accounts` exposes components at `http://localhost:3001/remoteEntry.js`
- Shared: React and React DOM are shared between host and remotes

**Mobile (Metro):**
- Host: `mobile-shell` loads remotes from `mobile-accounts`
- Remote: `mobile-accounts` runs on separate Metro port (8082)
- Uses `@module-federation/metro` and `@module-federation/metro-plugin-rnef`

## 🎨 Styling System

All applications use **NativeWind**, which provides cross-platform Tailwind CSS styling:

```typescript
<View className="flex-1 items-center justify-center bg-blue-500">
  <Text className="text-white font-bold">Hello World</Text>
</View>
```

- Works identically on web (via React Native Web) and mobile (native)
- Shared configuration in `packages/tailwind-config`
- Type-safe with TypeScript

## 🧪 Testing

```bash
# Run tests for mobile apps
pnpm --filter @repo/mobile-shell test
pnpm --filter @repo/mobile-accounts test
```

Tests use:
- **Jest 29** - Testing framework
- **React Test Renderer** - Component testing

## 📚 Key Dependencies

### Shared Dependencies (enforced via pnpm overrides)
- **React 19.2.0** - Consistent React version across all apps
- **React Native 0.83.0** - Latest React Native
- **React Native Web 0.21.1** - Web rendering
- **Tailwind CSS 3.4.18** - Styling framework

### Build Tools
- **Turborepo 2.7.2** - Monorepo build system
- **Vite 6+** - Web build tool
- **Metro** - React Native bundler
- **Rock.js 0.12.9** - Modern RN build system

### Routing
- **TanStack Router 1.93** - Web routing (type-safe, file-based)
- **React Navigation 7** - Mobile navigation

## 🔧 Development Tools

- **ESLint** - Code linting
- **TypeScript 5+** - Type safety
- **Prettier** - Code formatting (mobile apps)
- **Nodemon** - Auto-restart for mobile development

## 📱 Mobile Development Notes

### Rock.js
Mobile apps use Rock.js, a modern build system for React Native that provides:
- Fast Metro bundler setup
- Plugin architecture
- Platform-specific builds for iOS and Android

### Android Development
The Mobile Accounts app requires ADB reverse tunneling for remote module loading:
```bash
pnpm --filter @repo/mobile-accounts adbreverse
```

This maps port 8082 from the Android device to your local machine.

## 🚢 Production Build

```bash
# Build all applications
pnpm build

# Build specific applications
pnpm --filter @repo/web-shell build
pnpm --filter @repo/web-accounts build
pnpm --filter storybook build
```

## 📖 Resources

- [Turborepo Documentation](https://turbo.build/repo/docs)
- [NativeWind Documentation](https://www.nativewind.dev/)
- [Module Federation](https://module-federation.io/)
- [React Native Documentation](https://reactnative.dev/)
- [TanStack Router](https://tanstack.com/router)
- [Vite Documentation](https://vite.dev/)
- [Rock.js Documentation](https://rock-js.org/)

## 📄 License

MIT
