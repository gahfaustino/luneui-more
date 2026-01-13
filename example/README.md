# 🌙 LuneUI Example Application

Example application showcasing the **LuneUI** design system - a multi-framework component library with lunar-themed designs.

## 🚀 Quick Start

### Prerequisites
- Node.js 20.18+
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/gahfaustino/luneui-more
cd luneui-example
```

2. **Install dependencies**
```bash
npm install
```

3. **Link the LuneUI design system** (for development)
```bash
# First, build and link luneui
cd ../luneui
npm run build:pkg
npm link

# Then link it in the example app
cd ../luneui-example
npm link luneui
```

## 📦 Available Scripts

### Development
```bash
npm run dev
```
Starts the development server at `http://localhost:5173`

### Storybook
```bash
npm run storybook
```
Opens Storybook at `http://localhost:6006` to explore and test components interactively with:
- 🎨 Theme switcher (TechCorp Dark / Old Store Ltda Light)
- 📖 Interactive component documentation
- 🧪 Live component testing and props manipulation

### Build Storybook
```bash
npm run build-storybook
```
Builds a static version of Storybook for deployment

### Build Production
```bash
npm run build
```
Builds the app for production

### Lint
```bash
npm run lint
```
Runs ESLint to check code quality

### Preview
```bash
npm run preview
```
Preview the production build locally

## 🎨 Features

### Components Showcase
- **Button**: Multiple themes (primary, secondary, outline, flat, info, success, warning, alert)
- **Input**: Form inputs with validation states and real-time feedback
- **Themes**: Switch between TechCorp (dark) and Old Store Ltda (light)
- **WCAG Compliant**: Accessibility features built-in

### Storybook Integration
- Interactive component playground
- Live theme switching
- Props documentation and controls
- Real-time code examples

## 🛠️ Tech Stack

- **React** 19.2+
- **TypeScript** 5.9+
- **Vite** 7.3+
- **Storybook** 8.6.15
- **LuneUI** (local design system)
- **SCSS** with CSS Modules

## 📚 Documentation

Visit the Storybook to see all available components and their usage examples:
```bash
npm run storybook
```

## 🌙 Themes

### TechCorp (Dark)
Midnight Moon theme with purple/lavender palette perfect for modern tech applications

### Old Store Ltda (Light)
Lunar Dawn theme with soft lavender tones for a lighter, airy experience

## 🤝 Development

This example app is designed to work with the local LuneUI design system. Make sure to:

1. Build LuneUI first: `cd ../luneui && npm run build:pkg`
2. Link it properly: `npm link luneui`
3. Restart dev server after LuneUI changes

## 📝 License

MIT
