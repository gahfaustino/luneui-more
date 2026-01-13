import type { StorybookConfig } from '@storybook/react-vite'
import { luneuiInstance } from 'luneui/integration'

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions'
    ],
    framework: {
        name: '@storybook/react-vite',
        options: {}
    },
    docs: {
        autodocs: 'tag'
    },
    viteFinal: async (config) => {
        // Add the luneui instance plugin to handle SCSS and themes
        config.plugins = config.plugins || []
        config.plugins.push(luneuiInstance())
        return config
    }
}

export default config
