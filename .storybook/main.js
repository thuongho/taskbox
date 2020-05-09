module.exports = {
  stories: [
    '../src/components/**/*.stories.js',
    '../node_modules/thuongho-learnstorybook-design-system/dist/**/*.stories.(js|mdx)'
  ],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
    '@storybook/addon-links',
    './.storybook/design-addon/register.js'
  ]
};
