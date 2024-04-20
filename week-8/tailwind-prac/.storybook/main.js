export default {
    stories: ['../src/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
      '@storybook/addon-links',
      '@storybook/addon-essentials',
      '@storybook/addon-styling-webpack'
    ],
    core: {
      builder: '@storybook/builder-vite', // 👈 The builder enabled here.
    },
};